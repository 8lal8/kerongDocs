import { Link, useNavigate } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import { ListItemIcon } from '@mui/material'
import * as React from 'react'
import { IDrawerMenuProps } from '../DrawerMenu.types'
import { FC, useState } from 'react'
import { PATHS } from '../../../constants/routes'

export const KerongLcs: FC<IDrawerMenuProps> = ({ onClose }) => {
    const navigate = useNavigate()
    const [openKerongLcs, setOpenKerongLcs] = React.useState(false)
    const [openKerongLcsUsers, setOpenKerongLcsUsers] = React.useState(false)
    const [openKerongLcsIdentifiers, setOpenKerongLcsIdentifiers] =
        React.useState(false)
    const [openKerongLcsLocksSet, setOpenKerongLcsLocksSet] = useState(false)
    const [openApiReference, setOpenApiReference] = useState(false)
    const [openKerongLcsBooking, setOpenKerongLcsBooking] = useState(false)
    const [openKerongLcsZones, setOpenKerongLcsZones] = useState(false)
    const [openKerongLcsClients, setOpenKerongLcsClients] = useState(false)

    const handleClickKerongLcsClients = () => {
        setOpenKerongLcsClients(!openKerongLcsClients)
    }

    const handleClickKerongLcsZones = () => {
        setOpenKerongLcsZones(!openKerongLcsZones)
    }
    const handleClickKerongLcsBooking = () => {
        setOpenKerongLcsBooking(!openKerongLcsBooking)
    }

    const handleClickKerongLcsLocksSet = () => {
        setOpenKerongLcsLocksSet(!openKerongLcsLocksSet)
    }
    const handleClickApiReference = () => {
        setOpenApiReference(!openApiReference)
    }
    const handleClickKerongLcsUsers = () => {
        setOpenKerongLcsUsers(!openKerongLcsUsers)
    }
    const handleClickKerongLcs = () => {
        setOpenKerongLcs(!openKerongLcs)
    }
    const handleClickKerongLcsIdentifiers = () => {
        setOpenKerongLcsIdentifiers(!openKerongLcsIdentifiers)
    }
    const handleClose = () => onClose

    return (
        <>
            <ListItemButton onClick={handleClickKerongLcs}>
                <ListItemText primary="Kerong LCS" />
                {openKerongLcs ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openKerongLcs} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <div
                        onClick={() =>
                            navigate(PATHS.KERONG_LCS.KERONG_LCS_GET_TOKEN)
                        }
                    >
                        <ListItemButton sx={{ pl: 4 }} onClick={handleClose()}>
                            <ListItemText secondary="Общие понятия" />
                        </ListItemButton>
                    </div>
                    <ListItemButton
                        onClick={handleClickApiReference}
                        sx={{ pl: 4 }}
                    >
                        <ListItemText primary="API reference" />
                        {openApiReference ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse
                        in={openApiReference}
                        timeout="auto"
                        unmountOnExit
                    >
                        <ListItemButton
                            onClick={() =>
                                navigate(PATHS.KERONG_LCS.KERONG_LCS_GET_TOKEN)
                            }
                            sx={{ pl: 5 }}
                        >
                            <ListItemText primary="Авторизация" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={handleClickKerongLcsUsers}
                            sx={{ pl: 5 }}
                        >
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
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_USERS_LIST
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Список пользователей" />
                                    </ListItemButton>
                                </div>
                            </List>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS
                                            .KERONG_LCS_GET_USER_FROM_ID
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS
                                            .KERONG_LCS_GET_ROLES_LIST
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS
                                            .KERONG_LCS_GET_ROLE_FROM_ID
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS.KERONG_LCS_POST_USER
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS.KERONG_LCS_POST_ROLE
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>

                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS.KERONG_LCS_DELETE_USER
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS.KERONG_LCS_PATCH_ROLE
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS.KERONG_LCS_PATCH_USER
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                        </Collapse>
                        <ListItemButton
                            onClick={handleClickKerongLcsIdentifiers}
                            sx={{ pl: 5 }}
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
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_IDENTIFIER_LIST
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Список идентификаторов" />
                                    </ListItemButton>
                                </div>
                            </List>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS
                                            .KERONG_LCS_GET_IDENTIFIER_FROM_ID
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS
                                            .KERONG_LCS_GET_TYPES_OF_IDENTIFIERS
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS
                                            .KERONG_LCS_GET_TYPES_OF_IDENTIFIER_FROM_ID
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS
                                            .KERONG_LCS_POST_IDENTIFIER
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS
                                            .KERONG_LCS_POST_TYPE_OF_IDENTIFIER
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS
                                            .KERONG_LCS_PATCH_IDENTIFIER
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                            <div
                                onClick={() =>
                                    navigate(
                                        PATHS.KERONG_LCS
                                            .KERONG_LCS_PATCH_TYPE_OF_IDENTIFIER
                                    )
                                }
                            >
                                <ListItemButton
                                    onClick={handleClose()}
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
                            </div>
                        </Collapse>
                        <ListItemButton
                            onClick={() =>
                                navigate(
                                    PATHS.KERONG_LCS.KERONG_LCS_GET_OPERATIONS
                                )
                            }
                            sx={{ pl: 5 }}
                        >
                            <ListItemText primary="Операции" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={handleClickKerongLcsLocksSet}
                            sx={{ pl: 5 }}
                        >
                            <ListItemText primary="Наборы замков" />
                            {openKerongLcsLocksSet ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItemButton>
                        <Collapse
                            in={openKerongLcsLocksSet}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_LOCKS_SET
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Список набора замков" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_LOCKS_SET_ID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Список наборов замков по идентификатору" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_LOCKS_SET_MAP
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Cопоставленный список наборов замков" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_DELETE_LOCKS_SET
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(249,62,62,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="DEL"
                                                sx={{ color: '#f93e3e' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Удалить набор замков" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_PATCH_LOCKS_SET
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="PATCH"
                                                sx={{ color: '#50e3c2' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Изменить набор замков" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_POST_LOCKS_SET
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="POST"
                                                sx={{ color: '#49cc90' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Создать набор замков" />
                                    </ListItemButton>
                                </div>
                            </List>
                        </Collapse>
                        <ListItemButton
                            onClick={handleClickKerongLcsBooking}
                            sx={{ pl: 5 }}
                        >
                            <ListItemText primary="Аренда" />
                            {openKerongLcsBooking ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItemButton>
                        <Collapse
                            in={openKerongLcsBooking}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_BOOKING
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Список аренд" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_BOOKING_BY_LOCKS_NUMBER
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Список аренд по id замка" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_BOOKING_LIST_BY_CLIENT_ID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Список аренд по id клиента" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_BOOKING_UUID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Аренду по uuid" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_PATCH_BOOKING
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="PATCH"
                                                sx={{ color: '#50e3c2' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Изменить аренду" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_DELETE_BOOKING
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(249,62,62,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="DEL"
                                                sx={{ color: '#f93e3e' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Удалить аренду" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_POST_BOOKING
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="POST"
                                                sx={{ color: '#49cc90' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Создать аренду" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_POST_BOOKING_ACTIVE
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="POST"
                                                sx={{ color: '#49cc90' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Завершить аренду" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_POST_BOOKING_ACTIVE_UUID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="POST"
                                                sx={{ color: '#49cc90' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Завершить аренду по uuid" />
                                    </ListItemButton>
                                </div>
                            </List>
                        </Collapse>
                        <ListItemButton
                            onClick={handleClickKerongLcsZones}
                            sx={{ pl: 5 }}
                        >
                            <ListItemText primary="Зоны" />
                            {openKerongLcsZones ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItemButton>
                        <Collapse
                            in={openKerongLcsZones}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_ZONES
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Список зон" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS__GET_ZONES_FREE_LOCKS_NUMBER_ID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Список свободных номеров замков в зоне" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_ZONES_ID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Получить зону по идентификатору" />
                                    </ListItemButton>
                                </div>

                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_ZONES_INFO
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Получить информацию по зонам" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_ZONES_INFO_ID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Детальную информацию по идентификатору зоны" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_ZONES_LOCKS_SET
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Наборы замков привязанные к зонам" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_PATCH_ZONE_ID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="PATCH"
                                                sx={{ color: '#50e3c2' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Изменить зону" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_POST_DELETE_LOCKS_SET_ID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="POST"
                                                sx={{ color: '#49cc90' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Удалить привязку набора замков" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_POST_OPEN_LOCK
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="POST"
                                                sx={{ color: '#49cc90' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Открыть замок в зоне" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_POST_ZONES
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="POST"
                                                sx={{ color: '#49cc90' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Создать зону" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_POST_ZONES_ADD_LOCKS_SET_ID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="POST"
                                                sx={{ color: '#49cc90' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Привязать набор замков" />
                                    </ListItemButton>
                                </div>
                            </List>
                        </Collapse>
                        <ListItemButton
                            onClick={handleClickKerongLcsClients}
                            sx={{ pl: 5 }}
                        >
                            <ListItemText primary="Клиенты" />
                            {openKerongLcsClients ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItemButton>
                        <Collapse
                            in={openKerongLcsClients}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_DELETE_CLIENTS_ID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(249,62,62,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="DEL"
                                                sx={{ color: '#f93e3e' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Удалить клиента" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_CLIENTS
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Список клиентов" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_CLIENTS_COUNT
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Количество клиентов" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_CLIENTS_ID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Получить клиента по его идентификатору" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_GET_CLIENTS_PDF
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
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
                                        <ListItemText secondary="Выгрузить клиентов в PDF" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_PATCH_CLIENTS_ID
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="PATCH"
                                                sx={{ color: '#50e3c2' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Изменить клиента" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_POST_CLIENTS
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="POST"
                                                sx={{ color: '#49cc90' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Создать клиента" />
                                    </ListItemButton>
                                </div>
                                <div
                                    onClick={() =>
                                        navigate(
                                            PATHS.KERONG_LCS
                                                .KERONG_LCS_POST_CLIENTS_ARRAY
                                        )
                                    }
                                >
                                    <ListItemButton
                                        onClick={handleClose()}
                                        sx={{
                                            pl: 4,
                                            backgroundColor:
                                                'rgba(73,204,144,.1)',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemText
                                                primary="POST"
                                                sx={{ color: '#49cc90' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText secondary="Создать новых клиентов" />
                                    </ListItemButton>
                                </div>
                            </List>
                        </Collapse>
                    </Collapse>
                </List>
            </Collapse>
        </>
    )
}
