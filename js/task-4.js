
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

const input = document.querySelector("#alertInput");
const btn = document.querySelector("#alertButton");

btn.addEventListener("click", handleClick);

function handleClick(event) {
    const res = input.value;
    console.log(res);
}