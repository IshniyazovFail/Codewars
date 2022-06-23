/*

Напишите функцию, которая возвращает минимальное и максимальное количество заданного списка/массива.

Примеры (ввод --> вывод)
    [1,2,3,4,5] --> [1,5]
    [2334454,5] --> [5, 2334454]
    [1]         --> [1, 1]
*/




function minMax(arr){
    let newArr=[];
    let sortArr =arr.sort((a,b)=>a-b)
    newArr[0]=sortArr[0]
    newArr[1]=sortArr[arr.length-1]
    return newArr;
}

console.log(minMax([3,1,545,2,0]))