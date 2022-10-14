/*
Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.

    Примеры
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

function reverseWords(string) {
    return string.split(' ').reverse().join(' ').split('').reverse().join('')
}



console.log( reverseWords('This is an example!'))