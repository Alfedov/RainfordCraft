import './RatingTable.scss'

const RatingTable = ({ filter, users }) => {
    const getFormattedNumber = (num) => {
        num = num.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')
        return num
    }

    const getName = (filter) => {
        if (filter === 'kills') return 'Убийств'
        if (filter === 'hours') return 'Уровень'
        if (filter === 'money') return 'Баланс'
    }

    const getShortName = (filter) => {
        if (filter === 'kills') return 'уб.'
        if (filter === 'hours') return 'ур.'
        if (filter === 'money') return 'руб.'
    }

    return (
        <div className="rating-table">
            <div className="rating--table__top">
                <div className="table--header">
                    <div className="table--header__inner">
                        <div>#</div>
                        <div>Логин</div>
                        <div>{getName(filter)}</div>
                    </div>
                </div>

                <div className="table--header">
                    <div className="table--header__inner">
                        <div>#</div>
                        <div>Логин</div>
                        <div>{getName(filter)}</div>
                    </div>
                </div>
                <div className="table--header">
                    <div className="table--header__inner">
                        <div>#</div>
                        <div>Логин</div>
                        <div>{getName(filter)}</div>
                    </div>
                </div>
            </div>

            <div className="rating--table__bottom">
                {users.map((user, id) => {
                    return (
                        <div key={id} className="table--item">
                            <div className="table--item__inner">
                                <div className="table--item__left">
                                    <span>{id + 1}</span>
                                </div>
                                <div className="table--item__center">{user.nick}</div>
                                <div className="table--item__right">
                                    {getFormattedNumber(user[filter])} {getShortName(filter)}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RatingTable
