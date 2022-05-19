function flipCoin(guess){
let result=Math.floor(Math.random()*2)+1;
let message= document.getElementById("message");

if(result==1){
    if(guess=="heads"){
        message.innerHTML="You guessed heads. <br> The coin flips and comes up heads! Good guess! ";
    }
    else{
        message.innerHTML="You guessed tails. <br> The coin flips and comes up heads! Try again! ";


    }
}
else{
    if(guess=="tails"){
        message.innerHTML="You guessed tails. <br> The coin flips and comes up tails! Good guess! ";
    }
    else{
        message.innerHTML="You guessed heads. <br> The coin flips and comes up tails!Try again! ";

    }
}
}