//cookie policy
let acc = document.querySelector(".span-acc");
let noAcc = document.querySelector(".span-non-acc");
let divCookie = document.querySelector(".div-cookie");
let n = 0;

noAcc.addEventListener('click', function() {
    divCookie.style.display = "none";
    console.log(n++);
});

acc.addEventListener('click', function() {
    divCookie.style.display = "none";
    console.log(n++);
});