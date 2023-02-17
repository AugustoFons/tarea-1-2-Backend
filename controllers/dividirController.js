module.exports = {
    dividir (req, res) {
        let num1= Number(req.params.divisor)
        let num2= Number(req.params.dividendo)
        if (num1 != 0) {
            res.json({
                resultado: num2/num1
            })
        } else {
            res.json({
                error: "no se puede dividir por cero"
            })
        }
    }
}