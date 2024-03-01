import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import { Link } from 'react-router-dom'
import * as React from 'react'

export const About = () => {
    const [open, setOpen] = React.useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Описание проекта" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link
                        to={'/architecture'}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText secondary="Архитектура системы" />
                        </ListItemButton>
                    </Link>
                    <Link
                        to={'/structure'}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText secondary="Общая структура системы" />
                        </ListItemButton>
                    </Link>
                </List>
            </Collapse>
        </>
    )
}
