import { SuccessScreen } from '../components/DonateSuccess/Success'
import { Helmet } from 'react-helmet'

const Success = () => {
    return (
        <>
            <Helmet>
                <title>Платеж успешно зачислен</title>
            </Helmet>

            <SuccessScreen />
        </>
    )
}

export default Success
