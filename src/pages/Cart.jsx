import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Fill } from "react-icons/ri";

const Cart = () => {
  
  // const [cartItems, setCartItems] = useState([])
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  
  useEffect(() => {
    //fetch cart item from localStorage
    try {
      const storedCartItems = cartItems;
      setCartItems(storedCartItems)
    } catch(err){
      console.log("Error parsing: ", err);
    }

    localStorage.setItem("tasks", JSON.stringify(cartItems))
    
  }, [])

  const calculateTotalPrice = (item) => {
    return item.price
  }

  const handleRemoveItem = (item) => {
    const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id)

    //update new cart
    window.location.reload();
    setCartItems(updateCart)
    updateLocalStorage(updateCart)
    
  }

  const updateLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const cartSubTotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item)
  }, 0)

  const orderTotal = cartSubTotal

  return (
    <div className='max-w-full min-h-screen mx-auto bg-neutral-100 md:px-24 md:py-10 px-10 py-4'>
      <div className='flex flex-col items-center gap-5'>

        <div className='flex flex-row gap-2 items-center justify-center'>
          <h1 className='text-2xl text-Neutral1 font-medium uppercase'>Shopping Cart</h1>
          <div className='bg-Sky text-white px-2 py-1 rounded-md' id="cart-qty">{cartItems.length}</div>
        </div>
        
        <table className='w-full h-full bg-white border-collapse border border-neutral-300'>

          <thead>
            <tr className='text-Neutral1 font-medium uppercase'>
              <th className="border border-neutral-300 w-9/12 p-2">Products</th>
              <th className="border border-neutral-300 w-1/12 p-2">Size</th>
              <th className="border border-neutral-300 w-1/12 p-2">Price</th>
              <th className="border border-neutral-300 w-1/12 p-2">Edit</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.length === 0 ? (
              <tr >
                <td colSpan="4" className="text-center py-4">
                Your cart is empty
                </td>
              </tr>
              ) : cartItems.map((item, id) => (
                <tr key={id} className=''>
                  <td className='border border-neutral-300'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-4'>

                      <div className='flex justify-center items-center p-2'>
                        <Link to={`/shop/${item.id}`}>
                          <img src={item.image} alt="" className='w-44 h-44 object-cover' />
                        </Link>
                      </div>

                      <div className='md:col-start-2 md:col-span-2'>
                        <div className='flex flex-col p-2 gap-2 text-Neutral2'>
                          <h3 className='text-lg text-Neutral1 uppercase font-medium'>{item.brand}</h3>
                          <p className='text-sm italic'>{item.fabric}</p>
                        </div>     
                      </div>

                    </div>     
                  </td>

                  <td className='text-center uppercase border border-neutral-300'>
                    <h2 className='font-medium text-neutral-500'>{item.size}</h2>
                  </td>

                  <td className='text-center border border-neutral-300'>
                    <h2 className='font-medium text-emerald-600'><span>&#3647;</span>{item.price}</h2>
                  </td>

                  <td className='text-center border border-neutral-300'>
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className='text-red-500 text-xl'
                      type='submit'
                    >
                      <RiDeleteBin6Fill />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <div className='flex flex-row justify-center md:justify-end mt-5'>
        <div className='flex flex-col gap-2 w-5/6 md:w-3/6 h-2/6 py-2 px-4 md:py-10 md:px-10 text-Neutral1 rounded-md shadow-md bg-neutral-50 uppercase text-sm'>
          
          <h2 className='text-center text-xl font-medium'>Cart Total</h2>

          <div className='flex flex-row justify-between border-b py-1'>
            <h3>Subtotal</h3>
            <h3><span>&#3647;</span>{cartSubTotal}</h3>
          </div>

          <div className='flex flex-row justify-between border-b py-1'>
            <h3>Free Shipping</h3>
            <h3>0.00</h3>
          </div>

          <div className='flex flex-row justify-between border-b py-1'>
            <h3>Total</h3>
            <h3 className='font-medium text-Sky'><span>&#3647;</span>{orderTotal.toFixed(2)}</h3>
          </div>

          <button className='mt-4 py-2 bg-Neutral1 hover:bg-neutral-500 text-sm text-white rounded-sm'>Check Out</button>
        
        </div>
      </div>

    </div>
  )
}

export default Cart