import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import { Link, useNavigate } from 'react-router-dom'
import * as React from 'react'
import { FC, useState } from 'react'
import { IDrawerMenuProps } from '../DrawerMenu.types'
import { PATHS } from '../../../constants/routes'

export const Equipment: FC<IDrawerMenuProps> = ({ onClose }) => {
    const navigate = useNavigate()
    const [openEquipment, setOpenEquipment] = React.useState(false)
    const handleClickEquipment = () => {
        setOpenEquipment(!openEquipment)
    }
    const [openCU, setOpenCU] = React.useState(false)
    const [openBU, setOpenBU] = React.useState(false)
    const [openLocks, setOpenLocks] = useState(false)
    const [openElectroLocks, setOpenElectroLocks] = useState(false)
    const [openServoLocks, setOpenServoLocks] = useState(false)

    const handleClickOpenLocks = () => {
        setOpenLocks(!openLocks)
    }
    const handleClickOpenElectroLocks = () => {
        setOpenElectroLocks(!openElectroLocks)
    }
    const handleClickOpenServoLocks = () => {
        setOpenServoLocks(!openServoLocks)
    }
    const handleClickOpenCu = () => {
        setOpenCU(!openCU)
    }

    const handleClickBu = () => {
        setOpenBU(!openBU)
    }

    const handleClose = () => onClose

    return (
        <>
            <ListItemButton onClick={handleClickEquipment}>
                <ListItemText primary="Платы управления и замки" />
                {openEquipment ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openEquipment} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton
                        onClick={handleClickOpenLocks}
                        sx={{ pl: 4 }}
                    >
                        <ListItemText primary="Замки" />
                        {openLocks ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={openLocks} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton
                                onClick={handleClickOpenElectroLocks}
                                sx={{ pl: 5 }}
                            >
                                <ListItemText primary="Электромагнитные замки" />
                                {openElectroLocks ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItemButton>
                            <Collapse
                                in={openElectroLocks}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 6 }}>
                                        <ListItemText secondary="99N" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton
                                onClick={handleClickOpenServoLocks}
                                sx={{ pl: 5 }}
                            >
                                <ListItemText primary="Замки с сервоприводом" />
                                {openServoLocks ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItemButton>
                            <Collapse
                                in={openServoLocks}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 6 }}>
                                        <ListItemText secondary="5966" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={handleClickOpenCu} sx={{ pl: 4 }}>
                        <ListItemText primary="Платы KR-CU" />
                        {openCU ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={openCU} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <div
                                onClick={() =>
                                    navigate(PATHS.EQUIPMENT.EQUIPMENT_KR_CU_16)
                                }
                            >
                                <ListItemButton
                                    sx={{ pl: 5 }}
                                    onClick={handleClose()}
                                >
                                    <ListItemText secondary="Иструкция к KR-CU 16" />
                                </ListItemButton>
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.EQUIPMENT
                                            .EQUIPMENT_KR_CU_16_PASSPORT
                                    )
                                }
                            >
                                <ListItemButton
                                    sx={{ pl: 5 }}
                                    onClick={handleClose()}
                                >
                                    <ListItemText secondary="Паспорт платы KR-CU 16" />
                                </ListItemButton>
                            </div>

                            <div
                                onClick={() =>
                                    navigate(PATHS.EQUIPMENT.EQUIPMENT_KR_CU_48)
                                }
                            >
                                <ListItemButton
                                    sx={{ pl: 5 }}
                                    onClick={handleClose()}
                                >
                                    <ListItemText secondary="Инструкция к плате KR-CU 48" />
                                </ListItemButton>
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.EQUIPMENT
                                            .EQUIPMENT_KR_CU_48_B_PASSPORT
                                    )
                                }
                            >
                                <ListItemButton
                                    sx={{ pl: 5 }}
                                    onClick={handleClose()}
                                >
                                    <ListItemText secondary="Паспорт платы KR-CU 48" />
                                </ListItemButton>
                            </div>

                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.EQUIPMENT.EQUIPMENT_KR_CU_48_B
                                    )
                                }
                            >
                                <ListItemButton
                                    sx={{ pl: 5 }}
                                    onClick={handleClose()}
                                >
                                    <ListItemText secondary="Инструкция к плате KR-CU 48B" />
                                </ListItemButton>
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.EQUIPMENT
                                            .EQUIPMENT_KR_CU_48_B_PASSPORT
                                    )
                                }
                            >
                                <ListItemButton
                                    sx={{ pl: 5 }}
                                    onClick={handleClose()}
                                >
                                    <ListItemText secondary="Паспорт платы KR-CU 48B" />
                                </ListItemButton>
                            </div>
                        </List>
                    </Collapse>
                </List>
            </Collapse>
        </>
    )
}
