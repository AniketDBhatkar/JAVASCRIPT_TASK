
// let base=2;
// let exponent=8,power=1;

// for(i=1;i<=exponent;i++)
// {
//     power=power*base;
// }

// console.log("Power:"+power);


function power_fun(base,exponent)
{

let power=1;

for(i=1;i<=exponent;i++)
{
    power=power*base;
}

console.log("Power:"+power);

return power;

}

let power_base=Number(prompt("Enter the Base Number : "));

let power_exponent=Number(prompt("Enter the Exponent Number :"));

power_fun(power_base,power_exponent)