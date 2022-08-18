/*
Учитывая строку, состоящую из букв a, b и / или c, измените положение букв a и b (измените a на b и наоборот). Оставьте любое количество c нетронутым.

    Пример:

'acb' -> 'bca'
'aabacbaa' -> 'bbabcabb'
*/

function switcheroo(x) {
    let arr = x.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a') {
            newArr.push('b')
        } else if (arr[i] === 'b') {
            newArr.push('a')
        } else {
            newArr.push('c')
        }
    }
    return newArr.join('')
}

console.log(switcheroo('aabacbaba'))