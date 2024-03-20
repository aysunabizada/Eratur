const bars = document.querySelector(".fa-bars-staggered");
const xmark = document.querySelector(".fa-xmark");
const hiddenbars = document.querySelector(".hiddenbars");
const logo = document.querySelector(".logo");
const main = document.querySelector("main");

let flag = false;
// burger menyunu acir
function OpenBars() {
    if (flag == false) {
        hiddenbars.style.display = "block";
        bars.style.display = "none";
        logo.style.display = "none";
        main.style.display = "none";
        xmark.style.display = "block";
        flag = true;
    } else {
        hiddenbars.style.display = "none";
        bars.style.display = "block";
        logo.style.display = "block";
        main.style.display = "block";
        xmark.style.display = "none";
        flag = false;
    }
}
