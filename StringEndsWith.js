/*
Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).

Примеры:

    solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/


function solution(str, ending){
    let a = str.length - ending.length
    let b = str.length
    return str.slice(a,b) === ending
}


// можно было использовать endsWith()