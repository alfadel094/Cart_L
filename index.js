var myProducts = document.querySelectorAll("ul li h3");
var myCart = document.getElementById("cart");
var totalPrice_b = document.getElementById("t_price")
var allPrice_D = document.getElementById("t_price_display");
var number_Produckt = document.getElementsByClassName("number_Produckt");
let nummer_d = document.getElementById("nummer");

var display_korb = document.getElementById("display_korb");


let Pruduckts = [];


 var totalPrice = 0;
 
myProducts.forEach(function (item)
{
    item.onclick = function(){
    //    myCart.innerHTML += item.textContent ;
   myCart.innerHTML += `<p>${item.textContent}</p>`

Pruduckts.push(item.textContent)
console.log(Pruduckts)
    myCart.style.display = "none";
    //    Pruduckts.push(item.textContent)

       
       number_Produckt= Pruduckts.length;
     
     
        nummer_d.innerHTML = number_Produckt
       
 
       console.log(number_Produckt) 
     
        totalPrice += +(item.getAttribute("price"));
         console.log(totalPrice)
        
    }
 
})
totalPrice_b.addEventListener("click" , function(){
    allPrice_D.innerHTML =totalPrice; 
})

display_korb.addEventListener("click",function(){
    myCart.style.display = "block";

    
    })

    nummer_d.addEventListener("click",function(){
        myCart.style.display = "block";
    
        
        })