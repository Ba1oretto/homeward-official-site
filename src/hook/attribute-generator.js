import isBlank from "./isBlank.js";

const getColor = (color) => {
    return 'color: ' + color
}

const getPostURL =(name) => {
    return '/blog/' + name
}

const getImageAddress = (address) => {
    if (isBlank(address)) return false
    return 'background-image: url(' + address.toString().replace('__GHOST_URL__', 'https://ghost.ba1oretto.com') + ')';
}

const getDate = (datetime) => {
    if (isBlank(datetime)) return ''
    const date = new Date(datetime);
    const dateList = date.toDateString().split(' ');
    const month = dateList[1]
    const day = dateList[2].replace('0', '')
    const year = dateList[3]
    const ordinal = (day) => {
        if (day > 3 && day < 21) return 'th'
        switch (day % 10) {
            case 1: return 'st'
            case 2: return 'nd'
            case 3: return 'rd'
            default: return 'th'
        }
    }
    return month + ' ' + day + ordinal(day) + ', ' + year
}

const generatePostContent = (html) => {
    if (isBlank(html)) return false
    return html.toString().replaceAll('__GHOST_URL__', 'https://ghost.ba1oretto.com')
}

const textSubstring = (rawText, position) => {
    if (rawText.toString().length >= position) return rawText.toString().substring(0, position) + '...'
    else return rawText
}

export {getColor, getPostURL, getImageAddress, getDate, generatePostContent, textSubstring}