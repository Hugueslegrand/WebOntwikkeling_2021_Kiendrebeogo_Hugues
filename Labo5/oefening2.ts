interface PrintToCons{
    (number:number):void;
}

const printToConsole = (number : number) : void => 
console.log(`the result is ${number}`); 

const sum = (getallenInArray:Array<number>,printGroter:PrintToCons,printKleiner:PrintToCons)=>{
    let som: number = 0;
    for (let index = 0; index < getallenInArray.length; index++) {
        som = som + getallenInArray[index]
    }
    if (som<10) {
        printKleiner(som)
    }else
    printGroter(som)
}

sum([1,2,3],printToConsole, number => console.log(`the result ${number} is a very small number`))
 