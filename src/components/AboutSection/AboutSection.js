import 'slick-carousel/slick/slick.css'
import './AboutSection.scss'

import React from 'react'
import Slider from 'react-slick'

class AboutSection extends React.Component {
    state = {
        slideIndex: 0,
        updateCount: 0,
        sliderButtons: [0, 1, 2, 3]
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => {
                this.setState({ slideIndex: next })
            }
        }

        return (
            <div className="aboutsection" id={'about'}>
                <div className="aboutsection__inner container">
                    <div className="aboutsection__left">
                        <div className="aboutsection__left--title">
                            <div className="headline headline-about">
                                <h2>О проекте</h2>
                            </div>

                            <div className="sliderbtns">
                                {this.state.sliderButtons.map((el, id) => {
                                    if (+el === this.state.slideIndex) {
                                        return (
                                            <div key={id} onClick={(e) => this.slider.slickGoTo(el)} className={'active'}>
                                                <span></span>
                                            </div>
                                        )
                                    }
                                    return (
                                        <div key={id} onClick={(e) => this.slider.slickGoTo(el)}>
                                            <span></span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
                            <div className={'slide'}>
                                <p>
                                    <strong>SMOTRArage</strong> - это RPG (Role Play Game) сервер в игре GTA 5
                                    (Мультиплеер RAGE:MP). Мы предоставляем комфортные условия игры. Поиграйте,
                                    реализуйте в персонаже собственные качества.
                                </p>
                                <p>
                                    Станьте полицейским или бандитом, заработайте кучу денег, купите любую тачку и
                                    тюнингуйте её как захотите, преобретайте дома и доходные бизнесы в мире GTA 5.
                                    Вариантов для развития бесконечное множество, потому что мы сделали системы,
                                    позволяющие очень тонко настроить вашу игру.
                                </p>
                            </div>

                            <div className="slide">
                                <p>
                                    Мы вкладываем много труда в наш проект. Зайдите на сервер, оцените качество нашего
                                    маппинга, уверяю, он не оставит вас без эмоций. Чтобы вам было спокойно играть, мы
                                    используем мощнейший хостинг, без устали оптимизируем мод и работаем над игровым
                                    миром. Системы сервера распределены по мере развития вашего персонажа. Это
                                    облегчит вашу игру, позволит вам расслабиться. Только зарегистрировавшись, вы
                                    можете посетить любые работы, после, плотно знакомясь с штатом (так называется
                                    игровой мир) и автопарком сервера вы можете легко развиться.
                                </p>
                            </div>
                            <div className="slide">
                                <p>
                                    Наша администрация - это команда помощников, радеющих за ваш комфорт. Они
                                    настроены максимально дружелюбно к игроку, стараясь помочь ему ответами на вопросы
                                    и жалобы с самого начала. Мы ведём серьёзный контроль за действиями сотрудников,
                                    но и поддерживаем их, обучаем, поэтому профессионализм обеспечен!
                                </p>
                            </div>
                            <div className="slide">
                                <p>
                                    Нас любят многие блоггеры. Ведь мы стабильны, у нас можно снять много контента,
                                    развлечься и позвать подписчиков, не беспокоясь за них. Регулярно нас посещают как
                                    крупные медиа-гиганты, так и новички в этом занятии.
                                </p>
                            </div>
                        </Slider>
                    </div>
                    <div className="aboutsection__right">
                        <div className="aboutsection__right--video">
                            <div className="video">
                                <div className="video__inner">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/ascdIUdZIa8"
                                        title="SMOTRArage"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutSection
