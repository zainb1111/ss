let num = document.querySelectorAll(".num")
let calc= document.getElementById("calc")
let input= document.getElementById("input")

num.forEach(item => {
    item.addEventListener("click", ()=>{
    
        value = input.value =  item.innerText  
        
 calc.innerText+= eval(value+item.innerText)
  console.log(); 
    })
 
});