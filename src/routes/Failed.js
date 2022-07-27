import { Helmet } from 'react-helmet'
import { UnSuccessScreen } from '../components/DonateSuccess/UnSuccess'

const Failed = () => {
    return (
        <>
            <Helmet>
                <title>Что-то пошло не так :(</title>
            </Helmet>

            <UnSuccessScreen />
        </>
    )
}

export default Failed
