import * as React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { ReactComponent as KerongLogo } from '../assets/kerong-logo.svg'
import { Box, ListItemIcon } from '@mui/material'
import { Link } from 'react-router-dom'

function Menu() {
    const [open, setOpen] = React.useState(false)
    const [openApi, setOpenApi] = React.useState(false)
    const [openEquipment, setOpenEquipment] = React.useState(false)
    const [openCU, setOpenCU] = React.useState(false)
    const [openBU, setOpenBU] = React.useState(false)
    const [openKerongLcs, setOpenKerongLcs] = React.useState(false)
    const [openKerongLcsUsers, setOpenKerongLcsUsers] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    const handleClickApi = () => {
        setOpenApi(!openApi)
    }
    const handleClickOpenCu = () => {
        setOpenCU(!openCU)
    }
    const handleClickEquipment = () => {
        setOpenEquipment(!openEquipment)
    }
    const handleClickBu = () => {
        setOpenBU(!openBU)
    }
    const handleClickKerongLcs = () => {
        setOpenKerongLcs(!openKerongLcs)
    }

    const handleClickKerongLcsUsers = () => {
        setOpenKerongLcsUsers(!openKerongLcsUsers)
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
                        <Link
                            to={'/'}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <KerongLogo />
                        </Link>
                    </ListSubheader>
                }
            >
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
                                <ListItemText primary="Архитектура системы" />
                            </ListItemButton>
                        </Link>
                        <Link
                            to={'/structure'}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Общая структура системы" />
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>

                <Link
                    to={'/kerong-lcs'}
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <ListItemButton onClick={handleClickKerongLcs}>
                        <ListItemText primary="Kerong LCS" />
                        {openKerongLcs ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </Link>

                <Collapse in={openKerongLcs} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link
                            to={'/auth-token'}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Аутентификация" />
                            </ListItemButton>
                        </Link>

                        <ListItemButton onClick={handleClickKerongLcsUsers}>
                            <ListItemText primary="Пользователи" />
                            {openKerongLcsUsers ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItemButton>

                        <Collapse
                            in={openKerongLcsUsers}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                <Link
                                    to={'/get-users'}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                >
                                    <ListItemButton
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(97,175,254,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="GET"
                                                sx={{ color: '#61affe' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Список пользователей" />
                                    </ListItemButton>
                                </Link>
                            </List>
                            <Link
                                to={'/get-user-id'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        pl: 4,
                                        backgroundColor: 'rgba(97,175,254,.1)',
                                    }}
                                >
                                    <ListItemIcon>
                                        <ListItemText
                                            primary="GET"
                                            sx={{ color: '#61affe' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Пользователя по идентификатору" />
                                </ListItemButton>
                            </Link>
                            <Link
                                to={'/get-roles'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        pl: 4,
                                        backgroundColor: 'rgba(97,175,254,.1)',
                                    }}
                                >
                                    <ListItemIcon>
                                        <ListItemText
                                            primary="GET"
                                            sx={{ color: '#61affe' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Список ролей" />
                                </ListItemButton>
                            </Link>
                            <Link
                                to={'/get-role-id'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        pl: 4,
                                        backgroundColor: 'rgba(97,175,254,.1)',
                                    }}
                                >
                                    <ListItemIcon>
                                        <ListItemText
                                            primary="GET"
                                            sx={{ color: '#61affe' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Роль по идентификатору пользователя" />
                                </ListItemButton>
                            </Link>
                            <Link
                                to={'/post-user'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        pl: 4,
                                        backgroundColor: 'rgba(73,204,144,.1)',
                                    }}
                                >
                                    <ListItemIcon>
                                        <ListItemText
                                            primary="POST"
                                            sx={{
                                                color: '#49cc90',
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Создать пользователя" />
                                </ListItemButton>
                            </Link>
                            <Link
                                to={'/post-role'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        pl: 4,
                                        backgroundColor: 'rgba(73,204,144,.1)',
                                    }}
                                >
                                    <ListItemIcon>
                                        <ListItemText
                                            primary="POST"
                                            sx={{ color: '#49cc90' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Создать роль" />
                                </ListItemButton>
                            </Link>

                            <Link
                                to={'/del-user'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        pl: 4,
                                        backgroundColor: 'rgba(249,62,62,.1)',
                                    }}
                                >
                                    <ListItemIcon>
                                        <ListItemText
                                            primary="DEL"
                                            sx={{ color: '#f93e3e' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Удалить пользователя" />
                                </ListItemButton>
                            </Link>
                            <Link
                                to={'/patch-role'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        pl: 4,
                                        backgroundColor: 'rgba(73,204,144,.1)',
                                    }}
                                >
                                    <ListItemIcon>
                                        <ListItemText
                                            primary="PATCH"
                                            sx={{ color: '#50e3c2' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Изменить роль" />
                                </ListItemButton>
                            </Link>
                            <Link
                                to={'/patch-user'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        pl: 4,
                                        backgroundColor: 'rgba(73,204,144,.1)',
                                    }}
                                >
                                    <ListItemIcon>
                                        <ListItemText
                                            primary="PATCH"
                                            sx={{ color: '#50e3c2' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Изменить пользователя" />
                                </ListItemButton>
                            </Link>
                        </Collapse>
                    </List>
                </Collapse>

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
                                <ListItemText primary="Описание объектов" />
                            </ListItemButton>
                        </Link>
                        <Link
                            to={'/cu'}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Методы для плат KR-CU" />
                            </ListItemButton>
                        </Link>
                        <Link
                            to={'/bu'}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Методы для плат KR-BU" />
                            </ListItemButton>
                        </Link>
                        <Link
                            to={'/locks'}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Методы для замков" />
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>

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
                                        <ListItemText primary="Иструкция к KR-CU 16" />
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
                                        <ListItemText primary="Паспорт платы KR-CU 16" />
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
                                        <ListItemText primary="Инструкция к плате KR-CU 48" />
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
                                        <ListItemText primary="Паспорт платы KR-CU 48" />
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
                                        <ListItemText primary="Инструкция к плате KR-CU 48B" />
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
                                        <ListItemText primary="Паспорт платы KR-CU 48B" />
                                    </ListItemButton>
                                </Link>
                            </List>
                        </Collapse>

                        {/*<ListItemButton onClick={handleClickBu}>*/}
                        {/*    <ListItemText primary="Соединительная плата KR-BU" />*/}
                        {/*    {openBU ? <ExpandLess /> : <ExpandMore />}*/}
                        {/*</ListItemButton>*/}

                        {/*<Collapse in={openBU} timeout="auto" unmountOnExit>*/}
                        {/*    <List component="div" disablePadding>*/}
                        {/*        <Link*/}
                        {/*            to={'/krbu'}*/}
                        {/*            style={{*/}
                        {/*                textDecoration: 'none',*/}
                        {/*                color: 'black',*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            <ListItemButton sx={{ pl: 4 }}>*/}
                        {/*                <ListItemText primary="Инструкция к плате KR-BU" />*/}
                        {/*            </ListItemButton>*/}
                        {/*        </Link>*/}
                        {/*        <Link*/}
                        {/*            to={'/pass-bu'}*/}
                        {/*            style={{*/}
                        {/*                textDecoration: 'none',*/}
                        {/*                color: 'black',*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            <ListItemButton sx={{ pl: 4 }}>*/}
                        {/*                <ListItemText primary="Паспорт соединительной платы KR-BU" />*/}
                        {/*            </ListItemButton>*/}
                        {/*        </Link>*/}

                        {/*        <Link*/}
                        {/*            to={'/sbu'}*/}
                        {/*            style={{*/}
                        {/*                textDecoration: 'none',*/}
                        {/*                color: 'black',*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            <ListItemButton sx={{ pl: 4 }}>*/}
                        {/*                <ListItemText primary="Соединительная плата KR-SBU" />*/}
                        {/*            </ListItemButton>*/}
                        {/*        </Link>*/}
                        {/*        <Link*/}
                        {/*            to={'/pass-sbu'}*/}
                        {/*            style={{*/}
                        {/*                textDecoration: 'none',*/}
                        {/*                color: 'black',*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            <ListItemButton sx={{ pl: 4 }}>*/}
                        {/*                <ListItemText primary="Паспорт соединительной платы KR-SBU" />*/}
                        {/*            </ListItemButton>*/}
                        {/*        </Link>*/}
                        {/*    </List>*/}
                        {/*</Collapse>*/}

                        {/*<Link*/}
                        {/*    to={'/scu'}*/}
                        {/*    style={{ textDecoration: 'none', color: 'black' }}*/}
                        {/*>*/}
                        {/*    <ListItemButton sx={{ pl: 4 }}>*/}
                        {/*        <ListItemText primary="Инструкция к плате KR-SCU" />*/}
                        {/*    </ListItemButton>*/}
                        {/*</Link>*/}
                        {/*<Link*/}
                        {/*    to={'/pass-scu'}*/}
                        {/*    style={{ textDecoration: 'none', color: 'black' }}*/}
                        {/*>*/}
                        {/*    <ListItemButton sx={{ pl: 4 }}>*/}
                        {/*        <ListItemText primary="Паспорт платы KR-SCU" />*/}
                        {/*    </ListItemButton>*/}
                        {/*</Link>*/}
                    </List>
                </Collapse>
            </List>
        </Box>
    )
}

export default Menu
