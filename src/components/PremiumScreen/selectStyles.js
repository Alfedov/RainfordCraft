const selectStyles = {
    control: (base) => ({
        ...base,
        height: 50,
        minHeight: 50,
        background: 'none',
        fontSize: '14px',
        outline: 'none',
        border: 0,
        boxShadow: 'none'
    }),

    menu: (base, state) => ({
        ...base,
        backgroundColor: '#20222E',
        marginTop: 0,
        marginLeft: -10
    }),
    option: (base, state) => ({
        ...base,
        color: state.isSelected ? '#fff' : '#ccc',
        fontSize: 14,
        fontWeight: state.isSelected ? '600' : '400',
        backgroundColor: state.isSelected ? '#333645' : 'transparent'
    }),
    valueContainer: (base) => ({
        ...base,
        padding: 'none'
    }),
    placeholder: (base) => ({
        ...base,
        margin: '0'
    }),

    indicatorSeparator: (base) => ({
        ...base,
        display: 'none'
    }),

    singleValue: (base) => ({
        ...base,
        color: '#fff',
        fontWeight: 600
    })
}

export default selectStyles
