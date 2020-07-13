const calculate = (req, res) => {
    if (req.body.items && req.body.items.length) {
        const calculations = req.body.items.map(item => {
            return ({
                type: item.type,
                value: req.calculator.calculate(item.type, item.value)
            });
        });

        return res.json({
            success: true,
            calculations,
        });
    }

    return res.json({ success: false, message: 'Wrong data!' });
}


module.exports = {
    calculate,
}