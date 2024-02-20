import * as React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import { ReactComponent as KerongLogo } from '../assets/kerong-logo.svg'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Menu() {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                width: 320,
                overflowY: 'auto',
                bgcolor: 'white',
                '&::-webkit-scrollbar': { width: '8px' },
                '&::-webkit-scrollbar-track': { background: '#f1f1f1' },
                '&::-webkit-scrollbar-thumb': { background: '#888' },
            }}
        >
            <List
                sx={{ width: '100%', maxWidth: 400 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        style={{
                            paddingTop: '15px',
                            paddingBottom: '15px',
                            display: 'flex',
                            justifyContent: 'center ',
                        }}
                    >
                        <KerongLogo />
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Документация на оборудование" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link
                            to={'/token'}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Установка Kerong - API на Windows" />
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>

                <Link
                    to={'/kerong-lcs'}
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <ListItemButton>
                        <ListItemText primary="Kerong LCS" />
                    </ListItemButton>
                </Link>
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Меню 2" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Подменю 1" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Box>
    )
}

export default Menu
