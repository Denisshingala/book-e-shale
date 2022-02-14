import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/body';
import Footer from './components/footer';
import Head from './components/Head';
import Navbar from './components/navabar';
import Register from './components/register';
import Error from './components/404';
import EditProduct from './components/edit_product';
import Product from './components/product';
import ProductList from './components/product-list';

const App = () => {
    return (
        <>
            <Router>
                <Head />
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Body />}></Route>
                    <Route path='/register' element={<Register />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/edit-product' element={<EditProduct />} />
                    <Route path='/product-list' element={<ProductList />} />
                    <Route path='/*' element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App