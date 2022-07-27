import './Server.scss'

const Server = ({
    serverName = 'Сервер SMOTRARAGE',
    serverStatus = 'online',
    serverColor,
    serverIp,
    serverPlayers = 0,
    serverText = 'Загрузка...'
}) => {
    return (
        <div className={`server server${serverName.slice(-1)}`}>
            <div className={`status ${serverStatus}`}>{serverText}</div>
            <div className="players">{serverPlayers}</div>
            <div className="name">{serverName}</div>
        </div>
    )
}

export default Server
