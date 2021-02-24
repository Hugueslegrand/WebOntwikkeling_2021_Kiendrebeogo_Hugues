let getallen: Array<number> = [];

for (let i = 0; i<=100;){
   getallen[i]=i+100;
   while(getallen[i]<=200){
    console.log(getallen[i]);
    i++;
}

}

 for (let index = 0; index <=100; index++) {
    getallen[index]=index+100;
    if (getallen[index]%3==0) {
         console.log(getallen[index]);
    }  
 }