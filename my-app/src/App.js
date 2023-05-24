import React, { useState } from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Her from "./components/Her";
import Him from "./components/Him";
import Kids from "./components/Kids";
import Basket from './components/Basket';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    

    return(
        <>
            
            <Router>
            <Navbar />
                <Routes>
                    <Route path='/' element={ <Home />} exact/>
                    <Route path='/Her' element={ <Her />} exact/>
                    <Route path='/Him' element={ <Him />} exact/>
                    <Route path='/Kids' element={ <Kids />} exact/>
                    <Route path='/Basket' element={ <Basket />} exact/>
                </Routes>
            </Router>
    
        </>

    

    )
};
export default App;