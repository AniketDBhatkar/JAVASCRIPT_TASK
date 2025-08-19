

function reverse_fun(number) 
{
    let reverse = 0;

    while (number > 0) 
        
    {
        let lastdigit = number % 10;
        reverse = reverse * 10 + lastdigit;
        number = parseInt(number / 10);
    }
    console.log("Reverse Number :" + reverse)
    return reverse;
}

let reverse_num = Number(prompt("Enter the Number :"))

reverse_fun(reverse_num)
