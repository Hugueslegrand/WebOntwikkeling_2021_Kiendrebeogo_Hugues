const multiplyText = (amount: number, text: string)=>{
let tijdelijkeString: string = " ";
if (text=="") { 
    
    text= "default ";
    
    for (let index: number = 0; index < amount; index++) {
        tijdelijkeString += text;
        
    }
}else
    for (let index: number = 0; index < amount; index++) {
        tijdelijkeString += text;
        
    }
     return tijdelijkeString;
}

let result: string = multiplyText(3,"");
    console.log("result is"+result)