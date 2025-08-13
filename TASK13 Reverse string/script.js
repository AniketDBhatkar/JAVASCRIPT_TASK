
let str=prompt("Enter a string you want to Reverse")

let reversestr=""

for(let i=str.length-1;i>=0;i--)
{
    reversestr=reversestr+str[i]
}

console.log("Reverse String",reversestr)