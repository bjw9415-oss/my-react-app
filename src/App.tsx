// import React from 'react'
import './App.css'
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Order } from './pages/Order';
import { BrowserRouter,Routes,Route } from "react-router";
import {ConcertsHome} from './pages/concerts/ConcertsHome'
import { City } from './pages/concerts/City';
import { Trending } from './pages/concerts/Trending';
function App() {

  return (
    // <BrowserRouter> 
    //  <Routes>
    //    <Route index element={<Home/>}/>
    //    <Route path="Order" element={<Order/>}/>
    //    <Route path="Cart" element={<Cart/>}/>
    //    <Route path="product-detail" element={<ProductDetail/>}/>
    //    <Route path="concerts">
    //      <Route index element={<ConcertsHome/>}/>
    //      <Route path="City" element={<City/>}/>
    //      <Route path="Trending" element={<Trending/>}/>
    //     </Route>

    //    </Route>
    //  </Routes>
    //  </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product-detail" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<Order />} />
        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
