const { COEFFICIENT } = require('./constants');

const Coefficients = {
    [COEFFICIENT.electricity]: 0.220,
    [COEFFICIENT.naturalGas]:  0.320,
    [COEFFICIENT.fuelOil]:     0.320,
    [COEFFICIENT.LPG]:         0.110,
    [COEFFICIENT.water]:       0.780,
};

const CalculatingService = {
    [COEFFICIENT.electricity]: value => value * Coefficients[COEFFICIENT.electricity],
    [COEFFICIENT.naturalGas]:  value => value * Coefficients[COEFFICIENT.naturalGas],
    [COEFFICIENT.fuelOil]:     value => value * Coefficients[COEFFICIENT.fuelOil],
    [COEFFICIENT.LPG]:         value => value * Coefficients[COEFFICIENT.LPG],
    [COEFFICIENT.water]:       value => value * Coefficients[COEFFICIENT.water] * 365,
};


class Calculator {
    calculate(type, value) {
        return CalculatingService[type](value);
    }
}

module.exports = Calculator;