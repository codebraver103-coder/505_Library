let cart=document.querySelectorAll(".cart");
cart.forEach(cart=>{
  cart.addEventListener('click',function(){
  alert('This book has been added to your cart!')
})})
let gift=document.querySelectorAll(".gift");
gift.forEach(gift=>{
  gift.addEventListener('click',function(){
    x=prompt("Number of cards:")
    y=prompt('From:')
    z=prompt('To:')
    alert(x+" gift cards have been added to your cart")
    alert('From:'+y)
    alert('To:'+z)
    let k=5;
    alert('Price:'+k*x+'$')

})})
window.addEventListener('load',function(){
            document.getElementById('preloader').style.display="none";
})