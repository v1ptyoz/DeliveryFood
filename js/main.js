const shoppingCart = document.querySelector("#shopping-cart");
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")


shoppingCart.addEventListener("click", function(e) {
  e.preventDefault;
  modal.classList.add("is-open")
})

close.addEventListener("click", function(e) {
  e.preventDefault;
  modal.classList.remove("is-open")
})