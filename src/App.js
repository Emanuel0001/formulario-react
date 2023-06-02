import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard'
import PageSucess from './sucess'
function App () {
    return (
        //rotas
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/success" element={<PageSucess />}/>
            </Routes>
        </Router>
    )
} export default App;