const calculator = {
    read(a, b) {
        this.value1 = a;
        this.value2 = b;
    },
    sum() {
        return this.value1 + this.value2;
    },
    multiply() {
        return this.value1 * this.value2;
    }
};
console.log(calculator.read(2, 3));
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.multiply());




// Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи та зберігає їх
// як властивості об'єкта
// sum() повертає суму збережених значень
// multiply() перемножує збережені значення та повертає результат