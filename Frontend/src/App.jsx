import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPages from './pages/CollectionPages';
import ProductDetails from './components/Product/ProductDetails';
import CheckOut from './components/Cart/CheckOut';
import OrderConfirmationpgae from './pages/OrderConfirmationpgae';
import OrderDetails from './pages/OrderDetails';
import MyOrdersPages from './pages/MyOrdersPages';
import AdminLayout from './components/Admin/AdminLayout';
import AdminHomepage from './pages/AdminHomepage';
import UserMangaement from './components/Admin/UserMangaement';
import ProductMangement from './components/Admin/ProductMangement';
import EditProduct from './components/Admin/EditProduct';
import OrderManagement from './components/Admin/OrderManagement';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>

          {/* User Layout and Routes */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="collection/:collection" element={<CollectionPages />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="orderconfirmation" element={<OrderConfirmationpgae />} />
            <Route path="order/:id" element={<OrderDetails />} />
            <Route path="my-orders" element={<MyOrdersPages />} />
          </Route>

          {/* Admin Layout and Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHomepage />} />
            {/* Add more admin routes like /admin/users, /admin/products etc. */}
            <Route path='users' element={<UserMangaement/>}/>
             <Route path='products' element={<ProductMangement/>}/>
             <Route path='products/:id/edit' element={<EditProduct/>}/>
             <Route path='orders' element={<OrderManagement/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
