function getCount(str) {
   let vowelsCount = 0;
   for (let i=0;i<str.length;i++){

  
    switch(str[i]){
        case "a":
         case "e":
         case "i":
         case "o":
         case "u":
       vowelsCount ++;
        break;
        
    }
   }
    // enter your majic here
    
    return vowelsCount;
  }


