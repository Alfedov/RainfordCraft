import './Footer.scss'
import FooterLogo from '../../images/FooterLogo.png'
import FooterLogo2 from '../../images/FooterLogo@2x.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src={FooterLogo} srcSet={`${FooterLogo2} 2x`} alt={'...'} />
            </div>
            <div className="footer__right">
                <a href="https://smotramta.ru/" target="_blank" rel="noreferrer">
                    SMOTRAmta
                </a>
                <a href="https://vk.com/topic-178026244_40148208" target="_blank" rel="noreferrer">
                    Помощь
                </a>
                <a href="https://vk.com/topic-178026244_41058579" target="_blank" rel="noreferrer">
                    Правила сервера
                </a>
                <Link to={'/policy'}>Политика конфиденциальности</Link>
            </div>
        </div>
    )
}
