/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const box = document.querySelector("#box");
const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");

decrease.addEventListener("click", handleClickDecrease);
increase.addEventListener("click", handleClickIncrease);

let width = parseInt(getComputedStyle(box).width);
let height = parseInt(getComputedStyle(box).height);

function handleClickDecrease() {
    width -= 10;
    height -= 10;    

    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
}

function handleClickIncrease() {
    width += 10;
    height += 10;

    
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
}