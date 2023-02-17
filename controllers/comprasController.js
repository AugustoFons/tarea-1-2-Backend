module.exports = {
    compras (req, res) {
        if (req.query.semana == 1){
            res.json({
                semana: `Compra de la semana n° ${req.query.semana}`,
                productos: 'Vino, Frutas, Galletas, Jabon, Shampoo.'
            })
        } else if (req.query.semana == 2) {
            res.json({
                semana: `Compra de la semana n° ${req.query.semana}`,
                productos: 'Agua, Yogur, Arroz, Servilletas, Vasos.'
            })
        } else {
            res.send('la compra de esta semana no fue programada')
        }

    }
}