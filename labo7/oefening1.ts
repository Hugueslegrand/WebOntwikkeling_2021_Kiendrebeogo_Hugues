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
        setTimeout(() => {
            resolve(a/b);
        },2000)
    });
}

slowSum(1,5).then((result) => { console.log("1 + 5 = "+result)}
);

