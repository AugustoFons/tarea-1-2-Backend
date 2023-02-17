module.exports = {
    saludo (req, res) {
        let nombre = req.params.name;
        let apellido = req.params.last_name;
        res.send(`Hola ${nombre} ${apellido}`)
    }
}