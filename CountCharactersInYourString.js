function count (string) {
    if(string.length===0){
        return {};
    }else{
        let obj={}
        for (let i = 0; i <string.length ; i++) {
            obj[string[i]]=string[i].match(/\w/g)
            }
        return obj;
    }

}

console.log(count("abaaaaac"))
console.log("abaaaaac".match(/\w/))