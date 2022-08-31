let calc=document.getElementById("calc")
let product = document.querySelectorAll(".product")
let total = document.getElementById("totalprice")
calc.addEventListener("click" ,  () => {
total= 0
product.forEach ( item => {

  let price= Number( item.getElementsByClassName("price")[0].innerHTML)
  let quantity= Number( item.getElementsByClassName("input-quantity")[0].value)

total=total+ (price*quantity)


});
totalprice.innerText = total
}) 