/*
Возьмите 2 строки s1и s2включите только буквы от a до z. Возвращает новую отсортированную строку, максимально длинную, содержащую отдельные буквы - каждая из которых берется только один раз - из s1 или s2.*/


function longest(s1, s2) {
    let s3 = (s1 + s2).replace(/(.)(?=.*\1)/g, "");
    let arr = []
    for (let i = 0; i < s3.length; i++) {
        arr.push(s3[i])
    }
    return arr.sort().join('')
}


// вариант  решения c использованием  Set
function longest2(s1, s2) {
    return [...new Set(s1+s2)].sort().join('')
}


function toString(a){
    return a.toString()
}

console.log(toString([]))