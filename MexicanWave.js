




function wave(str){
    let arr=[];
    for (let i = 0; i <str.length ; i++) {
        if(str[i]!==' '){
            arr.push(str.slice([0],[i]).toLowerCase()+str.slice([i],[i+1]).toUpperCase()+str.slice([i+1],[str.length ]).toLowerCase())
        }

    }
    return arr
}

console.log(wave("samurai"))