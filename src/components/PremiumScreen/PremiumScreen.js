import { useEffect, useRef, useState } from 'react'
import Select from 'react-select'
import Michael from '../../images/Dima.png'
import Michael2 from '../../images/Dima@2x.png'
import Servers from '../Servers/Servers'
import getFormattedNumber from './getFormattedNumber'
import './PremiumScreen.scss'
import customStyles from './selectStyles'

const PremiumScreen = () => {
    // Config для селекта сереров
    const [server, setServer] = useState('')
    const [premium, setPremium] = useState([])
    const [premiumLoading, setPremiumLoading] = useState(true)
    const [premiumSum, setPremiumSum] = useState('')
    const [closed, setClosed] = useState(true)

    useEffect(() => {
        fetch('https://smotrarage.ru/api/premium.php')
            .then((res) => res.json())
            .then((res) => {
                setTimeout(() => {
                    setPremium(res)
                    setPremiumLoading(false)
                }, 1000)
            })
    }, [])

    const handlePremium = (e) => {
        console.log('e', e)
        sumRef.current.value = e.val - (e.val * e.discount) / 100 + ' ₽'
        setPremiumSum(`${e.val},${e.val - (e.val * e.discount) / 100},${e.discount},${e.id},${e.label}`)
    }

    const options = [{ value: 'Премиум на SMOTRArage №1', label: 'SMOTRArage 1' }]

    const [error, setError] = useState('')
    const [isStart, setIsStart] = useState(true)

    const [loadingUser, setLoadingUser] = useState(true)
    const validateUser = (login) => {
        fetch(`https://smotrarage.ru/api/checklog.php?login=${login}`)
            .then((response) => response.text())
            .then((response) => {
                setLoadingUser(false)
                console.log('user', response)
                if (response !== 'Success') {
                    setError(`${error} Аккаунт с логином ${login} не найден.`)
                }
            })
            .catch((e) => setError(`${error} Ошибка: Не удалось получить данные о пользователе (${e}).`))
    }

    const [loadingFreekassa, setLoadingFreekassa] = useState(true)
    const [freekassa, setFreekassa] = useState('')

    const generateFreekassaForm = (login, sum) => {
        fetch(
            `https://smotrarage.ru/api/enotPremium.php?srv=1&login=${login}&summa=${
                premiumSum.split(',')[1]
            }&premium=${premiumSum.split(',')[3]}`
        )
            .then((response) => response.json())
            .then((response) => {
                setLoadingFreekassa(false)

                let newObject = Object.entries(response).map(([key, value]) => ({
                    key,
                    value
                }))
                setFreekassa(newObject)

                console.log('Enot', newObject)
            })
            .catch((e) => setError(`${error} Ошибка обработки Enot.io. (${e}).`))
    }

    const [loadingChill, setLoadingChill] = useState(true)
    const [chill, setChill] = useState('')

    const generateChillForm = (login, sum) => {
        console.log('log2')

        fetch(
            `https://smotrarage.ru/api/paypalichPremium.php?srv=1&login=${login}&summa=${
                premiumSum.split(',')[1]
            }&premium=${premiumSum.split(',')[3]}`
        )
            .then((response) => response.json())
            .then((response) => {
                setLoadingChill(false)

                setChill(response.url)
            })
            .catch((e) => setError(`${error} Ошибка обработки PayPalich. (${e}).`))
    }

    const refSign = useRef('')

    const handleStep = () => {
        if (isStart) {
            // validation
            if (!refDesc.current.value) return alert('Укажите сервер')
            if (!refAccount.current.value) return alert('Укажите логин')
            if (!premiumSum) return alert('Укажите длительность')

            // verification
            validateUser(refAccount.current.value)
            generateFreekassaForm(refAccount.current.value, premiumSum.split(',')[0])

            generateChillForm(refAccount.current.value, premiumSum.split(',')[0])

            // next step
            setIsStart(false)
        } else {
            // clears errors, etc...
            setIsStart(true)
            setLoadingUser(true)
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
                            <h1>Купить премиум</h1>
                            {isStart ? (
                                <p>
                                    Подключая премиум аккаунт, вы получаете массу преимуществ и возможностей на нашем
                                    сервере. После приобретения, вы автоматически в течении двух минут получите
                                    премиум доступ в игре.
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
                                    {!premiumLoading ? (
                                        <Select
                                            options={premium.variants}
                                            placeholder={'Длительность премиума'}
                                            styles={customStyles}
                                            onChange={handlePremium}
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            disabled
                                            placeholder={'Загружаем...'}
                                            className="ordinput"
                                            onChange={handleLogin}
                                        />
                                    )}

                                    <div className="input-icon icon-money"></div>
                                </div>

                                <div className="input-group final" hidden={!premiumSum}>
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
                                    <div className="postext large">
                                        <s>{`${premiumSum.split(',')[0]} ₽`}</s>
                                        <span>{`-${premiumSum.split(',')[2]}%`}</span>
                                    </div>
                                </div>

                                <div
                                    className={`padvantages ${!closed && 'active'}`}
                                    onClick={() => setClosed((prev) => !prev)}
                                >
                                    Преимущества
                                </div>

                                {!premiumLoading ? (
                                    <ul className="input-ul" hidden={closed}>
                                        {premium.benefits.map((benefit, idx) => {
                                            return <li key={idx}>{benefit}</li>
                                        })}
                                    </ul>
                                ) : (
                                    <ul className="input-ul" hidden={closed} style={{ listStyle: 'none' }}>
                                        <li>Загружаем информацию</li>
                                    </ul>
                                )}

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
                                        <div className="top">Длительность:</div>
                                        <div className="bottom">
                                            {`${premiumSum.split(',')[4]}`}
                                            <span className="icon-money"></span>
                                        </div>
                                    </div>

                                    <div className="finish-item">
                                        <div className="top">К оплате:</div>
                                        <div className="bottom">
                                            {`${premiumSum.split(',')[1]} ₽`}
                                            <span className="icon-money"></span>
                                        </div>
                                    </div>
                                </div>

                                <form autoComplete="false">
                                    <input type="hidden" name="signature" ref={refSign} />
                                    <input type="hidden" name="desc" ref={refDesc} />
                                    <input type="hidden" name="account" ref={refAccount} />
                                    <input type="hidden" name="sum" ref={refSum} />
                                </form>

                                {error && <p className={'error'}>{error}</p>}

                                {!error && !loadingUser && !loadingFreekassa && (
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
                                            Оплатить (ENOT.IO)
                                        </button>
                                    </form>
                                )}

                                {!error && !loadingUser && loadingFreekassa && (
                                    <div style={{ maxWidth: 300 }}>
                                        <button
                                            style={{ width: '100%', backgroundColor: '#10047' }}
                                            type="submit"
                                            className="donate-submit inactive blue"
                                        >
                                            Загружаем
                                        </button>
                                    </div>
                                )}

                                {!error && !loadingUser && !loadingChill && (
                                    <div style={{ maxWidth: 300 }}>
                                        <a href={chill} className="donate-submit freekassa" style={{ width: '100%' }}>
                                            Картой (в т.ч. ИНОСТРАННОЙ)
                                        </a>
                                    </div>
                                )}

                                {!error && !loadingUser && loadingChill && (
                                    <div style={{ maxWidth: 300 }}>
                                        <a className="donate-submit inactive freekassa" style={{ width: '100%' }}>
                                            Загружаем
                                        </a>
                                    </div>
                                )}

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

export default PremiumScreen
