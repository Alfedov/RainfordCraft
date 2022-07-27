import './RatingSection.scss'

import RatingTable from '../RatingTable/RatingTable'
import { Footer } from '../Footer/Footer'
import { useEffect, useState } from 'react'

const RatingSection = () => {
    const [filter, setFilter] = useState('hours')
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    const filters = [
        {
            filter: 'hours',
            top: 'По уровню',
            bottom: 'на текущий момент'
        },
        {
            filter: 'kills',
            top: 'По убийствам',
            bottom: 'на текущий момент'
        },
        {
            filter: 'money',
            top: 'По деньгам',
            bottom: 'на текущий момент'
        }
    ]

    useEffect(() => {
        fetch('https://smotrarage.ru/api/top/api.php?rating')
            .then((response) => {
                return response.json()
            })
            .then((d) => {
                setData(d.servers[0])
                setLoading(false)
            })
    }, [])

    return (
        <div className="rating">
            <div className="rating__top">
                <div className="container">
                    <div className="rating__top--title">
                        <h2>Рейтинг игроков</h2>
                    </div>

                    <p className="rating__top--sub">Выберите сервер:</p>

                    <div>
                        <div className="rating__top--servers">
                            <span className="serverbtn">SMOTRArage 1</span>
                        </div>

                        <div className="rating__top--filters">
                            {filters.map((f, id) => {
                                if (f.filter === filter) {
                                    return (
                                        <div
                                            key={id}
                                            className={`filter-item active ${f.filter}`}
                                            onClick={() => setFilter(f.filter)}
                                        >
                                            <div className="filter-item__inner">
                                                <div className="top">{f.top}</div>
                                                <div className="bottom">{f.bottom}</div>
                                            </div>
                                        </div>
                                    )
                                }
                                return (
                                    <div
                                        key={id}
                                        className={`filter-item ${f.filter}`}
                                        onClick={() => setFilter(f.filter)}
                                    >
                                        <div className="filter-item__inner">
                                            <div className="top">{f.top}</div>
                                            <div className="bottom">{f.bottom}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="rating__bottom">
                <div className="rating__bottom--top">
                    <div className="container">
                        {loading ? (
                            <div className="loader">Loading...</div>
                        ) : (
                            <RatingTable filter={filter} users={data['srv1'][filter].players} />
                        )}
                    </div>
                </div>

                <div className="rating__bottom--bottom">
                    <div className="container">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatingSection
