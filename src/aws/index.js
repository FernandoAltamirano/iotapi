const db = require("../database");
const aws = require("aws-sdk");
const { awsConfig } = require("../config");

aws.config.update(awsConfig);

const docClient = new aws.DynamoDB.DocumentClient();

const fetchOneByKey = () => {
  let params = {
    TableName: "ESP8266_DB_1",
    Key: { serial: 12345 },
  };

  docClient.get(params, async (err, data) => {
    if (err) console.log(err);
    else {
      console.log(JSON.stringify(data, null, 2));

      /*const row = await db.query("SELECT id, status, environment_id FROM  devices WHERE serial_number = ?", [serial])

            console.log(row)

            let result

            if (row[0].status = 0) {

                const newAttention = {
                    environment_id: row[0].environment_id,
                    temperature: "fd",
                    CO: "",
                    smoke: "",
                }

                result = await db.query("INSERT INTO attentions SET ?", [newAttention])
            }
            else{
                if (temperature == 0.0,  CO == 0.0, smoke == 0) {

                    await db.query("UPDATE devices SET status = 0 WHERE serial_number = ?", [serial])
                }
                else
                    await db.query("UPDATE attentions SET temperature = ?, CO = ?, smoke = ? WHERE id = ?", [temperature, CO, smoke,result.insertId])
            }*/
    }
  });
};

fetchOneByKey();

module.exports = fetchOneByKey;
