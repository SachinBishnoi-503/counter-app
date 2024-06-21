const added = document.querySelector("#added");
const addone = document.querySelector("#addone");
let p = 0;
addone.addEventListener("click", function () {
    added.innerHTML = +added.innerHTML + 1;
});