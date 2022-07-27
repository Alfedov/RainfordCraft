import { useRef } from 'react'
import './CardsContainer.scss'

export const CardsContainer = () => {
	const inputEl = useRef(null)
	const handleCopy = (e) => {
		e.preventDefault()
		inputEl.current.select()
		document.execCommand('copy')
		alert(`IP: ${inputEl.current.value} скопирован.`)
	}

	return (
		<div className='cards-grid'>
			{/*Шаг 1*/}
			<div className='card'>
				<div className='card__face card__face--front'>
					{/*<span className='step'>1</span>*/}
					<div className='card-title'>серьезность</div>
					<p className='card-p'>
						Мы стараемся выпускать еженедельные нововведения, которые влияют на улучшение нашего проекта. основной целью
						является создать проект который будет не стоять на месте, а усовершенствоваться
					</p>
					<p className='card-p'>
						Лицензионную GTA 5 можно купить в Steam, Epic Games или на других площадках цифровой
						дистрибуции.
					</p>
				</div>
			</div>

			{/*Шаг 2*/}
			<div className='card'>
				<div className='card__face card__face--front'>
					{/*<span className='step'>2</span>*/}
					<div className='card-title'>атмосфера</div>
					<p className='card-p'>
						Команда проекта предпринимает все возможные меры для сохранения комфортной и интересной атмосферы на нашем
						проекте. Атмосфера в первую очередь также держится и на аудитории проекта
					</p>
				</div>
			</div>

			{/*Шаг */}
			<div className='card'>
				<div className='card__face card__face--front'>
					{/*<span className='step'>Шаг 3</span>*/}
					<div className='card-title'>уникальность</div>
					<p className='card-p'>
						Команда Разработчиков разрабатывает уникальные плагины и системы, которые Вы ранее не видели на других
						серверах. Большинство систем на нашем сервере принадлежат исключительно нам
					</p>
				</div>
			</div>
			{/*Шаг 3*/}
			<div className='card'>
				<div className='card__face card__face--front'>
					{/*	<span className='step'>Шаг 3</span>*/}
					<div className='card-title'>нет аналогов</div>
					<p className='card-p'>
						Сейчас сложно найти такие сервера, которые ответственно подходят к своей задачи. Многие сервера созданы
						просто с целью сбора денег, а деньги на развитие, и на обновление сервера - не тратят практически
					</p>
				</div>
			</div>
		</div>
	)
}
