import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

const navigate = useNavigate();

  return (
    <>
    <div>Home Page Data</div>
    <button onClick={()=> navigate('order_summary')}>Place Your Order</button>
    </>
  )
}

export default Home