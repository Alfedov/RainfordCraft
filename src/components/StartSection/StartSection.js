import './StartSection.scss'
import { CardsContainer } from './CardsContainer'

export const StartSection = () => {
	return (
		<div className='startsection'>
			<div className='startsection__inner container ' id={'start'}>
				<div className='startsection__inner--title'>
					<div className='headline headline-center headline-instruct'>
						<h2>Rainford <span>Craft</span></h2>
					</div>
				</div>

				<div className='startsection__inner--cards'>
					<CardsContainer />
				</div>
			</div>
		</div>
	)
}
