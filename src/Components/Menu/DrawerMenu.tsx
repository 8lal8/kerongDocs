/*
 * Copyright (c) 2023.
 * @author Smirnovskiy Mikhail
 */
import { Box, Divider, Drawer, List } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as KerongLogo } from '../../../src/Components/assets/kerong-logo.svg'
import ListSubheader from '@mui/material/ListSubheader'
import { Link } from 'react-router-dom'
import { About } from './Sections/About'
import { KerongLcs } from './Sections/KerongLcs'
import { KerongApi } from './Sections/KerongApi'
import { Equipment } from './Sections/Equipment'

export interface IDrawerMenuProps {
    open: boolean
    onClose: () => void
}
export const DrawerMenu: React.FC<IDrawerMenuProps> = ({ open, onClose }) => {
    return (
        <Drawer
            variant={'temporary'}
            anchor="left"
            open={open}
            onClose={onClose}
            style={{ zIndex: 10 }}
        >
            <Box
                sx={{
                    zIndex: 10,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: 320,
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': { width: '8px' },
                    '&::-webkit-scrollbar-track': { background: '#f1f1f1' },
                    '&::-webkit-scrollbar-thumb': { background: '#888' },
                }}
            >
                <List
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
                            <Link
                                to={'/'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <KerongLogo />
                            </Link>
                        </ListSubheader>
                    }
                >
                    <About />
                    <Divider />
                    <KerongLcs />
                    <Divider />
                    <KerongApi />
                    <Divider />
                    <Equipment />
                    <Divider />
                </List>
            </Box>
        </Drawer>
    )
}
