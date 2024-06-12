import React, { Suspense } from 'react';
import { AuthProvider } from '../components/Auth';
import NavBar from '../components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
//import About from '../components/About';
import OrderSummary from '../components/OrderSummary';
import PageNotFound from '../components/PageNotFound';
import Products from '../components/Products';
import FeaturedProducts from '../components/FeaturedProducts';
import NewProduct from '../components/NewProduct';
import Users from '../components/Users';
import UserDetails from '../components/UserDetails';
import Profile from '../components/Profile';
import Loginpage from '../components/Loginpage';
import {RequireAuth} from '../components/RequireAuth';


const LazyAbout = React.lazy(()=> import ('../components/About'))

const RoutesDetails = () => {
  return (
    <div>
      <AuthProvider>
      <NavBar/>
     <Routes>
      <Route path='/' element={<Home/> } />

      <Route path='/about' element={<Suspense fallback="---loading"><LazyAbout/></Suspense> } />

      {/* <Route path='/about' element={<About/> } /> */}

      <Route path='/order_summary' element={<OrderSummary/> } />
      <Route path='/products' element={<Products/>}>  
      <Route index element={<FeaturedProducts/>}/>
        <Route path='featured' element={<FeaturedProducts/>}/>
        <Route path='new' element={<NewProduct/>}/>
      </Route>
      <Route path='/Users' element={<Users/>} >
      <Route path=':userId' element={<UserDetails/>} />
        </Route>
       
        <Route path='/profile' element={ <RequireAuth><Profile/> </RequireAuth>} />
       
        <Route path='/login' element={<Loginpage/>} />
      <Route path='*' element={<PageNotFound/>} />
      
     </Routes>
     </AuthProvider>
    </div>
  )
}

export default RoutesDetails