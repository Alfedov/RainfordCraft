import { Helmet } from 'react-helmet'

import PremiumScreen from '../components/PremiumScreen/PremiumScreen'

export const Premium = () => {
    return (
        <>
            <Helmet>
                <title>SMOTRArage — Премиум</title>
            </Helmet>

            <PremiumScreen />
        </>
    )
}
