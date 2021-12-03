require("dotenv").config();
const express = require("express");
const app = express();
const dbConnection = require('./db')

const controllers = require("./controllers");

app.use(express.json())
app.use(require("./middleware/headers"));
app.use("/chore", controllers.choreController);
app.use('/user', controllers.userController)

dbConnection
  .authenticate()
  .then(() => dbConnection.sync())
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`[Server]: App is listening on 3000.`);
    });
  })
  .catch((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
  });
