var router = require('express').Router()
var perretes = require('./perretes')
var dragonetes = require('./dragonetes')
router.use('/perretes', perretes)
router.use('/dragonetes', dragonetes)

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router