import * as React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { ReactComponent as KerongLogo } from '../assets/kerong-logo.svg'
import { Box, Divider, ListItemIcon, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import { About } from './Sections/About'
import { KerongLcs } from './Sections/KerongLcs'
import { KerongApi } from './Sections/KerongApi'
import { Equipment } from './Sections/Equipment'
import { UserGuide } from './Sections/UserGuide'

function Menu() {
    const matches = useMediaQuery('(min-width:960px)')
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                width: 320,
                overflowY: 'auto',
                bgcolor: '#F4F5F5',
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
                            backgroundColor: '#F4F5F5',
                            paddingTop: '15px',
                            paddingBottom: '15px',
                            display: 'flex',
                            justifyContent: 'center ',
                        }}
                    >
                        <Link
                            to={'/'}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <KerongLogo />
                        </Link>
                    </ListSubheader>
                }
            >
                <About />
                <Divider />
                <Equipment />
                <Divider />
                <KerongApi />
                <Divider />
                <KerongLcs />
                <Divider />
                <UserGuide />
                <Divider />
            </List>
        </Box>
    )
}

export default Menu
