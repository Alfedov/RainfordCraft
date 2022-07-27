import { useRef, useState } from 'react'
import Select from 'react-select'
import Michael from '../../images/Michael.png'
import Michael2 from '../../images/Michael@2x.png'
import Servers from '../Servers/Servers'
import './DonateScreen.scss'
import getFormattedNumber from './getFormattedNumber'
import customStyles from './selectStyles'

const DonateScreen = () => {
    // Config для селекта сереров
    const [server, setServer] = useState('')

    const options = [
        { value: 'Донат на SMOTRArage №1', label: 'SMOTRArage 1' }
    ]

    const [error, setError] = useState('')
    const [isStart, setIsStart] = useState(true)

    const [loadingUser, setLoadingUser] = useState(true)
    const validateUser = (login) => {
        fetch(`https://smotrarage.ru/api/checklog.php?login=${login}`)
            .then((response) => response.text())
            .then((response) => {
                setLoadingUser(false)
                if (response !== 'Success') {
                    setError(`${error} Аккаунт с логином ${login} не найден.`)
                }
            })
            .catch((e) => setError(`${error} Ошибка: Не удалось получить данные о пользователе (${e}).`))
    }

    const [loadingQIWILink, setLoadingQIWILink] = useState(true)
    const [QIWILink, setQIWILink] = useState('')

    const generateQIWILink = (login, sum) => {
        fetch(`https://api.smotra.games/qiwiRage.php?getLink&login=${login}&amount=${sum}`)
            .then((response) => response.json())
            .then((response) => {
                setLoadingQIWILink(false)
                setQIWILink(response.link)
            })
            .catch((e) => setError(`${error} Ошибка обработки QIWI. (${e}).`))
    }

    const [loadingFreekassa, setLoadingFreekassa] = useState(true)
    const [freekassa, setFreekassa] = useState('')

    const generateFreekassaForm = (login, sum) => {
        fetch(`https://smotrarage.ru/api/enot.php?srv=1&login=${login}&summa=${sum}`)
            .then((response) => response.json())
            .then((response) => {
                setLoadingFreekassa(false)

                let newObject = Object.entries(response).map(([key, value]) => ({
                    key,
                    value
                }))
                setFreekassa(newObject)

                // console.log("Enot", newObject);
            })
            .catch((e) => setError(`${error} Ошибка обработки Enot.io. (${e}).`))
    }

    const [loadingChill, setLoadingChill] = useState(true)
    const [chill, setChill] = useState('')

    const generateChillForm = (login, sum) => {
        fetch(`https://smotrarage.ru/api/paypalich.php?srv=1&login=${login}&summa=${sum}`)
            .then((response) => response.json())
            .then((response) => {
                setLoadingChill(false)

                if (response.result) {
                    setChill(response.url)
                }
            })
            .catch((e) => setError(`${error} Ошибка обработки PayPalich. (${e}).`))
    }

    // const generateChillForm = (login, sum) => {
    // 	fetch(`https://smotrarage.ru/api/chill.php?srv=1&login=${login}&summa=${sum}`)
    // 		.then((response) => response.json())
    // 		.then((response) => {
    // 			setLoadingChill(false)

    // 			if (response.success) {
    // 				setChill(response.link)
    // 			}

    // 			// console.log("Enot", response.link);
    // 		})
    // 		.catch((e) => setError(`${error} Ошибка обработки CryptoChill. (${e}).`))
    // }

    const refSign = useRef('')
    const [loadingSign, setLoadingSign] = useState(true)

    const generateSign = (login, desc, sum) => {
        fetch(
            `https://api.smotra.games/signature.php?login=${login}&currency=RUB&desc=${desc}&sum=${sum}`
        )
            .then((response) => response.json())
            .then((response) => {
                setLoadingSign(false)
                refSign.current.value = response[0].signature
            })
            .catch((e) => setError(`${error} Ошибка получения подписи  (${e}).`))
    }

    const handleStep = () => {
        if (isStart) {
            // validation
            if (!refDesc.current.value) return alert('Укажите сервер')
            if (!refAccount.current.value) return alert('Укажите логин')
            if (!refSum.current.value) return alert('Укажите сумму')

            // verification
            validateUser(refAccount.current.value)
            generateSign(refAccount.current.value, refDesc.current.value, refSum.current.value)
            generateQIWILink(refAccount.current.value, refSum.current.value)
            generateFreekassaForm(refAccount.current.value, refSum.current.value)
            generateChillForm(refAccount.current.value, refSum.current.value)

            // next step
            setIsStart(false)
        } else {
            // clears errors, etc...
            setIsStart(true)
            setLoadingSign(true)
            setLoadingUser(true)
            setLoadingQIWILink(true)
            setError('')
        }
    }

    const refAccount = useRef('')
    const handleLogin = (e) => (refAccount.current.value = e.target.value)

    const refSum = useRef('') // to form
    const sumRef = useRef('') // to checkout

    const handleSum = (e) => {
        refSum.current.value = e.target.value
        sumRef.current.value = '= ' + getFormattedNumber(e.target.value * 3333)
    }

    const refDesc = useRef('')
    const handleDesc = (e) => {
        refDesc.current.value = e.value
        setServer(e.label)
    }

    return (
        <div className="mainsection">
            <img src={Michael} srcSet={`${Michael2} 2x`} alt={'...'} className={'michael'} />

            <div className="mainsection__inner donatescreen container">
                <div className="mainsection__inner--left">
                    <img src={Michael} srcSet={`${Michael2} 2x`} alt={'...'} className={'michael-min'} />

                    <div className="donatescreen__form">
                        <div className="donatescreen__form--title">
                            <h1>купить валюту</h1>
                            {isStart ? (
                                <p>
                                    Покупая донат единицы, вы можете конвертировать их в игровую валюту, через
                                    банкоматы или покупая игровой контент.
                                </p>
                            ) : (
                                <p>Пожалуйста, проверьте правильность данных</p>
                            )}
                        </div>

                        <div className="donateform">
                            <div className={`donateform__start ${isStart ? '' : 'hidden'}`}>
                                <div className="input-group">
                                    <Select
                                        options={options}
                                        placeholder={'Выберите сервер'}
                                        styles={customStyles}
                                        onChange={handleDesc}
                                    />
                                    <div className="input-icon icon-server"></div>
                                </div>

                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="acc"
                                        placeholder={'Введите ваш логин'}
                                        className="ordinput"
                                        onChange={handleLogin}
                                    />
                                    <div className="input-icon icon-login"></div>
                                </div>

                                <div className="input-group">
                                    <input
                                        type="number"
                                        min={10}
                                        name="sum"
                                        placeholder={'Введите желаемую сумму'}
                                        className="ordinput"
                                        onChange={handleSum}
                                    />
                                    <div className="input-icon icon-money"></div>
                                </div>

                                <div className="input-group final">
                                    <input
                                        type="text"
                                        min={10}
                                        name="sum"
                                        className="ordinput pright"
                                        onChange={handleSum}
                                        disabled={true}
                                        ref={sumRef}
                                    />
                                    <div className="input-icon icon-sum"></div>

                                    <div className="postext">игровой валюты</div>
                                </div>

                                <span className="nextbtn" onClick={handleStep}>
									Подтвердить
								</span>

                                <p className="under">
                                    Возникили проблемы с пополнением? Напишите на smotramta@gmail.com или в сообщения
                                    нашего{' '}
                                    <a href="https://vk.com/smotrarage" target="_blank" rel="noreferrer">
                                        сообщества
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className={`donateform__finish ${isStart ? 'hidden' : ''}`}>
                                <div className="donateform__finish--inner">
                                    <div className="finish-item">
                                        <div className="top">Сервер:</div>
                                        <div className="bottom">
                                            {server}
                                            <span className="icon-server"></span>
                                        </div>
                                    </div>

                                    <div className="finish-item">
                                        <div className="top">Логин:</div>
                                        <div className="bottom">
                                            {refAccount.current.value} <span className="icon-login"></span>
                                        </div>
                                    </div>

                                    <div className="finish-item">
                                        <div className="top">Сумма пополнения:</div>
                                        <div className="bottom">
                                            {getFormattedNumber(+refSum.current.value) + ' ₽'}
                                            <span className="icon-money"></span>
                                        </div>
                                    </div>
                                </div>

                                {!error ? (
                                    loadingSign ? (
                                        <></>
                                    ) : loadingUser ? (
                                        <></>
                                    ) : (
                                        <>
                                            {!loadingFreekassa && (
                                                <form style={{ maxWidth: 300 }} action="https://enot.io/pay">
                                                    {freekassa &&
                                                        freekassa.map((el) => {
                                                            return (
                                                                <input
                                                                    key={el.key}
                                                                    name={el.key}
                                                                    defaultValue={el.value}
                                                                    placeholder={el.value}
                                                                    hidden={true}
                                                                />
                                                            )
                                                        })}

                                                    <button
                                                        style={{ width: '100%', backgroundColor: '#10047' }}
                                                        type="submit"
                                                        className="donate-submit blue"
                                                    >
                                                        Банковские карты и другое
                                                    </button>
                                                </form>
                                            )}
                                        </>
                                    )
                                ) : (
                                    <></>
                                )}

                                {/*Result payment form*/}
                                <form action="https://unitpay.ru/pay/312731-cf22a" method="GET">
                                    <input type="hidden" name="currency" value="RUB" />
                                    <input type="hidden" name="signature" ref={refSign} />
                                    <input type="hidden" name="desc" ref={refDesc} />
                                    <input type="hidden" name="account" ref={refAccount} />
                                    <input type="hidden" name="sum" ref={refSum} />

                                    {error && <p className={'error'}>{error}</p>}

                                    {/*Magic, не трогать ахахха*/}

                                    {!error ? (
                                        loadingSign ? (
                                            <span className="prevbtn">Получение подписи...</span>
                                        ) : loadingUser ? (
                                            <span className="prevbtn">Проверка пользователя...</span>
                                        ) : (
                                            // <div className="donate-buttons">
                                            <div style={{ maxWidth: '300px' }}>
                                                {/* <input
                          type="submit"
                          value={"PayPal, WMZ"}
                          style={{ width: "100%" }}
                        /> */}
                                                {!loadingQIWILink && (
                                                    <a
                                                        href={QIWILink}
                                                        className="donate-submit qiwi"
                                                        style={{ width: '100%' }}
                                                    >
                                                        QIWI Кошелек
                                                    </a>
                                                )}
                                                {loadingChill ? (
                                                    <a className="donate-submit inactive freekassa" style={{ width: '100%' }}>
                                                        Загружаем...
                                                    </a>
                                                ) : (
                                                    <>
                                                        {refSum.current.value < 50 ? (
                                                            <a
                                                                className="donate-submit opacity freekassa inactive"
                                                                style={{ width: '100%' }}
                                                            >
                                                                Недоступно (мин. 50 руб)
                                                            </a>
                                                        ) : (
                                                            <a
                                                                href={chill}
                                                                className="donate-submit freekassa"
                                                                style={{ width: '100%' }}
                                                            >
                                                                Картой (в т.ч. ИНОСТРАННОЙ)
                                                            </a>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        )
                                    ) : (
                                        <></>
                                    )}
                                </form>

                                <p className="acceptpolicy">Я делаю добровольное пожертвование</p>
                                <span className="prevbtn" onClick={handleStep}>
									Назад
								</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Список серверов*/}
                <div className="mainsection__inner--right">
                    <Servers />
                </div>
            </div>
        </div>
    )
}

export default DonateScreen
