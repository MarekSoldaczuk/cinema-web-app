let s = "";
let count = 1;
let seatsRowCol = 10;

for(let i=0; i<count; i++){
    let mounth = Math.floor(Math.random()*4 + 1)
    let day = Math.floor(Math.random()*28 + 1)
    if(day<10) day="0"+day
    let hour = Math.floor(Math.random()*13 + 10)
    let min = Math.floor(Math.random()*4) * 15
    if(min<10) min="00"
    s = s + "{\n";
    s = s + "\"movieId\": \"\",\n";
    s = s + `\"date\": "2020-0${mounth}-${day}T${hour}:${min}:00.000Z",\n`;
    s = s + "\"room\": " + (Math.floor(Math.random() * 15 + 1)) + ",\n";
    s = s + "\"seats\": [\n";
    for(let j=1; j<=seatsRowCol; j++){
        for(let k=1; k<=seatsRowCol; k++){
            s = s + "{ \"row\": " + j + ",";
            s = s + "\"column\": " + k + ",";
            s = s + "\"taken\": " + (Math.random()>0.7 ? true : false) + "}";
            if(j*k != seatsRowCol*seatsRowCol) s = s + ","
        }
    }
    s = s + "]\n}\n";
}
console.log(s);