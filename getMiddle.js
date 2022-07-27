/*Вам будет дано слово. Ваша задача - вернуть средний символ слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, верните 2 средних символа.

    #Примеры:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"*/

function getMiddle(s) {
    let arr = []
    let sd = Math.floor((s.length -1) / 2)
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i])
    }
return s.length%2?arr[sd]:arr[sd]+arr[sd+1]
}

