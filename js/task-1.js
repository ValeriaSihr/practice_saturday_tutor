// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту

const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

function getFrutits(fruits) {
    return fruits.map((fruit) => {
        return {
            ...fruit,
            price: fruit.price * 0.8,
            id: Math.random() * 1000,
        };
    });
}
console.log(getFrutits(fruits));
