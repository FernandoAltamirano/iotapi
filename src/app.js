const config = require("./config")
const app = require("./api")


async function startServer() {

  await app.listen(config.PORT, () => {
    console.log(`Server on running on http://localhost:${config.PORT}`);

  }).on("error", err => {
      console.log(err)
  })
}

//RUNNING SERVER
startServer()
