import './SocialSection.scss'

import { Footer } from '../Footer/Footer'

import SocialCard from '../../images/SocialCard1.png'
import SocialCard2x from '../../images/SocialCard1@2x.png'
import SocialCard2 from '../../images/SocialCard2.png'
import SocialCard22x from '../../images/SocialCard2@2x.png'

export const SocialSection = () => {
    return (
        <div className="socialsection">
            <div className="socialsection__inner container">
                <div className="socialsection__inner--grid">
                    <div className="item blue">
                        <div className="item__inner">
                            <div className="item__inner--left">
                                <div className="top">
                                    <span>Официальное сообщество</span>
                                </div>
                                <div className="middle">
                                    <p>Следите за новостями в нашем сообществе ВКонтакте</p>
                                </div>
                                <div className="bottom">
                                    <a href="https://vk.com/smotrarage" target="_blank" rel="noreferrer">
                                        Подписаться
                                    </a>
                                </div>
                            </div>
                            <img src={SocialCard} srcSet={`${SocialCard2x} 2x`} alt={'...'} />
                        </div>
                    </div>

                    <div className="item pink">
                        <div className="item__inner">
                            <div className="item__inner--left">
                                <div className="top">
                                    <span>Сообщество для фанатов</span>
                                </div>
                                <div className="middle">
                                    <p>Сообщество фанатов проекта SMOTRArage</p>
                                </div>
                                <div className="bottom">
                                    <a href="https://vk.com/smotrafun" target="_blank" rel="noreferrer">
                                        Подписаться
                                    </a>
                                </div>
                            </div>
                            <img src={SocialCard2} srcSet={`${SocialCard22x} 2x`} alt={'...'} />
                        </div>
                    </div>
                </div>

                <a href="/success" style={{ display: 'none' }}>
                    success
                </a>
                <a href="/unsuccess" style={{ display: 'none' }}>
                    unsuccess
                </a>

                <Footer />
            </div>
        </div>
    )
}
