const input = document.querySelector(".input");
const text = document.querySelector(".text");
console.dir(text);

input.addEventListener("input", () => {
    let idInterval = setInterval(() => {
        text.innerHTML = input.value;
        clearTimeout(idInterval);
    }, 350);
});