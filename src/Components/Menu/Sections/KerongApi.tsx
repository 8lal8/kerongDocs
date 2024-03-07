import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import { Link, useNavigate } from 'react-router-dom'
import * as React from 'react'
import { FC } from 'react'
import { IDrawerMenuProps } from '../DrawerMenu.types'
import { PATHS } from '../../../constants/routes'

export const KerongApi: FC<IDrawerMenuProps> = ({ onClose }) => {
    const navigate = useNavigate()
    const [openApi, setOpenApi] = React.useState(false)
    const [openApiReference, setOpenApiReference] = React.useState(false)
    const handleClickApi = () => {
        setOpenApi(!openApi)
    }
    const handleClickApiReference = () => {
        setOpenApiReference(!openApiReference)
    }
    const handleClose = () => onClose
    return (
        <>
            <ListItemButton onClick={handleClickApi}>
                <ListItemText primary="Kerong API" />
                {openApi ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openApi} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={handleClose()}>
                        <ListItemText secondary="Общие понятия" />
                    </ListItemButton>

                    <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={handleClickApiReference}
                    >
                        <ListItemText primary="API reference" />
                        {openApiReference ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse
                        in={openApiReference}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List component="div" disablePadding>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_API.KERONG_API_OBJECTS
                                    )
                                }
                            >
                                <ListItemButton
                                    sx={{ pl: 4 }}
                                    onClick={handleClose()}
                                >
                                    <ListItemText secondary="Описание объектов" />
                                </ListItemButton>
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_API.KERONG_API_KR_CU_BOARDS
                                    )
                                }
                            >
                                <ListItemButton
                                    sx={{ pl: 4 }}
                                    onClick={handleClose()}
                                >
                                    <ListItemText secondary="Методы для плат KR-CU" />
                                </ListItemButton>
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_API.KERONG_API_BU_BOARDS
                                    )
                                }
                            >
                                <ListItemButton
                                    sx={{ pl: 4 }}
                                    onClick={handleClose()}
                                >
                                    <ListItemText secondary="Методы для плат KR-BU" />
                                </ListItemButton>
                            </div>
                            <div
                                onClick={() =>
                                    navigate(PATHS.KERONG_API.KERONG_API_LOCKS)
                                }
                            >
                                <ListItemButton
                                    sx={{ pl: 4 }}
                                    onClick={handleClose()}
                                >
                                    <ListItemText secondary="Методы для замков" />
                                </ListItemButton>
                            </div>
                        </List>
                    </Collapse>
                </List>
            </Collapse>
        </>
    )
}
