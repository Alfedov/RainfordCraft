import './DonateSuccess.scss'

import { Link } from 'react-router-dom'
import LeftImg from '../../images/SuccessLeft.png'
import LeftImg2x from '../../images/SuccessLeft@2x.png'
import RightImg from '../../images/SuccessRight.png'
import RightImg2x from '../../images/SuccessRight@2x.png'

export const SuccessScreen = () => {
    return (
        <div className="donatefull success">
            <div className="donatefull__inner container">
                <div className="donatefull__text">
                    <h1 className="donatefull__text--head">ПЛАТЁЖ УСПЕШНО ЗАЧИСЛЕН!</h1>
                    <div className="donatefull__text--p">
                        Когда вы будете онлайн на сервере, деньги поступят на счёт в течении 5 минут
                    </div>
                    <Link to={'/donate'} className="donatefull__text--button">
                        Задонатить еще
                    </Link>
                    <p className="donatefull__text--under">
                        Возникили проблемы с пополнением? Напишите на smotramta@gmail.com или в сообщения нашего{' '}
                        <a href="https://vk.com/smotrarage" target="_blank" rel="noreferrer">
                            сообщества
                        </a>
                        .
                    </p>

                    <img src={LeftImg} srcSet={`${LeftImg2x} 2x`} alt={'...'} className="donatefull__left" />
                    <img
                        src={RightImg}
                        srcSet={`${RightImg2x} 2x`}
                        alt={'...'}
                        className="donatefull__right"
                    />
                </div>
            </div>
        </div>
    )
}
