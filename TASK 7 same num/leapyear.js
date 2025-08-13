
let num=Number(prompt("Enter a Number"))

if(num%4===0&&num%100!=0)||(num%400===0)
    console.log("Leap Year"+num)

else
    console.log("Not leap year"+num)