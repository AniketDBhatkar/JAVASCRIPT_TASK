
function leapyear_fun(year)
{
    if((year%4==0&&year%100!=0)||(year%400==0))
   {
    console.log("its Leap Year :"+year);
   }

   else
   {
    console.log("Its not leap Year :"+year);
   }
       
   return year ;
    
}

let leapyear_check=Number(prompt("Enter the Year you want to check this is year year or Not !"))

leapyear_fun(leapyear_check)