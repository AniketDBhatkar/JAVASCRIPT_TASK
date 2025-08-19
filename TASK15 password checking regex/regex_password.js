

let password_check=/ ^(?=.[0-12])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{12,}$/

let user_password=prompt("Enter the Password !");

if(password_check.test(user_password))
    console.log("Strong password"+user_password);
else
    console.log("Weak Password, try again!"+user_password)


