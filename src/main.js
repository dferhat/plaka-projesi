const icon = document.querySelector("i");
const nav = document.querySelector(".nav");

icon.addEventListener("click", () => {

    if(nav.classList.contains("down")){
        nav.classList.remove("down");
        icon.classList.add("yeni");       
    }else{
        nav.classList.add("down");
    }

    
});

icon.addEventListener("click", () => {
    icon.classList.add("down-icon")
})