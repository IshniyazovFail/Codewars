/*
Напишите функцию, которая принимает строку и возвращает true, если она представлена в виде номера телефона.
    Предположим, что любое целое число от 0 до 9 в любом из мест будет выдавать действительный номер телефона.

    Беспокоитесь только о следующем формате:
    (123) 456-7890 (не забудьте пробел после закрывающих скобок)

Примеры:

    "(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false*/

//зарефакторить код
function validPhoneNumber(phoneNumber){
    let arr=[];
    for (let i = 0; i <phoneNumber.length ; i++) {
        arr.push(phoneNumber[i])
    }
return arr[0]==="("&&arr[4]===")"&&arr[5]===" "&&arr[9]==="-"&&phoneNumber.length===14

}
