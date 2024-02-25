import './index.scss'
import Menu from '../Menu/Menu'
import Header from '../Header/Header'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import {ReactComponent as KerongLogo} from "../assets/kerong-logo-no-space.svg";
import {ReactComponent as LinkLogo} from "../assets/icon_place.svg";
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

            case '/':
                text = 'Немного терминологии..'
                break
            case '/auth-token':
                text = 'Аутентификация в проекте'
                break
            case '/get-users':
                text = 'Метод получения списка пользователей'
                break
            case '/get-user-id':
                text = 'Метод получения пользователя по его идентификатору'
                break
            case '/get-roles':
                text = 'Метод получения списка ролей'
                break
            case '/get-role-id':
                text = 'Метод получения списка ролей по id пользователя'
                break
            case '/post-user':
                text = 'Метод создания нового пользователя'
                break
            case '/post-role':
                text = 'Метод создания новой роли'
                break
            case '/del-user':
                text = 'Метод "удаления" пользователя'
                break
            case '/patch-role':
                text = 'Метод изменения роли'
                break
            case '/patch-user':
                text = 'Метод изменения пользователя'
                break
            case '/obj':
                text = 'Описание объектов используемых в KERONG API'
                break
            case '/cu':
                text = 'Методы для взаимодействия с платой KR-CU'
                break
            case '/bu':
                text = 'Методы для взаимодействия с платой KR-BU'
                break
            case '/locks':
                text = 'Методы для взаимодействия с замками'
                break
            case '/cu-16':
                text = 'Подключение и настройка платы KR-CU 16'
                break
            case '/pass-cu-16':
                text = 'Паспорт платы KR-CU 16'
                break
            case '/cu-48':
                text = 'Подключение и настройка платы KR-CU 48'
                break
            case '/pass-cu-48':
                text = 'Паспорт платы KR-CU 48'
                break
            case '/cu-48b':
                text = 'Подключение и настройка платы KR-CU 48 B'
                break
            case '/pass-cu-48b':
                text = 'Паспорт платы KR-CU 48 B'
                break
        }
        return text
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#282c34',
            }}
        >
            <Menu />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    backgroundColor: '#282c34',
                    borderRadius: '10px',
                    backgroundSize: 'cover',
                    marginLeft: '320px',
                    minHeight: '100vh',
                }}
            >
                <div style={{ color: '#D2D2D2' }}>
                    <Header
                        textHeader={`${headerText() === undefined ? '' : headerText()}`}
                    />
                </div>
                <div>
                    <div
                        style={{
                            color: '#D2D2D2',
                            flex: 1,
                            overflowY: 'auto',
                            height: '100%',
                            paddingRight: '20px',
                            paddingLeft: '40px',
                            paddingTop: '120px',
                            marginBottom: "20px",
                            minHeight: "60vh"
                        }}
                    >
                        <Outlet />
                    </div>

                </div>
                <div
                    style={{
                        display:"flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "start",
                        color: 'white',
                        flex: 1,
                        height: '100%',
                        backgroundColor: "#20232a",
                        marginBottom: 0,
                        minHeight: "120px",
                        padding:"35px"
                    }}
                >
                    <div style={{display:"flex", justifyContent: "flex-start", flexDirection: "row"}}>

                    <div style={{display:"flex", flexDirection:"column", justifyContent: "start", padding:"10px", paddingLeft: "30px"}}>
                        <div style={{margin: 0, padding: 0}}><h4 style={{margin:3, padding:0, color: "#999"}}>Может быть интересно</h4></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Тестовая среда(Swagger)</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>dev.kerong.ru</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>kerong.ru</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>

                    </div>
                    <div style={{display:"flex", flexDirection:"column", justifyContent: "start", padding:"10px", paddingLeft: "30px"}}>
                        <div style={{margin: 0, padding: 0}}><h4 style={{margin:3, padding:0, color: "#999"}}>ПО и оборудование</h4></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Приобрести API</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Платы KR-BU</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Платы KR-CU</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Каталог замков</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", justifyContent: "start", padding:"10px", paddingLeft: "30px"}}>
                        <div style={{margin: 0, padding: 0}}><h4 style={{margin:3, padding:0, color: "#999"}}>Информация</h4></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Задать технический вопрос</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Вопросы по приобретению</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Разработка под ключ</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Нашли ошибку?</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>

                    </div>
</div>


                    <div style={{display:"flex", flexDirection:"column", justifyContent: "start", padding:"10px", paddingLeft: "30px", maxWidth:"320px"}}>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>© 2024 KERONG Россия.</h5></div>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Официальный дистрибьютор Kerong на территории России и СНГ.</h5></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout
