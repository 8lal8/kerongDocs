import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import { Link, useNavigate } from 'react-router-dom'
import * as React from 'react'
import { IDrawerMenuProps } from '../DrawerMenu.types'
import { FC } from 'react'
import { PATHS } from '../../../constants/routes'

export const About: FC<IDrawerMenuProps> = ({ onClose }) => {
    const handleClose = () => onClose
    const navigate = useNavigate()

    return (
        <List component="div" disablePadding>
            <div onClick={() => navigate(PATHS.ABOUT)}>
                <ListItemButton onClick={handleClose()} sx={{ pl: 2 }}>
                    <ListItemText primary="Введение" />
                </ListItemButton>
            </div>
        </List>
    )
}
