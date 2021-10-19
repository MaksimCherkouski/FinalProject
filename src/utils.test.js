
const { checkFilling, checkLanguage } = require('./utils')

describe('checkFilling', () => {
    test('Should return boolean', () => {
        expect(checkFilling(['', '', ''])).toBe(false)
        expect(checkFilling(['s', 'a', '3'])).toBe(true)
    });
    test('Should check non - empty array elements', () => {
        expect(checkFilling(['string1', 'string2', 'string3'])).toBe(true)
    });
    test('Should check  array elements', () => {
        expect(checkFilling(['string1', '', 'string3'])).toBe(false)
    })

})

describe('checkLanguage', () => {
    test('Should return string', () => {
        expect(checkLanguage()).not.toBe(undefined)
        expect(checkLanguage(true, false, false)).toBe('Русский')
    });
    test('Should create correct string', () => {
        expect(checkLanguage(false, true, false)).toBe('Английский')
    });
})