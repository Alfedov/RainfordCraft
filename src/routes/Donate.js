import { Helmet } from 'react-helmet'
import DonateScreen from '../components/DonateScreen/DonateScreen'

const Donate = () => {
    return (
        <>
            <Helmet>
                <title>SMOTRArage — Донат</title>
            </Helmet>

            <DonateScreen />
        </>
    )
}

export default Donate
