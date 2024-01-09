import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/noudev.png'
import Logo2 from '../../assets/noudevdark.png'
import { Search } from '../Sections/Search'

export const Header = () => {
    const [darkMode, setDarkMode ]= useState(JSON.parse(localStorage.getItem('darkMode'))|| false);
    const [searchSection , setSearchSection]= useState(false);

    useEffect(()=>{
      localStorage.setItem('darkMode',JSON.stringify(darkMode));
      if (darkMode){
        document.documentElement.classList.add('dark');
      } else{
        document.documentElement.classList.remove('dark');
      }
    },[darkMode])

    const logoSource = darkMode ? Logo2 : Logo;
    
  return (
    <header>
        

        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logoSource} className="h-8" alt="NouhaDev Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-book</span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span onClick={()=> setDarkMode(!darkMode)}className="cursor-ponter text-xl text-gray-700 dark:text-white bi bi-gear-wide-connected"></span>
            <span onClick={()=> setSearchSection(!searchSection)} className="cursor-ponter text-xl text-gray-700 dark:text-white bi bi-search"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                 <span className="text-2xl bi bi-cart4 relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                 </span> 
            </Link>
            <span className="cursor-ponter text-xl text-gray-700 dark:text-white bi bi-person-circle"></span>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link to="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-900 dark:text-white hover:underline">Login</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-900 dark:text-white hover:underline">Register</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-900 dark:text-white hover:underline">Features</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection}></Search>}
        
    </header>
  )
}
