import React, { useState, useEffect } from 'react'
import Cards from '../../components/Cards'
import { HiOutlineFilter } from "react-icons/hi";

const Shop = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectStatus, setSelectStatus] = useState("all")
  const [sortingOptions, setSortingOptions] = useState("default")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data)
        setFilteredProducts(data)
      } catch (err) {
        console.log("Error fetch data: ". err);
      }
    }

    fetchData()
  }, [])

  const filterProducts = (status) => {
    const filteredStatus = status === "all" ? (products) : products.filter((item) => item.status === status);

    setFilteredProducts(filteredStatus)
    setSelectStatus(status)
  }

  const allProducts = () => {
    setFilteredProducts(products)
    selectStatus("all")
  }

  //sorting function
  const sorting = (option) => {
    setSortingOptions(option)

    let sortedProducts = [...filteredProducts]

    if(option == "A-Z"){
      sortedProducts.sort((a,b) => a.brand.localeCompare(b.brand))
    }else if(option == "Z-A"){
      sortedProducts.sort((a,b) => b.brand.localeCompare(a.brand))
    }else if(option == "low-to-high"){
      sortedProducts.sort((a,b) => a.price- b.price)
    }else if(option === "high-to-low"){
      sortedProducts.sort((a,b) => b.price - a.price)
    }else{
      setSortingOptions("default")
    }
    setFilteredProducts(sortedProducts)
  }

    
  return (
    <div className='max-w-full h-auto mx-auto bg-neutral-50 md:px-24 md:py-10 px-10 py-4'>
      <div className='container'>
        <h1 className="text-Neutral1 text-3xl text-center mb-5 font-medium uppercase">Hawaii Shark</h1>
        
        <div className='flex justify-between mb-4 text-Neutral2 font-medium md:px-2 text-sm'>
          <div className='flex flex-col md:flex-row items-start gap-1 md:gap-3'>
            <button onClick={allProducts}>All products</button>
            <button onClick={() => filterProducts("Recommended")}>Recommended</button>
            <button onClick={() => filterProducts("New Arrival")}>New Arrival</button>    
          </div>

          {/* Sorting Options */}
          <div className='flex gap-1 items-center self-end'>
            <div>
              <HiOutlineFilter className='stroke-Neutral2 h-4 w-4 '/>
            </div>
            <select 
            id='sort'
            className='px-1 bg-white focus:outline-none '
            value={sortingOptions}
            onChange={(e) => sorting(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>

        </div>

        <div className='flex justify-center items-center'>
          <Cards filteredItems={filteredProducts}/>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default Shop