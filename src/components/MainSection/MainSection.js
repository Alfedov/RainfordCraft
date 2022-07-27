import './MainSection.scss'
import {HashLink} from 'react-router-hash-link'

export const MainSection = () => {
    return (
        <div className="mainsection">
            <div className="mainsection__inner container">
                {/*Заголовок*/}
                <div className="mainsection__inner--left">
                    <div className="maintitle">
                        <h1 className="maintitle__head">
                            Rainford <span>Craft</span>
                        </h1>
                        <p className="maintitle__bottom">Новый уникальный сервер для выживания в minecraft</p>
                        <HashLink to={'/#start'} smooth className="maintitle__btn">
                            Начать играть
                        </HashLink>
                        <p className="maintitle__bottom-text">на сервере уже <span>216</span> из 1000 игроков</p>
                    </div>
                    <div className="mainsection__footer">мы в социальных сетях</div>
                    <div>
                        {/*  Добавить картинки фоотер */}
                    </div>
                </div>
            </div>
        </div>
    )
}
