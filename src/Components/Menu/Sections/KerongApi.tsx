import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import { Link } from 'react-router-dom'
import * as React from 'react'

export const KerongApi = () => {
    const [openApi, setOpenApi] = React.useState(false)
    const handleClickApi = () => {
        setOpenApi(!openApi)
    }
    return (
        <>
            <ListItemButton onClick={handleClickApi}>
                <ListItemText primary="Описание Kerong API" />
                {openApi ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openApi} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link
                        to={'/obj'}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText secondary="Описание объектов" />
                        </ListItemButton>
                    </Link>
                    <Link
                        to={'/cu'}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText secondary="Методы для плат KR-CU" />
                        </ListItemButton>
                    </Link>
                    <Link
                        to={'/bu'}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText secondary="Методы для плат KR-BU" />
                        </ListItemButton>
                    </Link>
                    <Link
                        to={'/locks'}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText secondary="Методы для замков" />
                        </ListItemButton>
                    </Link>
                </List>
            </Collapse>
        </>
    )
}
