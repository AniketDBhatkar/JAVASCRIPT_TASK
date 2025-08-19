
function add_fun(number1,number2)
{
  let add;

  add=number1+number2;
  console.log("Addition :"+add)
  return add;
}

let first_num=Number(prompt("Enter first number :"));
let second_num=Number(prompt("Enter first number :"));

add_fun(first_num,second_num)