/*
Просто, учитывая строку слов, верните длину самого короткого слова (ов).
    Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.*/


function findShort(s){
    let arr=s.split(' ')
    let string=arr.map(el=>el.length)
    return Math.min(...string)
}

