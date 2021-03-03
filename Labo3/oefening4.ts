import * as chalk from "chalk";

enum Color{ Red, Green, Blue}

const multiplyTextColor = (amount: number, text: string, color: Color, appendix?: string)=>{
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
    switch(color){
    case Color.Red:
        
            if (appendix==null) {
             console.log(chalk.red((tijdelijkeString)));
            }
            console.log(chalk.red((tijdelijkeString + appendix)));

        break;
        case Color.Blue:
        
            if (appendix==null) {
             console.log(chalk.blue((tijdelijkeString)));
            }
            console.log(chalk.blue((tijdelijkeString + appendix)));

        break;
        case Color.Green:
        
            if (appendix==null) {
             console.log(chalk.green((tijdelijkeString)));
            }
            console.log(chalk.green((tijdelijkeString + appendix)));

        break;
    }
    
}
multiplyTextColor(3,"flower",Color.Red,"!");

    
    
        