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
<<<<<<< HEAD
      console.log(`[Server]: App is listening`);
=======
      console.log(`[Server]: App is listening.`);
>>>>>>> d1864a369ec3c114041bfbde3acdbb02ce1e3615
    });
  })
  .catch((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
  });
