var router = require('express').Router()
const dragonetes = new Map();

dragonetes.set("1", "Drogon");
dragonetes.set("2", "Vhagar");
dragonetes.set("3", "Arrax");
dragonetes.set("4", "Caraxes");


router.get('/:id', function(req, res) {
var nombre = dragonetes.get(req.params.id);

if (nombre==null)
{ res.json({ message: "No existe el dragonete con id " + req.params.id });
}
  else {res.json({ name: nombre })
}})

router.get('/', function(req, res) {
    array = Array.from(dragonetes, ([id, name]) => ({ id, name }));
    console.log(array);
    res.json(array)
})

router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir un dragonete' })
})

router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el dragonete con id ' + req.params.id })
})

router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar el dragonete con id ' + req.params.id})
})


module.exports = router