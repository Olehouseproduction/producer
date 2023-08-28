let iconMenu = document.querySelector(".menu__icon");
if(iconMenu){
    let menu = document.querySelector(".menu");
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle("active");
        menu.classList.toggle("active");
    })
}

