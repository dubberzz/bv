import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import NotFound from './views/NotFound';
import GlobalWrapper from './views/GlobalWrapper';
import CreateAccount from './views/CreateAccount';
import ForgotPassword from './views/ForgotPassword';
import Login from './views/Login';
import Products from './views/Products';
import Home from "./views/Home";
import Redux from './views/Redux';
import About from './views/About';
import Admin from './views/Admin';
import {Provider} from "react-redux";
import {store} from './store/store';
import Product from './views/Product';
import UserAccount from './views/UserAccount/UserAccount';
import PrivateOutlet from './views/PrivateOutlet';

import Trasee from './views/Trasee';
import Bc from './views/Trasee/cities/bc';
import Bv from './views/Trasee/cities/bv';
import Market from './views/Market';
import Rent from './views/Rent';


function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalWrapper>
                    <Routes>
                        <Route path="login" element={<Login/>}/>
                        <Route path="create_account" element={<CreateAccount/>}/>
                        <Route path="forgot_password" element={<ForgotPassword/>}/>
                        
                        <Route path="bc" element={<Bc />} />
                        <Route path="bv" element={<Bv />} />
                        
                        <Route path="/" element ={<PrivateOutlet/>} >
                            <Route index element={<Home log={false}/>}/>
                            <Route path="products" element={<Products/>}/>
                            <Route path="products/:id" element={<Product/>}/>
                            <Route path="admin" element={<Admin/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="account" element={<UserAccount/>}/>
                            <Route path="trasee" element={<Trasee />}/> 
                            <Route path="market" element={<Market prod={3} />}/>
                            <Route path="rent" element={<Rent />}/>
                        <Route path="*" element={<NotFound/>}/>
                        </Route>
                    </Routes>
                </GlobalWrapper>
            </BrowserRouter>
        </Provider>
);

}
export default App;
