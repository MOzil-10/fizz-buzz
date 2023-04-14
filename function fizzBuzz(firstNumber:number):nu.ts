function fizzBuzz(firstNumber:number){

 if(firstNumber%3==0 && firstNumber%5==0){

   console.log("Fizz-Buzz!");
 }   

if(firstNumber%3==0){
    console.log("Fizz");
}

if(firstNumber%5==0){
    console.log("Bizz");
}

else{
    console.log(firstNumber);
}

}

console.log(fizzBuzz(7));