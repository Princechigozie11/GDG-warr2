let btnEl = document.getElementById("btn-el");
let element = document.body;

btnEl.addEventListener("click", () => {
  element.style.backgroundColor = "black";
});
btnEl.removeEventListener("click", () => {
  element.style.backgroundColor = "white";
});
