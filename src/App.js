import React, {Componenet} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import Main from './Component/Main';
import Product from './Component/Product';
import NotFound from './Component/NotFound';

function App() {
  return (
  <div>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path = "/" element ={<Main/>}></Route>
            <Route path = "/product/:productId" element = {<Product/>}></Route>
            <Route path = "*" element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
