const slowSum = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        },1000)
    });
}

const slowMult = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
        },1500)
    });
}
const slowDiv = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        if (a !=0 && b != 0) {
            setTimeout(() => {
            resolve(a/b);
            console.log(`(${a} / ${b}) = ${a/b}`)
        },2000)
        }else{
            console.log("You cannot divide by zero")
        }  
    });
}

slowDiv(0,4).then((result) => { console.log(result); });

slowSum(1,5).then((result) => { console.log("1 + 5 = "+result);}
);

slowDiv(6,3)

slowSum(1,5).then((result) => { 
    slowMult(result,2).then((result) => { console.log("(1 + 5) * 2 = "+result);});
    }
);

