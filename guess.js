let var1 = prompt("Please enter your name:");
let k=Math.floor(Math.random() * (var1+ 1));
let var2 = prompt("Please enter your name:");
function harsha(var2){
    if(var2==k){
        console.log("your guess is correct");
    }
    else{
        var3=prompt("Please enter your name:");
        harsha(var3)
    }
}