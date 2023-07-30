    let stars={
    n: 365.25,
    b: 2005,
    c: 58000,
    y: 2023
};
            
 let daysNames = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
      
let monthNames = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

var today = new Date();
var dayName = daysNames[today.getDay()];
var dd = daysNames[today.getDate()];
var mm = monthNames[today.getMonth()];
var yyyy = today.getFullYear();

today = dd + mm + stars.y;
stardate = stars.c + (1000*(stars.y-stars.b)) + ((1000/stars.n)*(mm + dd -1));
let stardated = stardate.toFixed(2);

document.getElementById("p1").innerHTML = stardated;
