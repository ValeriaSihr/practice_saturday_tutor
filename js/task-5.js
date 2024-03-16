/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const btn = document.querySelector("#swapButton")
const inputRight = document.querySelector("#rightSwapInput")
const inputLeft = document.querySelector("#leftSwapInput")
btn.addEventListener("click", clickBnd)
function clickBnd() {
    const valueRight = inputRight.value;
    const valueLeft = inputLeft.value;
    inputLeft.value = valueRight;
    inputRight.value = valueLeft;
   
}
clickBnd()