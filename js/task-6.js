/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const passInput = document.querySelector("#passwordInput");
const passBtn = document.querySelector("#passwordButton");

passBtn.addEventListener("click", handleClick);

function handleClick() {
    const typeInput = passInput.type;
    if (typeInput === "text") {
        passInput.type = "password";
        passBtn.textContent = "Розкрити";
    } else {
        passInput.type = "text";
        passBtn.textContent = "Приховати";
    }
}
