module.exports = {
    nombre(req, res) {
        res.json({
            nombre: req.body.nombre,
            status: "success"
        })
    }
}