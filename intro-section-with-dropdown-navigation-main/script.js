const navLinks= document.querySelectorAll("nav-links li");
const mobileLinks= document.querySelectorAll("mobile-links li");
const menuBtn= document .querySelector(".mobile-menu-btn");
const mobileMenu= document .querySelector(".mobile-menu");
const overFlow= document .querySelector(".overflow");

menuBtn.addEventListener("click", () =>{
const icon = document.querySelector(".mobile-menu-btn img");
menuBtn.classList.toggle("active-btn");
mobileMenu.classList.toggle("active-menu");
if(menuBtn.classList. contains("active-btn")){
    icon.src=(".mobile-menu-btn img")
} else{
    icon.src = "./images/icon-menu.svg";
}


}
)