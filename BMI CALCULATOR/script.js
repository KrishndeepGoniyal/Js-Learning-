let reset = document.querySelector("#reset")
let resultcon = document.querySelector(".resultcon")
let form = document.querySelector("form")
form.addEventListener("submit",
   (e)=>{
   
   
       e.preventDefault()
     let height =   parseInt(document.querySelector("#height").value)
     let weight = parseInt(document.querySelector("#weight").value)
 
 
 
 if(isNaN(height)|| isNaN(weight) ||height <= 0||weight <= 0 ){
         resultcon.innerText = "Enter a valid Value"
     }else{let result = Math.round(weight/((height/100)**2))
   resultcon.innerText ="BMI Is : " + result
  }
 })




reset.addEventListener("click",()=>
    {form.reset();
    resultcon.innerText=""}
    )   
   
