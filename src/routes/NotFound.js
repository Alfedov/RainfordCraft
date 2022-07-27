import { Helmet } from 'react-helmet'

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>SMOTRArage — Страница не найдена</title>
                <meta name="prerender-status-code" content="404" />
                <meta name="robots" content="index,follow" />
            </Helmet>
            <div className={'errorpage'}>
                <pre>404. — Такая страница не найдена :(</pre>
            </div>
        </>
    )
}

export default NotFound
