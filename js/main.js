$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:30,
        loop:true,
        items:5,
    });
});

const modalBtn = document.querySelector(".modal-btn")
const closeBtn = document.querySelector(".close-modal")
const modalWrapper = document.querySelector(".modal-wrapper")

modalBtn.addEventListener("click",() => {
    modalWrapper.classList.add("show-modal")
})

closeBtn.addEventListener("click",() => {
    modalWrapper.classList.remove("show-modal")
})