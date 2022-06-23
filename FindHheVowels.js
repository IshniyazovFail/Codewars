/*
Мы хотим знать индекс гласных в данном слове, например, в слове супер две гласные (вторая и четвертая буквы).

Таким образом, учитывая строку «super», мы должны вернуть список файлов [2, 4].

    Some examples:
    Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
ЗАМЕТКИ
Гласные в этом контексте относятся к: aeiouy (включая верхний регистр)
Это проиндексировано [1..n](не нулевым индексом!)*/


function vowelIndices(word){
    let vowels ='a'|'A'|'e'|'E'|'i'|'I'|'o'|'O'|'u'|'U'|'y'|'Y'
    let arr =[]
    for (let i = 0; i <word.length ; i++) {
        if(word.slice([i],[i+1])===vowels){
          arr.push([i+1])
            return arr
        }
    }

}

console.log(vowelIndices("moloko"))