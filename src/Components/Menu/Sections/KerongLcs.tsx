import { Link } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import { ListItemIcon } from '@mui/material'
import * as React from 'react'

export const KerongLcs = () => {
    const [openKerongLcs, setOpenKerongLcs] = React.useState(false)
    const [openKerongLcsUsers, setOpenKerongLcsUsers] = React.useState(false)
    const [openKerongLcsIdentifiers, setOpenKerongLcsIdentifiers] =
        React.useState(false)
    const handleClickKerongLcsUsers = () => {
        setOpenKerongLcsUsers(!openKerongLcsUsers)
    }
    const handleClickKerongLcs = () => {
        setOpenKerongLcs(!openKerongLcs)
    }
    const handleClickKerongLcsIdentifiers = () => {
        setOpenKerongLcsIdentifiers(!openKerongLcsIdentifiers)
    }

    return (
        <>
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
                            <ListItemText secondary="Аутентификация" />
                        </ListItemButton>
                    </Link>

                    <ListItemButton
                        onClick={handleClickKerongLcsUsers}
                        sx={{ pl: 4 }}
                    >
                        <ListItemText primary="Пользователи" />
                        {openKerongLcsUsers ? <ExpandLess /> : <ExpandMore />}
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
                                        backgroundColor: 'rgba(97,175,254,.1)',
                                    }}
                                >
                                    <ListItemIcon>
                                        <ListItemText
                                            primary="GET"
                                            sx={{ color: '#61affe' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText secondary="Список пользователей" />
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
                                <ListItemText secondary="Пользователя по идентификатору" />
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
                                <ListItemText secondary="Список ролей" />
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
                                <ListItemText secondary="Роль по идентификатору пользователя" />
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
                                <ListItemText secondary="Создать пользователя" />
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
                                <ListItemText secondary="Создать роль" />
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
                                <ListItemText secondary="Удалить пользователя" />
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
                                <ListItemText secondary="Изменить роль" />
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
                                <ListItemText secondary="Изменить пользователя" />
                            </ListItemButton>
                        </Link>
                    </Collapse>
                    <ListItemButton
                        onClick={handleClickKerongLcsIdentifiers}
                        sx={{ pl: 4 }}
                    >
                        <ListItemText primary="Идентификаторы" />
                        {openKerongLcsIdentifiers ? (
                            <ExpandLess />
                        ) : (
                            <ExpandMore />
                        )}
                    </ListItemButton>

                    <Collapse
                        in={openKerongLcsIdentifiers}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List component="div" disablePadding>
                            <Link
                                to={'/get-identif'}
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
                                    <ListItemText secondary="Список идентификаторов" />
                                </ListItemButton>
                            </Link>
                        </List>
                        <Link
                            to={'/get-identif-id'}
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
                                <ListItemText secondary="Идентификатор по его id" />
                            </ListItemButton>
                        </Link>
                        <Link
                            to={'/get-type-identif'}
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
                                <ListItemText secondary="Список типов идентификаторов" />
                            </ListItemButton>
                        </Link>
                        <Link
                            to={'/get-type-identif-id'}
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
                                <ListItemText secondary="Тип идентификатора по его id" />
                            </ListItemButton>
                        </Link>
                        <Link
                            to={'/post-identif'}
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
                                <ListItemText secondary="Создать идентификатор" />
                            </ListItemButton>
                        </Link>
                        <Link
                            to={'/post-type-identif'}
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
                                <ListItemText secondary="Создать тип идентификатора" />
                            </ListItemButton>
                        </Link>
                        <Link
                            to={'/patch-identif'}
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
                                <ListItemText secondary="Изменить идентификатор" />
                            </ListItemButton>
                        </Link>
                        <Link
                            to={'/patch-type-identif'}
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
                                <ListItemText secondary="Изменить тип идентификатора" />
                            </ListItemButton>
                        </Link>
                    </Collapse>
                </List>
            </Collapse>
        </>
    )
}
