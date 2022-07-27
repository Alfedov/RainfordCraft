import './Servers.scss'
import Server from './Server'
import { useEffect, useState } from 'react'
import Loader from '../../hoc/Loader/Loader'

const Servers = () => {
    const [dataLoading, setDataLoading] = useState(true)
    const [servers, setServers] = useState([])

    useEffect(() => {
        fetch('https://smotrarage.ru/api/top/api.php?online')
            .then((response) => response.json())
            .then((response) => {
                setDataLoading(false)
                setServers(response)
            })
    }, [])

    return (
        <div className="servers">
            {dataLoading ? (
                <Loader small={true} />
            ) : (
                servers.map((e, id) => (
                    <Server
                        key={id}
                        serverText={'Онлайн'}
                        serverPlayers={e.online}
                        serverName={`Сервер SMOTRArage ${e.name.slice(-1)}`}
                    />
                ))
            )}
        </div>
    )
}

export default Servers
