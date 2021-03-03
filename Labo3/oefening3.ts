const multiplyText = (amount: number, text: string, appendix?: string)=>{
let tijdelijkeString: string = "";
if (text=="") { 
    
    text= "default";
    
    for (let index: number = 0; index < amount; index++) {
        tijdelijkeString += text+" ";
        
    }
}else
    for (let index: number = 0; index < amount; index++) {
        tijdelijkeString += text+" ";
        
    }
    if (appendix==null) {
        return tijdelijkeString;
    }
     return tijdelijkeString + appendix;
}

let result: string = multiplyText(3,"Hugues");
    console.log("result is \""+result)