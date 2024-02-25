import './index.scss'
import Menu from '../Menu/Menu'
import Header from '../Header/Header'
import React, {useState} from 'react'
import {Link, Outlet, useLocation} from 'react-router-dom'
import {ReactComponent as KerongLogo} from "../assets/kerong-logo-no-space.svg";
import {ReactComponent as LinkLogo} from "../assets/icon_place.svg";
import {TechDialog} from "../Dialogs/TechDialog/TechDialog";
import {BuyQuestionDialog} from "../Dialogs/BuyQuestionDialog/BuyQuestionDialog";
const Layout = () => {
    const [openTechDialog, setOpenTechDialog] = useState(false)
    const [openBuyQuestionDialog, setOpenBuyQuestionDialog] = useState(false)


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
            case '/get-identif':
                text = 'Метод получения списка идентификаторов'
                break
            case '/get-identif-id':
                text = 'Метод получения информации об идентификаторе по его id'
                break
            case '/get-type-identif':
                text = 'Метод получения списка типов идентификаторов'
                break
            case '/get-type-identif-id':
                text = 'Метод получения информации о типе идентификатора по его id '
                break
            case '/post-identif':
                text = 'Метод создания нового идентификатора'
                break
            case '/post-type-identif':
                text = 'Метод создания нового типа идентификаторов'
                break
            case '/patch-identif':
                text = 'Метод изменения идентификатора'
                break
            case '/patch-type-identif':
                text = 'Метод изменения типа идентификатора'
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
                        <Link to={"http://dev.kerong.ru:9777/api/v1/docs/swagger-ui/index.html"}><div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Интерактивная документация (Swagger)</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div></Link>
                        <Link to={"https://dev.kerong.ru/"}><div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>dev.kerong.ru</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div></Link>
                        <Link to={"https://kerong.ru/"}><div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>kerong.ru</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div></Link>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", justifyContent: "start", padding:"10px", paddingLeft: "30px"}}>
                        <div style={{margin: 0, padding: 0}}><h4 style={{margin:3, padding:0, color: "#999"}}>ПО и оборудование</h4></div>
                        <Link to={"https://kerong.ru/onlayn-zamkovaya-sistema-kerong/"}><div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Приобрести API</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div></Link>
                        <Link to={"https://kerong.ru/product-category/zamki-dlya-postamatov/platy-upravleniya/"}><div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Платы управления замками</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div></Link>
                        <Link to={"https://kerong.ru/product-category/zamki-dlya-postamatov/"}><div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Каталог замков</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div></Link>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", justifyContent: "start", padding:"10px", paddingLeft: "30px"}}>
                        <div style={{margin: 0, padding: 0}}><h4 style={{margin:3, padding:0, color: "#999"}}>Информация</h4></div>
                        <div onClick={()=> setOpenTechDialog(true)} style={{display: "flex", alignItems: "center", cursor:"pointer"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Задать технический вопрос</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>
                        <div onClick={() => setOpenBuyQuestionDialog(true)} style={{display: "flex", alignItems: "center", cursor:"pointer"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Вопросы по приобретению</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>
                        <Link to={"https://kerong.ru/razrabotka-programmnogo-obespecheniya/"}><div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Разработка под ключ</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div></Link>
                        <div style={{display: "flex", alignItems: "center"}}><h5 style={{margin:3, padding:0, color:"#D2D2D2"}}>Нашли ошибку?</h5><LinkLogo style={{height: "20px", width:"20px"}}/></div>

                    </div>
                        <TechDialog open={openTechDialog} onClose={()=> setOpenTechDialog(false)}/>
                        <BuyQuestionDialog open={openBuyQuestionDialog} onClose={() => setOpenBuyQuestionDialog(false)}/>
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
