var openMenu = document.getElementById("open-menu");
var closeMenu = document.querySelector("#close-menu")
var navigation = document.querySelector("header nav");

let width = window.innerWidth;
let height = window.innerHeight;

if (width < 1444) {
} else if (width > 1444) {
    navigation.classList.remove("hidden");
}
 
document.body.onresize = function() {

    if (document.body.clientWidth < 1444) {

        closeMenu.classList.add("hidden");
        navigation.classList.add("hidden");

    } else if (document.body.clientWidth > 1444) {

        closeMenu.classList.add("hidden")
        navigation.classList.remove("hidden");

    }

}

openMenu.onclick = ()=> {

    closeMenu.classList.remove("hidden");
    navigation.classList.remove("hidden");
    
}

closeMenu.onclick = ()=> {

    closeMenu.classList.add("hidden")
    navigation.classList.add("hidden");

}