const actualTemp = 30;
const desiredTemp = 85;
console.log(desiredTemp);

if (actualTemp < desiredTemp){
    console.log("run heat");
} else if (actualTemp > desiredTemp){
    console.log ("Run A/C");
}else{
    console.log ("standby");
}