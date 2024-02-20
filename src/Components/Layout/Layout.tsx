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
            case '/architecture':
                text = 'Архитектура системы'
                break
            case '/structure':
                text = 'Общая структура системы'
                break
            case '/kerong-lcs':
                text = 'KERONG LCS'
                break
        }
        return text
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#181818',
            }}
        >
            <Menu />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    backgroundSize: 'cover',
                    margin: '20px',
                    marginLeft: '360px',
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
                            paddingLeft: '40px',
                            paddingBottom: '20px',
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
