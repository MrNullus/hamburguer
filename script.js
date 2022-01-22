const navElement = document.getElementById("nav");
const btnElement = document.getElementById("btn");

btn.addEventListener("click", () => {
    navElement.classList.toggle("active");
    btnElement.classList.toggle("active");
});
