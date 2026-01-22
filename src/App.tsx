import React, { Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router';

import './App.css';

// import Home from './pages/Home';
// import ProductDetail from './pages/ProductDetail';
// import Cart from './pages/Cart';
// import Order from './pages/Order';
// import NotFound from './pages/NotFound';
// import ConcertsHome from './pages/concerts/ConcertsHome';
// import City from './pages/concerts/City';
// import Trending from './pages/concerts/Trending';

const Home = React.lazy(() => import('@/pages/Home'));
const ProductDetail = React.lazy(() => import('@/pages/ProductDetail'));
const Cart = React.lazy(() => import('@/pages/Cart'));
const Order = React.lazy(() => import('@/pages/Order'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
const ConcertsHome = React.lazy(() => import('@/pages/concerts/ConcertsHome'));
const City = React.lazy(() => import('@/pages/concerts/City'));
const Trending = React.lazy(() => import('@/pages/concerts/Trending'));
//
const UseCallback = React.lazy(() => import('@/pages/UseCallback'));
const UseMemo = React.lazy(() => import('@/pages/UseMemo'));
const Condition = React.lazy(() => import('@/pages/Condition'));
const UseEffectExample = React.lazy(() => import('@/pages/UseEffectExample'));
const UserListPage = React.lazy(() => import('@/pages/UserListPage'));
const ContextPage = React.lazy(() => import('@/pages/ContextPage'));
const ThemeAppPage = React.lazy(() => import('@/pages/ThemeAppPage'));
const ProductPage = React.lazy(() => import('@/pages/shopping/ProductPage'));
const UseTogglePage = React.lazy(() => import('@/pages/UseTogglePage'));
const UseLocalStoragePage = React.lazy(() => import('@/pages/UseLocalStoragePage'));
const UseFetchPage = React.lazy(() => import('@/pages/UseFetchPage'));
const UseDebouncePage = React.lazy(() => import('@/pages/UseDebouncePage'));

function App() {
  return (
    <BrowserRouter basename="/my-react-app">
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="usecallback" element={<UseCallback />} />
          <Route path="useMemoExample" element={<UseMemo />} />
          <Route path="condition" element={<Condition />} />
          <Route path="useEffectExample" element={<UseEffectExample />} />
          <Route path="user-list" element={<UserListPage />} />
          <Route path="context-Page" element={<ContextPage />} />
          <Route path="theme-app" element={<ThemeAppPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="useTogglePage" element={<UseTogglePage />} />
          <Route path="useLocalStoragePage" element={<UseLocalStoragePage />} />
          <Route path="useFetchPage" element={<UseFetchPage />} />
          <Route path="useDebouncePage" element={<UseDebouncePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
