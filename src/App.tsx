import React from 'react'
import './App.css'

import Layout from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Token } from './Pages/Token'
import { Docs } from './Pages/Docs'
import { KerongLcs } from './Pages/KerongLcs'
import { Architecture } from './Pages/Architecture'
import { Structure } from './Pages/Structure'
import {KerongApiObj} from "./Pages/KerongApiObj";
import {KerongApiLocks} from "./Pages/KerongApiLocks";
import {KerongApiBu} from "./Pages/KerongApiBu";
import {KerongApiCu} from "./Pages/KerongApiCu";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Docs />} />
                    <Route path="/kerong-lcs" element={<KerongLcs />} />
                    <Route path="/token" element={<Token />} />
                    <Route path="/structure" element={<Structure />} />
                    <Route path="/cu" element={<KerongApiCu />} />
                    <Route path="/bu" element={<KerongApiBu />} />
                    <Route path="/obj" element={<KerongApiObj />} />
                    <Route path="/locks" element={<KerongApiLocks />} />
                    <Route path="/architecture" element={<Architecture />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
