import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Logo from '../../images/NavbarLogo.png'
import Logo2x from '../../images/NavbarLogo@2x.png'
import { IconDiscord } from '../../ui/icons/icon-discord'
import { IconVK } from '../../ui/icons/icon-vk'
import { IconLogotype } from '../../ui/icons/icon-logotype'
import { IconMenu } from '../../ui/icons/icon-menu'
import { IconYoutube } from '../../ui/icons/icon-youtube'
import './menu.scss'
import './Navbar.scss'

const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false)

    const handleMobileMenu = () => {
        if (isMobileMenu) {
            setIsMobileMenu(false)
            document.body.style.overflow = 'unset'
        } else {
            setIsMobileMenu(true)
            document.body.style.overflow = 'hidden'
        }
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-inner container">
                    <div className="navbar-inner-left">
                        <Link to={'/'}>
                            <div className="navbar-logotype">
                                <IconLogotype />
                            </div>
                        </Link>
                    </div>

                    <div className="navbar-inner-center">
                        <IsMainLink to={'/'}>Главная</IsMainLink>
                        <HashLink to={'/#start'} smooth>
                           О нас
                        </HashLink>
                        <HashLink to={'/#start'} smooth>
                          Как начать играть
                        </HashLink>
                        <a href="https://forum.smotrarage.ru/">Магазин</a>
                    </div>

                    <div className="navbar-inner-toggle" onClick={handleMobileMenu}>
                        <IconMenu />
                    </div>
                </div>
            </div>

            {isMobileMenu ? (
                <div className="mobilemenu">
                    <div className="close" onClick={handleMobileMenu}></div>

                    <div className="mobilemenu__top">
                        <Link to={'/'} onClick={handleMobileMenu}>
                            <img
                                src={Logo}
                                srcSet={`${Logo} 1x, ${Logo2x} 2x`}
                                alt="SMOTRArage"
                                width={42}
                                height={38}
                            />
                        </Link>
                    </div>

                    <div className="mobilemenu__middle">
                        <NavLink onClick={handleMobileMenu} to={'/'}>
                            Главная
                        </NavLink>
                        <HashLink onClick={handleMobileMenu} to={'/#start'} smooth>
                            Как начать
                        </HashLink>
                        <a href="https://forum.smotrarage.ru/">Форум</a>
                        <HashLink onClick={handleMobileMenu} to={'/#about'} smooth>
                            О проекте
                        </HashLink>
                        <NavLink onClick={handleMobileMenu} to={'/rating'}>
                            Рейтинг
                        </NavLink>
                        <NavLink onClick={handleMobileMenu} to={'/premium'}>
                            Премиум
                        </NavLink>
                        <NavLink onClick={handleMobileMenu} to={'/donate'}>
                            Донат
                        </NavLink>
                    </div>

                    <div className="mobilemenu__bottom">
                        <a href="https://vk.com/smotrarage" target="_blank" rel="noreferrer">
                            <IconVK />
                        </a>
                        <a href="https://discord.com/invite/6647P2P" target="_blank" rel="noreferrer">
                            <IconDiscord />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCFsm34mjZv1x1SSdljAnDIw"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IconYoutube />
                        </a>
                    </div>
                </div>
            ) : null}
        </>
    )
}

function IsMainLink({ to, children }) {
    return (
        <NavLink to={to} className={({ isActive }) => (isActive ? 'hidden' : '')}>
            {children}
        </NavLink>
    )
}

export default Navbar
