import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/App.scss';


import Logement from './pages/Fiche-logement'
import Error from'./pages/Error404'
import About from './pages/About';
import Home from './pages/Home';



function App() {

    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/about' element = {<About/>}/>
                <Route path='/logement/:id' element = {<Logement/>}/>
                <Route path='*' element = {<Error/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default App;
