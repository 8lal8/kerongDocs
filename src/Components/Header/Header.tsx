import './index.scss'
import React, { FC, useState } from 'react'
import { ReactComponent as Lock } from '../assets/lock_logo.svg'
import MenuIcon from '@mui/icons-material/Menu'
import { DrawerMenu } from '../Menu/DrawerMenu'
import { useMediaQuery } from '@mui/material'
export interface IHeaderProps {
    textHeader: string
}
const Header: FC<IHeaderProps> = ({ textHeader }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const matches = useMediaQuery('(min-width:1080px)')
    return !matches ? (
        <div className={'header'}>
            <DrawerMenu open={openMenu} onClose={() => setOpenMenu(false)} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    <MenuIcon
                        style={{
                            height: '35px',
                            width: '35px',
                            cursor: 'pointer',
                        }}
                        onClick={() => setOpenMenu(true)}
                    />
                </div>
                <h1>{textHeader}</h1>
            </div>
        </div>
    ) : (
        <div className={'header'}>
            <Lock
                style={{
                    height: '35px',
                    width: '35px',
                    marginRight: '10px',
                    marginLeft: '10px',
                }}
            />

            <h1>{textHeader}KERONG DOCS</h1>
        </div>
    )
}

export default Header
