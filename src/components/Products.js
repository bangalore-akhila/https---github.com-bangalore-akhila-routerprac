import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <nav className='primary-nav'>
    <Link to='featured'>FeaturedProducts</Link>
    <Link to='new'>NewProduct</Link>
    <Outlet/>
    </nav>
  )
}

export default Products