
// Arithimatic operators

// Addition of Two Numbers
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;

console.log(sum);


// Take varaible data1 and data2

let data1=20;
let data2=30;
console.log(data1+data2);


//Substration

console.log(data1-data2)


//mutliplication

console.log(data1*data2)

//Division

console.log(data1/data2)

//Modolus

console.log(data1%data2)


let x = 10;  // x = 10

//  assignment Operators

x += 5;  // x = x + 5 → x = 15
x -= 3;  // x = x - 3 → x = 12
x *= 2;  // x = x * 2 → x = 24
x /= 4;  // x = x / 4 → x = 6
x %= 4; 


//Comparision Operators

let a= 10;
let b = "10";
let c = 5;

console.log(a == b);   // true  (value equal, type ignored)
console.log(a === b);  // false (different type)
console.log(a != b);   // false (value same)
console.log(a !== b);  // true  (different type)
console.log(a > c);    // true
console.log(a < c);    // false
console.log(a >= 10);  // true
console.log(a <= 5);   // false


//Ternary Operator (?)

//condition ? value_if_true : value_if_false;

let agee = 20;

// Using ternary operator

let status = (agee >= 18) ? "Adult" : "Minor";

console.log(status); 

// Output: Adult


//  post Increment Operator

let a11 = 5;
console.log(a11++); // Output: 5 (first prints, then increments)
console.log(a11);   // Output: 6 (increment applied)


// pre- Increment

let b1 = 5;
console.log(++b1); // Output: 6 (increments first, then prints)
console.log(b);   // Output: 6

//Logicla Operators

//AND(&&)

let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true
console.log(age >= 18 && false); // false


//OR(||)

let isWeekend = false;
let isHoliday = true;

console.log(isWeekend || isHoliday); // true
console.log(false || false); // false

// NOT (!)

let raining = false;

console.log(!raining); // true
console.log(!(5 > 3)); // false
