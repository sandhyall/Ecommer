import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import {Toaster} from "sonner"
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPages from './pages/CollectionPages'
import ProductDetails from './components/Product/ProductDetails'
import CheckOut from './components/Cart/CheckOut'
import OrderConfirmationpgae from './pages/OrderConfirmationpgae'
import OrderDetails from './pages/OrderDetails'
import MyOrdersPages from './pages/MyOrdersPages'
import AdminLayout from './components/Admin/AdminLayout'

const App=()=> {
  return (
    <div>
    <BrowserRouter>
    <Toaster position="top-right"/>
    <Routes>
      <Route path='/' element={<UserLayout></UserLayout>}>{/* user layout */}
      <Route index element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='profile' element={<Profile/>}></Route>
      <Route path='collection/:collection' element={<CollectionPages/>}></Route>
      <Route path='product/:id' element={<ProductDetails/>}></Route>
      <Route path='checkout' element={<CheckOut/>}></Route>
      <Route path='orderconfirmation' element={<OrderConfirmationpgae/>}></Route>
      <Route path='order/:id' element={<OrderDetails/>}></Route>
      <Route path='my-orders' element={<MyOrdersPages/>}></Route>
      </Route>

      <Route path='/admin' element={<AdminLayout/>}>{/* Admin layout*/}</Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App