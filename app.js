// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    //convertimos el valor a Yenes
    let valueInYen= valueInDollar*123.7;
    //retornamos el valor
    return Math.round(valueInYen);
}

const fromYentoPound = function(valueInYen){
    //convertimos el valor a Yenes
    let valueInPound = valueInYen * 0.0062;
    //retornamos el valor
    return Math.round(valueInPound);
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYentoPound}