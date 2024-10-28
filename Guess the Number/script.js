let form = document.querySelector("form")
let resultcon = document.querySelector(".resultcon")
let pervguess = document.querySelector("#wrongguess")
let chanceLeft = document.querySelector("#chancesleft")
let reset = document.querySelector("#reset")
let button = document.querySelector("button")
let num = Math.floor(Math.random()*100 + 1)
let chance = 10
let pervguessarr = []

reset.addEventListener("click",
    ()=>{
      window.location.reload();  
    
    
    
    })
     
  
  
     
form.addEventListener(
    "submit",(e)=>{
e.preventDefault();
  const guess = parseInt(document.querySelector("#guessednum").value);
 if (isNaN(guess)) {
      resultcon.innerHTML = "Enter Valid Number"
  }else{if (guess === num) {
    resultcon.innerHTML = "You Guesssd.... Corect "
    form.reset();
}else{
    resultcon.innerHTML = "Guess Again ....."
    pervguessarr.push(guess)
    pervguess.innerHTML = pervguessarr
    chance--;
    chanceLeft.innerHTML = chance
    form.reset()
    if(chance == 0){
        resultcon.innerHTML = `You lose no chance left<br> The number is ${num}`
        button.disabled = true ;
        
    }
    
}
         

}

})
