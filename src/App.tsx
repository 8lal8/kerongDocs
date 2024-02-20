import React from 'react'
import './App.css'

import Layout from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Token } from './Pages/Token'
import { Docs } from './Pages/Docs'
import { KerongLcs } from './Pages/KerongLcs'
import { Architecture } from './Pages/Architecture'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Docs />} />
                    <Route path="/kerong-lcs" element={<KerongLcs />} />
                    <Route path="/token" element={<Token />} />
                    <Route path="/architecture" element={<Architecture />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
