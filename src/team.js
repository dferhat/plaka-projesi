const left = document.querySelector(".first");
const right = document.querySelector(".second");

left.addEventListener("mouseenter", () => {
    left.classList.add("mouseenter-left");
});

left.addEventListener("mouseleave", () => {
    left.classList.remove("mouseenter-left");
});

right.addEventListener("mouseenter", () => {
    right.classList.add("mouseenter-right");
});

right.addEventListener("mouseleave", () => {
    right.classList.remove("mouseenter-right");
});