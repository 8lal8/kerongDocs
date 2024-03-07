import { Paper, useMediaQuery } from '@mui/material'
import { ReactComponent as DocSvg } from './doc.svg'
import { ReactComponent as KerongLogo } from '../assets/kerong-logo.svg'
import { ReactComponent as KerongApiSvg } from './kerongapi.svg'
import { ReactComponent as KerongLcsSvg } from './lock.svg'
import { ReactComponent as KerongLcsWebScg } from './navi.svg'
import { Link, useNavigate } from 'react-router-dom'
import { PATHS } from '../../constants/routes'
import './index.scss'

export const Main = () => {
    const navigate = useNavigate()
    const matches = useMediaQuery('(min-width:500px)')
    return matches ? (
        <div style={{ paddingTop: '25vh' }}>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                    width: '450px',
                    height: '450px',
                    borderRadius: '50px',
                }}
            >
                <KerongLogo style={{ marginBottom: '15px' }} />
                <div>
                    <div
                        className={'main-container'}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '367px',
                            height: '72px',
                            backgroundColor: '#F6F6F6',
                            borderRadius: '8px',
                            alignItems: 'center',
                            margin: '5px',
                            cursor: 'pointer',
                            transition: 'box-shadow 0.3s ease-in-out',
                        }}
                        onClick={() => navigate(PATHS.ABOUT)}
                    >
                        <div
                            style={{
                                alignItems: 'center',
                            }}
                        >
                            <DocSvg
                                style={{ padding: '20px 30px 20px 20px' }}
                            />
                        </div>
                        <div
                            style={{
                                flexDirection: 'column',
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            <div
                                style={{
                                    padding: 0,
                                    marginBottom: '2px',
                                }}
                            >
                                <h3
                                    style={{
                                        padding: 0,
                                        margin: 0,
                                    }}
                                >
                                    Документация
                                </h3>
                            </div>
                            <div>
                                <h4
                                    style={{
                                        padding: 0,
                                        margin: 0,
                                        color: '#797A80',
                                    }}
                                >
                                    Описание системы и API
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <Link
                    style={{ color: '#000000DE' }}
                    to={'http://dev.kerong.ru:9991/api/swagger-ui/index.html'}
                >
                    <div>
                        <div
                            className={'main-container'}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '367px',
                                height: '72px',
                                backgroundColor: '#F6F6F6',
                                borderRadius: '8px',
                                alignItems: 'center',
                                margin: '5px',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.3s ease-in-out',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                }}
                            >
                                <KerongApiSvg
                                    style={{ padding: '20px 30px 20px 20px' }}
                                />
                            </div>
                            <div
                                style={{
                                    flexDirection: 'column',
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                <div
                                    style={{
                                        padding: 0,
                                        marginBottom: '2px',
                                    }}
                                >
                                    <h3
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                        }}
                                    >
                                        Kerong API
                                    </h3>
                                </div>
                                <div>
                                    <h4
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                            color: '#797A80',
                                        }}
                                    >
                                        Интерактивная документация
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    style={{ color: '#000000DE' }}
                    to={
                        'http://dev.kerong.ru:9777/api/v1/docs/swagger-ui/index.html'
                    }
                >
                    <div>
                        <div
                            className={'main-container'}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '367px',
                                height: '72px',
                                backgroundColor: '#F6F6F6',
                                borderRadius: '8px',
                                alignItems: 'center',
                                margin: '5px',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.3s ease-in-out',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                }}
                            >
                                <KerongLcsSvg
                                    style={{ padding: '20px 30px 20px 20px' }}
                                />
                            </div>
                            <div
                                style={{
                                    flexDirection: 'column',
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                <div
                                    style={{
                                        padding: 0,
                                        marginBottom: '2px',
                                    }}
                                >
                                    <h3
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                        }}
                                    >
                                        Kerong LCS
                                    </h3>
                                </div>
                                <div>
                                    <h4
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                            color: '#797A80',
                                        }}
                                    >
                                        Интерактивная документация
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    style={{ color: '#000000DE' }}
                    to={'http://dev.kerong.ru:9980/'}
                >
                    <div>
                        <div
                            className={'main-container'}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '367px',
                                height: '72px',
                                backgroundColor: '#F6F6F6',
                                borderRadius: '8px',
                                alignItems: 'center',
                                margin: '5px',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.3s ease-in-out',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                }}
                            >
                                <KerongLcsWebScg
                                    style={{ padding: '20px 30px 20px 20px' }}
                                />
                            </div>
                            <div
                                style={{
                                    flexDirection: 'column',
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                <div
                                    style={{
                                        padding: 0,
                                        marginBottom: '2px',
                                    }}
                                >
                                    <h3
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                        }}
                                    >
                                        Kerong LCS WEB
                                    </h3>
                                </div>
                                <div>
                                    <h4
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                            color: '#797A80',
                                        }}
                                    >
                                        Демо-режим веб-приложения
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </Paper>
            <div
                style={{
                    display: 'flex',
                    marginTop: '100px',
                    justifyContent: 'center',
                }}
            >
                <h5 style={{ color: '#D2D2D2' }}>Universe-soft 2024</h5>
            </div>
        </div>
    ) : (
        <div style={{ paddingTop: '25vh' }}>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                    width: '320px',
                    height: '400px',
                    borderRadius: '30px',
                }}
            >
                <KerongLogo style={{ marginBottom: '15px' }} />
                <div>
                    <div
                        className={'main-container'}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '300px',
                            height: '72px',
                            backgroundColor: '#F6F6F6',
                            borderRadius: '8px',
                            alignItems: 'center',
                            margin: '5px',
                            cursor: 'pointer',
                            transition: 'box-shadow 0.3s ease-in-out',
                        }}
                        onClick={() => navigate(PATHS.ABOUT)}
                    >
                        <div
                            style={{
                                alignItems: 'center',
                            }}
                        >
                            <DocSvg
                                style={{ padding: '20px 30px 20px 20px' }}
                            />
                        </div>
                        <div
                            style={{
                                flexDirection: 'column',
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            <div
                                style={{
                                    padding: 0,
                                    marginBottom: '2px',
                                }}
                            >
                                <h3
                                    style={{
                                        padding: 0,
                                        margin: 0,
                                    }}
                                >
                                    Документация
                                </h3>
                            </div>
                            <div>
                                <h4
                                    style={{
                                        padding: 0,
                                        margin: 0,
                                        color: '#797A80',
                                    }}
                                >
                                    Описание системы и API
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <Link
                    style={{ color: '#000000DE' }}
                    to={'http://dev.kerong.ru:9991/api/swagger-ui/index.html'}
                >
                    <div>
                        <div
                            className={'main-container'}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '300px',
                                height: '72px',
                                backgroundColor: '#F6F6F6',
                                borderRadius: '8px',
                                alignItems: 'center',
                                margin: '5px',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.3s ease-in-out',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                }}
                            >
                                <KerongApiSvg
                                    style={{ padding: '20px 30px 20px 20px' }}
                                />
                            </div>
                            <div
                                style={{
                                    flexDirection: 'column',
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                <div
                                    style={{
                                        padding: 0,
                                        marginBottom: '2px',
                                    }}
                                >
                                    <h3
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                        }}
                                    >
                                        Kerong API
                                    </h3>
                                </div>
                                <div>
                                    <h4
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                            color: '#797A80',
                                        }}
                                    >
                                        Интерактивная документация
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    style={{ color: '#000000DE' }}
                    to={
                        'http://dev.kerong.ru:9991/api/v1/docs/swagger-ui/index.html'
                    }
                >
                    <div>
                        <div
                            className={'main-container'}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '300px',
                                height: '72px',
                                backgroundColor: '#F6F6F6',
                                borderRadius: '8px',
                                alignItems: 'center',
                                margin: '5px',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.3s ease-in-out',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                }}
                            >
                                <KerongLcsSvg
                                    style={{ padding: '20px 30px 20px 20px' }}
                                />
                            </div>
                            <div
                                style={{
                                    flexDirection: 'column',
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                <div
                                    style={{
                                        padding: 0,
                                        marginBottom: '2px',
                                    }}
                                >
                                    <h3
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                        }}
                                    >
                                        Kerong LCS
                                    </h3>
                                </div>
                                <div>
                                    <h4
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                            color: '#797A80',
                                        }}
                                    >
                                        Интерактивная документация
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    style={{ color: '#000000DE' }}
                    to={'http://dev.kerong.ru:9980/'}
                >
                    <div>
                        <div
                            className={'main-container'}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '300px',
                                height: '72px',
                                backgroundColor: '#F6F6F6',
                                borderRadius: '8px',
                                alignItems: 'center',
                                margin: '5px',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.3s ease-in-out',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                }}
                            >
                                <KerongLcsWebScg
                                    style={{ padding: '20px 30px 20px 20px' }}
                                />
                            </div>
                            <div
                                style={{
                                    flexDirection: 'column',
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                <div
                                    style={{
                                        padding: 0,
                                        marginBottom: '2px',
                                    }}
                                >
                                    <h3
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                        }}
                                    >
                                        Kerong LCS WEB
                                    </h3>
                                </div>
                                <div>
                                    <h4
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                            color: '#797A80',
                                        }}
                                    >
                                        Демо-режим веб-приложения
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </Paper>
        </div>
    )
}
