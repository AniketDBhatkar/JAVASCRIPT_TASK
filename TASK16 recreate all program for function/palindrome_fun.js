

function palindrome_fun(number)
{
    let temp=number;
    let reverse=0,lastdigit=0;

    while(number>0)
    {
        lastdigit=number%10;
        reverse=reverse*10+lastdigit;
        number=parseInt(number/10);
    }

    if(temp==reverse)
        console.log("palindrome number :"+reverse);

    else
        console.log("its not palindrome number :"+reverse);

    return reverse;
}

let palindrome_num=Number(prompt("Enter the Numner :"));

palindrome_fun(palindrome_num)