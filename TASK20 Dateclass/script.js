

let dobinput=prompt("Enter the date of Birth (YYYY-MM-DD)");
let dob =new Date(dobinput);
let today=new Date();
let differ=today-dob;
let totaldays=Math.floor(differ/(1000*60*60*24));
let ageYears=Math.floor(totaldays/365);
let ageDays=totaldays%365;
console.log(`your ${ageYears} years and ${ageDays} days old`);
alert(`your are ${ageYears}
    years and ${ageDays} days old` );