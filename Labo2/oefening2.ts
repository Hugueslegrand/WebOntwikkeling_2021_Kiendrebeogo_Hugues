enum rainbowColor { red, orange, yellow, green, blue, indigo, violet
}

let inTeVullenArray : Array<string> =[];

for (let i in rainbowColor){
    inTeVullenArray[i]=rainbowColor[i];
}
console.log(inTeVullenArray);

while (inTeVullenArray.length!=0){
    console.log(inTeVullenArray.pop())
}