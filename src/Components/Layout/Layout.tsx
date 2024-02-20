import './index.scss'
import Menu from '../Menu/Menu'
import Header from '../Header/Header'
import React from 'react'
import bgImage from '../assets/split_background.png'
import { Outlet, useLocation } from 'react-router-dom'
const Layout = () => {
    const location = useLocation()
    const headerText = () => {
        let text
        switch (location.pathname) {
            case '/token':
                text = 'Получение токена.'
                break
            case '/docs':
                text = 'Документация по оборудованию'
                break
        }
        return text
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Menu />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',

                    paddingLeft: '360px',
                    minHeight: '100vh',
                }}
            >
                <div>
                    <Header
                        textHeader={`${headerText() === undefined ? '' : headerText()}`}
                    />
                </div>
                <div>
                    <div
                        style={{
                            flex: 1,
                            overflowY: 'auto',
                            height: '100%',
                            paddingRight: '20px',
                        }}
                    >
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout
