const getFormattedNumber = (num) => {
    num = num.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')
    return num
}

export default getFormattedNumber
