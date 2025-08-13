

let num = 121; // change this number to test
let temp = num;
let reverse = 0;

do {
    let digit = temp % 10;            // get last digit
    reverse = reverse * 10 + digit;   // build reverse number
    temp = Math.floor(temp / 10);     // remove last digit
} while (temp > 0);

if (num === reverse) {
    console.log(num + " is a Palindrome");
} else {
    console.log(num + " is NOT a Palindrome");
}
