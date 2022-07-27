const Loader = ({ small }) => {
    if (small) {
        return <div className="smallloader">Загрузка...</div>
    }

    return (
        <div className="loader--wrapper">
            <div className="loader">Загрузка...</div>
        </div>
    )
}

export default Loader
