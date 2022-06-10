/*
О, нет! Сообщается, что призраки заполонили город. Это ваша работа, чтобы избавиться от них и спасти день!

    В этой ката строки представляют собой здания, а пробелы внутри этих строк представляют собой призраков.

    Так чего же ты ждешь? Вернуть здание(строка) без привидений(пробелов)!

    Пример:

ghostBusters("Sky scra per");
Должен вернуться:

    "Skyscraper"
Если в здании нет призраков, вернуть строку:

    "You just wanted my autograph didn't you?"*/

function ghostBusters(building) {
    return building.replace(/\s/g, "").length<building.length?building.replace(/\s/g, ""):"You just wanted my autograph didn't you?"
}


