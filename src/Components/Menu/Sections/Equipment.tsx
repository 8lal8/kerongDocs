import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import { Link } from 'react-router-dom'
import * as React from 'react'

export const Equipment = () => {
    const [openEquipment, setOpenEquipment] = React.useState(false)
    const handleClickEquipment = () => {
        setOpenEquipment(!openEquipment)
    }
    const [openCU, setOpenCU] = React.useState(false)
    const [openBU, setOpenBU] = React.useState(false)

    const handleClickOpenCu = () => {
        setOpenCU(!openCU)
    }

    const handleClickBu = () => {
        setOpenBU(!openBU)
    }

    return (
        <>
            <ListItemButton onClick={handleClickEquipment}>
                <ListItemText primary="Используемое оборудование" />
                {openEquipment ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openEquipment} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton onClick={handleClickOpenCu}>
                        <ListItemText primary="Плата KR-CU" />
                        {openCU ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={openCU} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link
                                to={'/cu-16'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText secondary="Иструкция к KR-CU 16" />
                                </ListItemButton>
                            </Link>
                            <Link
                                to={'/pass-cu-16'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText secondary="Паспорт платы KR-CU 16" />
                                </ListItemButton>
                            </Link>

                            <Link
                                to={'/cu-48'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText secondary="Инструкция к плате KR-CU 48" />
                                </ListItemButton>
                            </Link>
                            <Link
                                to={'/pass-cu-48'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText secondary="Паспорт платы KR-CU 48" />
                                </ListItemButton>
                            </Link>

                            <Link
                                to={'/cu-48b'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText secondary="Инструкция к плате KR-CU 48B" />
                                </ListItemButton>
                            </Link>
                            <Link
                                to={'/pass-cu-48b'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText secondary="Паспорт платы KR-CU 48B" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                </List>
            </Collapse>
        </>
    )
}
