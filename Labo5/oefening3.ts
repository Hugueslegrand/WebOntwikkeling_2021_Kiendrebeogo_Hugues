interface Calculation {(a:number, b:number):number}

const printCalculationResult = (a:number,b:number,calcul:Calculation)=>{
    if (calcul==add) {
         add(a,b);
    }
     
}

const mult = (a:number,b:number)=> a*b;
const add = (a:number,b:number)=> a+b;

printCalculationResult(2,4,add);