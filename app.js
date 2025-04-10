// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// Objeto con las tasas de conversión
const oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
};

const fromDollarToYen = (dollar) => {
    const euro = dollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY;
};

const fromYenToPound = (yen) => {
    const euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
};



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };