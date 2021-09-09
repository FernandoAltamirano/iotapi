const db = require("../../database")
const { isLoggedIn } = require("../middlewares/helpers")
const { Router } = require("express")
const router = Router()

//ESTA RUTA ME MUESTRA TODOS LOS DISTRITOS EN LOS CUALES LA ALARMA ESTA ENCENDIDA POR LO TANTO HAY UN INCENDIO
router.get("/", isLoggedIn, async (req, res) => {

  const QUERY = "SELECT e.id AS environment_id, b.district, b.urbanization, b.street FROM attentions AS a JOIN environments AS e ON a.environment_id = e.id JOIN buildings AS b ON e.building_id = b.id JOIN devices AS d ON d.environment_id = e.id WHERE d.status = 1"

  const rows = await db.query(QUERY)

  res.json({result: rows})
})

//ESTA RUTA ME MUESTRA EL DISTRIO QUE INGRESO EN EL CUAL LA ALARMA ESTA ENCENDIDA POR LO TANTO HAY UN INCENDIO
router.get("/:distrito", isLoggedIn, async (req, res) => {
  
  const { distrito } = req.params

  const QUERY = "SELECT e.id AS environment_id, b.district, b.urbanization, b.street FROM attentions AS a JOIN environments AS e ON a.environment_id = e.id JOIN buildings AS b ON e.building_id = b.id JOIN devices AS d ON d.environment_id = e.id WHERE d.status = 1 AND b.district = ?"

  const rows = await db.query(QUERY, [distrito])

  res.json({result: rows})
})

//ESTA RUTA LE ESTOY PASANDO COMO PARAMETRO EL ID DEL AMBIENTE
router.get("/details/:id", isLoggedIn, async (req, res) => {

  const { id } = req.params

  const QUERY = "SELECT b.district, b.urbanization, b.street, b.lot, e.department_number, e.floor_number, e.name, DATE_FORMAT(a.attention_date, '%W %d de %m de %Y') AS attention_date, DATE_FORMAT(a.attention_date, '%H:%i:%s %p') AS attention_hour, a.smoke, a.temperature, a.CO FROM attentions AS a JOIN environments AS e ON a.environment_id = e.id JOIN buildings AS b ON e.building_id = b.id JOIN devices AS d ON d.environment_id = e.id WHERE d.status = 1 AND e.id = ?"

  const rows = await db.query(QUERY, [id])

  res.json({result: rows})
})

module.exports = router
