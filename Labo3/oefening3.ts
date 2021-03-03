const multiplyText = (amount: number, text: string)=>{
let tijdelijkeString: string = " ";
    for (let index: number = 0; index < amount; index++) {
        tijdelijkeString += text;
        
    }
     return tijdelijkeString;
}

let result: string = multiplyText(3,"flower ");
    console.log("result is"+result)