function dayOfTheWeek(date) {
 let arr = date.split("/").reverse().join('/');
 let newDate=new Date(arr)
    switch (newDate.getDay()){
        case 0:return "Sunday"
        case 1:return "Monday"
        case 2:return "Tuesday"
        case 3:return "Wednesday"
        case 4:return "Thursday"
        case 5:return "Friday"
        case 6:return "Saturday"

    }
}

console.log(dayOfTheWeek("3/12/2007"))