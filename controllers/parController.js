module.exports = {
    par (req, res) {
        let testNumero = req.query.numero;
        if (testNumero % 2 === 0) {
            res.send('autorizado');
        } else {
            res.send('no autorizado')
        }
    }
}