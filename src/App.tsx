import React from 'react'
import './App.css'

import Layout from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Token } from './Pages/Token'
import { Docs } from './Pages/Docs'
<<<<<<< HEAD
import { KerongLcs } from './Pages/KerongLcs'
=======
import { Architecture } from './Pages/Architecture'
>>>>>>> bfd3330987804d847a80d04a298d37fdaa924670

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Docs />} />
<<<<<<< HEAD
                    <Route path="/kerong-lcs" element={<KerongLcs />} />
                    <Route path="/token" element={<Token />} />
=======
                    <Route path="/architecture" element={<Architecture />} />
>>>>>>> bfd3330987804d847a80d04a298d37fdaa924670
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
