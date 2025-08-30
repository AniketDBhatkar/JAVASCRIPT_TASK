// ===================================
// Add function Using Try,catch,Finally
// ===================================

try {
    let num1 = 50
    let num2 = 20
    let sum = num1 + num2
    if(sum < 50){
        throw ("sum is less than 50")
    }
    console.log(sum)
}catch(e){
    console.log("got an error " + e)
}