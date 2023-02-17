module.exports = {
    suma (req, res) {
        let v1 = Number(req.params.valor1);
        let v2 = Number(req.params.valor2);
        if (v1 >= 0 && v2 >= 0) {
            res.json({
                resultado: v1 + v2
            })
        } else {
            res.json({
                error: 'No se aceptan valores que contengan numeros negativos.'
            });
        }
    }
}