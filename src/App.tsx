import React from 'react'
import './App.css'

import Layout from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Token } from './Pages/Token'
import { Docs } from './Pages/Docs'
import { KerongLcs } from './Pages/KerongLcs'
import { Architecture } from './Pages/Architecture'
import { Structure } from './Pages/Structure'
import { KerongApiObj } from './Pages/KerongApiObj'
import { KerongApiLocks } from './Pages/KerongApiLocks'
import { KerongApiBu } from './Pages/KerongApiBu'
import { KerongApiCu } from './Pages/KerongApiCu'
import { Krcu16 } from './Pages/Krcu16'
import { PassCu16 } from './Pages/PassCu16'
import { Krcu48 } from './Pages/Krcu48'
import { PassCu48 } from './Pages/PassCu48'
import { Krcu48b } from './Pages/Krcu48b'
import { PassCu48b } from './Pages/PassCu48b'
import { KerongApiAuth } from './Pages/KerongApiAuth'
import { GetUsers } from './Pages/GetUsers'
import { GetUsersId } from './Pages/GetUsersId'
import { GetRoles } from './Pages/GetRoles'
import { GetRoleId } from './Pages/GetRoleId'
import { DelRole } from './Pages/DelRole'
import { PostRole } from './Pages/PostRole'
import { PostUser } from './Pages/PostUser'
import { DelUser } from './Pages/DelUser'
import { PatchRole } from './Pages/PatchRole'
import { PatchUser } from './Pages/PatchUser'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Docs />} />
                    <Route path="/architecture" element={<Architecture />} />
                    <Route path="/kerong-lcs" element={<KerongLcs />} />
                    <Route path="/token" element={<Token />} />
                    <Route path="/structure" element={<Structure />} />
                    <Route path="/cu" element={<KerongApiCu />} />
                    <Route path="/bu" element={<KerongApiBu />} />
                    <Route path="/obj" element={<KerongApiObj />} />
                    <Route path="/locks" element={<KerongApiLocks />} />
                    <Route path="/cu-16" element={<Krcu16 />} />
                    <Route path="/pass-cu-16" element={<PassCu16 />} />
                    <Route path="/cu-48" element={<Krcu48 />} />
                    <Route path="/pass-cu-48" element={<PassCu48 />} />
                    <Route path="/cu-48b" element={<Krcu48b />} />
                    <Route path="/pass-cu-48b" element={<PassCu48b />} />
                    <Route path="/krbu" element={<Architecture />} />
                    <Route path="/pass-bu" element={<Architecture />} />
                    <Route path="/sbu" element={<Architecture />} />
                    <Route path="/pass-sbu" element={<Architecture />} />
                    <Route path="/scu" element={<Architecture />} />
                    <Route path="/pass-scu" element={<Architecture />} />
                    <Route path="/auth-token" element={<KerongApiAuth />} />
                    <Route path="/get-users" element={<GetUsers />} />
                    <Route path="/get-user-id" element={<GetUsersId />} />
                    <Route path="/get-roles" element={<GetRoles />} />
                    <Route path="/get-role-id" element={<GetRoleId />} />
                    <Route path="/post-user" element={<PostUser />} />
                    <Route path="/post-role" element={<PostRole />} />
                    <Route path="/del-user" element={<DelUser />} />
                    <Route path="/del-role" element={<DelRole />} />
                    <Route path="/patch-role" element={<PatchRole />} />
                    <Route path="/patch-user" element={<PatchUser />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
