import React from 'react'
import './App.css'

import Layout from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import { PostRole } from './Pages/PostRole'
import { PostUser } from './Pages/PostUser'
import { DelUser } from './Pages/DelUser'
import { PatchRole } from './Pages/PatchRole'
import { PatchUser } from './Pages/PatchUser'
import { GetIdentifiers } from './Pages/GetIdentifiers'
import { GetIdentifiersId } from './Pages/GetIdentifiersId'
import { GetTypeIdentifiers } from './Pages/GetTypeIdentifiers'
import { GetTypeIdentifiersId } from './Pages/GetTypeIdentifiersId'
import { PostIdentifiers } from './Pages/PostIdentifiers'
import { PostTypeIdentifiers } from './Pages/PostTypeIdentifiers'
import { PatchIdentifiersId } from './Pages/PatchIdentifiersId'
import { PatchTypeIdentifiersId } from './Pages/PatchTypeIdentifiersId'
import { PATHS } from './constants/routes'
import { Main } from './Components/Main/Main'
import { GetOperations } from './Pages/GetOperations'
import { GetLocksSetMap } from './Pages/GetLocksSetMap'
import { GetLocksSetID } from './Pages/GetLocksSetID'
import { DeleteLocksSet } from './Pages/DeleteLocksSet'
import { GetLocksSet } from './Pages/GetLocksSet'
import { PostLocksSet } from './Pages/PostLocksSet'
import { PacthLocksSet } from './Pages/PacthLocksSet'
import { DeleteBookingUuid } from './Pages/DeleteBookingUuid'
import { GetBooking } from './Pages/GetBooking'
import { GetBookingByLockNumber } from './Pages/GetBookingByLockNumber'
import { GetBookingListByClientId } from './Pages/GetBookingListByClientId'
import { GetBookingUuid } from './Pages/GetBookingUuid'
import { PatchBooking } from './Pages/PatchBooking'
import { PostBooking } from './Pages/PostBooking'
import { PostBookingActive } from './Pages/PostBookingActive'
import { PostBookingActiveUuid } from './Pages/PostBookingActiveUuid'
import { Token } from '@mui/icons-material'
import { GetZones } from './Pages/GetZones'
import { GetZonesFreeLocksNumberId } from './Pages/GetZonesFreeLocksNumberId'
import { GetZonesId } from './Pages/GetZonesId'
import { GetZonesIdLocksSet } from './Pages/GetZonesIdLocksSet'
import { GetZonesInfo } from './Pages/GetZonesInfo'
import { GetZonesInfoId } from './Pages/GetZonesInfoId'
import { GetZonesLocksSet } from './Pages/GetZonesLocksSet'
import { PatchZoneId } from './Pages/PatchZoneId'
import { PostDeleteLocksSetId } from './Pages/PostDeleteLocksSetId'
import { PostOpenLock } from './Pages/PostOpenLock'
import { PostZones } from './Pages/PostZones'
import { PostZonesAddLocksSetId } from './Pages/PostZonesAddLocksSetId'
import { DeleteClientsId } from './Pages/DeleteClientsId'
import { GetClients } from './Pages/GetClients'
import { GetClientsCount } from './Pages/GetClientsCount'
import { GetClientsId } from './Pages/GetClientsId'
import { GetClientsPDF } from './Pages/GetClientsPDF'
import { PatchClientId } from './Pages/PatchClientId'
import { PostClients } from './Pages/PostClients'
import { PostClientsArray } from './Pages/PostClientsArray'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATHS.MAIN} element={<Main />} />
                {/* Определите Main как корневую страницу */}
                <Route path={PATHS.ABOUT} element={<Layout />}>
                    <Route path={PATHS.ABOUT} element={<Docs />} />
                    <Route
                        path={PATHS.ARCHITECTURE}
                        element={<Architecture />}
                    />
                    {/*<Route path="/kerong-lcs" element={<KerongLcs />} />*/}
                    <Route path={PATHS.STRUCTURE} element={<Structure />} />
                    <Route
                        path={PATHS.KERONG_API.KERONG_API_KR_CU_BOARDS}
                        element={<KerongApiCu />}
                    />
                    <Route
                        path={PATHS.KERONG_API.KERONG_API_BU_BOARDS}
                        element={<KerongApiBu />}
                    />
                    <Route
                        path={PATHS.KERONG_API.KERONG_API_OBJECTS}
                        element={<KerongApiObj />}
                    />
                    <Route
                        path={PATHS.KERONG_API.KERONG_API_LOCKS}
                        element={<KerongApiLocks />}
                    />
                    <Route
                        path={PATHS.EQUIPMENT.EQUIPMENT_KR_CU_16}
                        element={<Krcu16 />}
                    />
                    <Route
                        path={PATHS.EQUIPMENT.EQUIPMENT_KR_CU_16_PASSPORT}
                        element={<PassCu16 />}
                    />
                    <Route
                        path={PATHS.EQUIPMENT.EQUIPMENT_KR_CU_48}
                        element={<Krcu48 />}
                    />
                    <Route
                        path={PATHS.EQUIPMENT.EQUIPMENT_KR_CU_48_PASSPORT}
                        element={<PassCu48 />}
                    />
                    <Route
                        path={PATHS.EQUIPMENT.EQUIPMENT_KR_CU_48_B}
                        element={<Krcu48b />}
                    />
                    <Route
                        path={PATHS.EQUIPMENT.EQUIPMENT_KR_CU_48_B_PASSPORT}
                        element={<PassCu48b />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_TOKEN}
                        element={<KerongApiAuth />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_USERS_LIST}
                        element={<GetUsers />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_USER_FROM_ID}
                        element={<GetUsersId />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_ROLES_LIST}
                        element={<GetRoles />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_ROLE_FROM_ID}
                        element={<GetRoleId />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_POST_USER}
                        element={<PostUser />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_POST_ROLE}
                        element={<PostRole />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_DELETE_USER}
                        element={<DelUser />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_PATCH_ROLE}
                        element={<PatchRole />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_PATCH_USER}
                        element={<PatchUser />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_IDENTIFIER_LIST}
                        element={<GetIdentifiers />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS
                                .KERONG_LCS_GET_TYPES_OF_IDENTIFIER_FROM_ID
                        }
                        element={<GetIdentifiersId />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS.KERONG_LCS_GET_TYPES_OF_IDENTIFIERS
                        }
                        element={<GetTypeIdentifiers />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS
                                .KERONG_LCS_GET_TYPES_OF_IDENTIFIER_FROM_ID
                        }
                        element={<GetTypeIdentifiersId />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_POST_IDENTIFIER}
                        element={<PostIdentifiers />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS.KERONG_LCS_POST_TYPE_OF_IDENTIFIER
                        }
                        element={<PostTypeIdentifiers />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_PATCH_IDENTIFIER}
                        element={<PatchIdentifiersId />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS.KERONG_LCS_PATCH_TYPE_OF_IDENTIFIER
                        }
                        element={<PatchTypeIdentifiersId />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_OPERATIONS}
                        element={<GetOperations />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_LOCKS_SET_MAP}
                        element={<GetLocksSetMap />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_LOCKS_SET_ID}
                        element={<GetLocksSetID />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_DELETE_LOCKS_SET}
                        element={<DeleteLocksSet />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_LOCKS_SET}
                        element={<GetLocksSet />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_POST_LOCKS_SET}
                        element={<PostLocksSet />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_PATCH_LOCKS_SET}
                        element={<PacthLocksSet />}
                    />

                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_DELETE_BOOKING}
                        element={<DeleteBookingUuid />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_BOOKING}
                        element={<GetBooking />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS
                                .KERONG_LCS_GET_BOOKING_BY_LOCKS_NUMBER
                        }
                        element={<GetBookingByLockNumber />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS
                                .KERONG_LCS_GET_BOOKING_LIST_BY_CLIENT_ID
                        }
                        element={<GetBookingListByClientId />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_BOOKING_UUID}
                        element={<GetBookingUuid />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_PATCH_BOOKING}
                        element={<PatchBooking />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_POST_BOOKING}
                        element={<PostBooking />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_POST_BOOKING_ACTIVE}
                        element={<PostBookingActive />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS.KERONG_LCS_POST_BOOKING_ACTIVE_UUID
                        }
                        element={<PostBookingActiveUuid />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_TOKEN}
                        element={<Token />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_ZONES}
                        element={<GetZones />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS
                                .KERONG_LCS__GET_ZONES_FREE_LOCKS_NUMBER_ID
                        }
                        element={<GetZonesFreeLocksNumberId />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_ZONES_ID}
                        element={<GetZonesId />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS.KERONG_LCS_GET_ZONES_ID_LOCKS_SET
                        }
                        element={<GetZonesIdLocksSet />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_ZONES_INFO}
                        element={<GetZonesInfo />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_ZONES_INFO_ID}
                        element={<GetZonesInfoId />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_ZONES_LOCKS_SET}
                        element={<GetZonesLocksSet />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_PATCH_ZONE_ID}
                        element={<PatchZoneId />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS.KERONG_LCS_POST_DELETE_LOCKS_SET_ID
                        }
                        element={<PostDeleteLocksSetId />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_POST_OPEN_LOCK}
                        element={<PostOpenLock />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_POST_ZONES}
                        element={<PostZones />}
                    />
                    <Route
                        path={
                            PATHS.KERONG_LCS
                                .KERONG_LCS_POST_ZONES_ADD_LOCKS_SET_ID
                        }
                        element={<PostZonesAddLocksSetId />}
                    />

                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_POST_CLIENTS_ARRAY}
                        element={<PostClientsArray />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_POST_CLIENTS}
                        element={<PostClients />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_PATCH_CLIENTS_ID}
                        element={<PatchClientId />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_CLIENTS_PDF}
                        element={<GetClientsPDF />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_CLIENTS_ID}
                        element={<GetClientsId />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_CLIENTS_COUNT}
                        element={<GetClientsCount />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_GET_CLIENTS}
                        element={<GetClients />}
                    />
                    <Route
                        path={PATHS.KERONG_LCS.KERONG_LCS_DELETE_CLIENTS_ID}
                        element={<DeleteClientsId />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
