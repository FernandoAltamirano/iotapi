const db = require("../../database")
const { isLoggedIn } = require("../middlewares/helpers");
const { Router } = require("express")
const router = Router()

//ESTA RUTA MUESTRA TODOS LOS DISPOSITIVOS DEL USUARIO, PASANDO COMO PARAMETRO EL ID DEL USUARIO
router.get("/:id", isLoggedIn, async (req, res) => {
  
  const { id } = req.params

  const QUERY = "SELECT d.serial_number, d.instalation_date, b.district, b.urbanization, e.department_number, e.name, d.status FROM devices AS d JOIN environments AS e ON d.environment_id = e.id JOIN buildings AS b ON b.id = e.building_id WHERE d.user_id = ?"

  const rows = await db.query(QUERY, [id])

  res.json({result: rows})
})

module.exports = router
