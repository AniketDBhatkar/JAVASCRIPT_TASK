
function factrioal_fun(number)
{
    let fact=1;
    for(let i=1;i<=number;i++)
    {
        fact=fact*i;
    }
    console.log("Factorail :"+number+":"+fact);
    return fact;
}

let fact_num=Number(prompt("enter the number :"));

factrioal_fun(fact_num)