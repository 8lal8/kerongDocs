import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ListItemButton from '@mui/material/ListItemButton'
import * as React from 'react'
import { Collapse, List } from '@mui/material'
import { PATHS } from '../../../constants/routes'
import { useState } from 'react'

export const UserGuide = () => {
    const [openUserGuide, setOpenUserGuide] = useState(false)
    const handleClickOpenUserGuide = () => {
        setOpenUserGuide(!openUserGuide)
    }
    return (
        <>
            <ListItemButton onClick={handleClickOpenUserGuide}>
                <ListItemText primary="Руководство пользователя" />
                {openUserGuide ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openUserGuide} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText secondary="Kerong LCS WEB" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText secondary="Kerong LCS Tablet" />
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    )
}
