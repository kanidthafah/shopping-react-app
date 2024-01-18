import React, { useState, useEffect } from 'react'
import { Link, useParams, redirect } from 'react-router-dom'
import Recommended from './Home/Recommended';

const SingleProduct = () => {

    const { id } = useParams();
    const [products, setProducts] = useState([])
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [existingCart, setExistingCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await fetch("/products.json");
          const data = await response.json();
          const product = data.filter((p) => p.id == id)
          // console.log(product);
          setProducts(product[0])
        } catch (err) {
          console.log("Error fetch data: ". err);
        }
      }
        
      fetchData()

    }, [id])
    
    const { brand, price, size, image, fabric, detail} = products  ;

    const handleAddToCart = (e) => {
      e.preventDefault();
      if(!isAddedToCart){
        const addProduct = {
          id: id,
          brand: brand,
          price: price,
          image: image,
          size: size,
          fabric: fabric,
          detail: detail,
        };
        // console.log(addProduct);

        // Retrieve existing cart items from LocalStorage
        // const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        // Check if the product already exists in the cart
        const existingItemID = existingCart.find((item) => item.id === addProduct.id);

        // If the product exists, don't add it again (since limit is 1)
        if (existingItemID) {     
          setIsAddedToCart(false);
        }else{
           // Update LocalStorage with the updated cart items
          localStorage.setItem('cart', JSON.stringify([...existingCart, addProduct]));
          setIsAddedToCart(true);
        }
        window.location.reload();
    };
  }

    const handleBuyNow = (e) => {
      handleAddToCart(e); // Execute the same logic as adding to cart
  
      // Redirect to the cart page after adding the item
      return redirect("/cart");
    };

  return (

    <div className='max-w-full min-h-screen px-10 py-4 md:px-24 md:py-14 flex flex-col items-center gap-4 bg-neutral-50'>

        <Link to="/shop" className='ps-6 self-start text-sm font-medium text-Neutral1'>&#10094; All products</Link>

        <div className='w-11/12 h-full md:h-5/6 mb-5 px-4 py-4 md:px-10 flex justify-center items-center bg-white rounded-md drop-shadow '>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>  

            <div className='m-2'>
                <img src={image} alt="" className='w-full h-full rounded-md object-cover' />
            </div>

            <div className='flex flex-col justify-between m-2'>

              <div className='flex flex-col gap-4 mb-5 text-Neutral2'>
                <h1 className='text-2xl md:text-4xl font-medium text-Neutral1 text-center md:text-start'>{brand}</h1>

                <div className='flex flex-col gap-1 text-start text-sm md:text-base'>
                  <h2 className='uppercase'>
                      <span className='font-medium'>Size: </span>
                      {size}
                  </h2>
                  <h2>
                      <span className='uppercase font-medium'>Fabric: </span> 
                      {fabric}
                  </h2>
                  <h2>
                      <span className='uppercase font-medium'>Detail: </span>
                      {detail}
                  </h2>
                </div>

                <h2 className='text-2xl font-medium text-emerald-500'><span>&#3647;</span>{price}</h2>
              </div>

              <form className='flex flex-row justify-end gap-2'>
                <button 
                  id='addToCart'
                  onClick={handleAddToCart}
                  className={`px-4 py-2 bg-Neutral1 text-white text-sm rounded shadow-sm shadow-neutral-500 hover:scale-105`}
                >
                  Add to cart
                </button>
                <button
                  onClick={handleBuyNow}
                  type='submit'
                  className='px-4 py-2 bg-emerald-500 text-white text-sm rounded shadow-sm shadow-emerald-600 hover:scale-105'
                >
                  <Link to="/cart">Buy now</Link>
                </button>
              </form>
              
            </div>
          
          </div>         
        
        </div>

        <Recommended/>

    </div>
  )
}

export default SingleProduct