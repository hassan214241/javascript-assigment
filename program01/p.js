// convert Temperature celsius to farhenheit
function getTemperature(c){
    const result = 9/5 * c + 32 ;
    console.log("convert temp celsius to fahrenheit: " +  c + " is " +  result);
    return result;
}

getTemperature(96);
getTemperature(24);
getTemperature(34);