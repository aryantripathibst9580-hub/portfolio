console.log("Welcome to My Portfolio!");

const heading = document.querySelector("header h1");

heading.addEventListener("mouseover", function () {
    heading.style.color = "yellow";
});

heading.addEventListener("mouseout", function () {
    heading.style.color = "white";
});