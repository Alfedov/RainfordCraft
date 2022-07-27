import { Helmet } from 'react-helmet'
import RatingSection from '../components/RatingSection/RatingSection'

const Rating = () => {
    return (
        <>
            <Helmet>
                <title>SMOTRArage — Рейтинг игроков</title>
            </Helmet>

            <RatingSection />
        </>
    )
}

export default Rating
