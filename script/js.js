let message = document.querySelector(".message");
let santa = document.querySelector(".santaimg");
let burger = document.querySelector(".icon-menu")
let menu = document.querySelector(".header__menu ")
let body = document.querySelector("body")
let cross = document.querySelector(".contract__close")
let contract = document.querySelector(".contract")

burger.addEventListener("click", function () {
   burger.classList.toggle("active");
   menu.classList.toggle("active");

})
santa.addEventListener("click", function () {
   message.classList.toggle("active");
})
cross.addEventListener("click", function () {
   contract.classList.add("hidden");
})