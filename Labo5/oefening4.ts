interface CalculateAge{
    (leeftijd:number,omzettingsVerhouding:number):number
}

const calculateAnimalAge=(leeftijd:number,omzettingsVerhouding:number)=> leeftijd * omzettingsVerhouding; 


const calculateDogAge=(leeftijd:number,omzettingsVerhouding:number,calc:CalculateAge)=>
console.log(calculateAnimalAge(leeftijd,omzettingsVerhouding));


calculateDogAge(7,7,calculateAnimalAge);

const calculateAnimalAgeFunctional = (omzettingsVerhouding:number):CalculateAge=>{
    return (age) => { return calculateAnimalAge(age, omzettingsVerhouding); }
}

const calculateHamsterAge = calculateAnimalAgeFunctional(26);
console.log(calculateHamsterAge(.5,7));