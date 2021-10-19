export function checkFilling(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length <= 0) {
            return false
        }
    }
    return true;
}


export function checkLanguage(russian, english, german) {
    let res = '';
    if (russian) { res += 'Русский, ' }
    if (english) { res += 'Английский, ' }
    if (german) { res += 'Немецкий, ' }
    if (res === '') {
        return 'нет'
    } else {
        return res.substring(0, res.length - 2)
    }
}

export function checkEducation(str) {
    if (str === 'secondary') { return 'Среднее' }
    if (str === 'secondary_special') { return 'Среднее специальное' }
    if (str === 'higher') { return 'Высшее' }
}