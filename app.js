<<<<<<< HEAD
//require("dotenv").config();
const Express = require ("express");
const app = Express();
const dbConnection = require("./db");

//app.use(require('./middleware/headers'));

const controllers =require("./controllers");
 app.use(Express.json());
 app.use("/user", controllers.userController);

//app.use(require("./middleware/validate-jwt"));
//app.use("/journal", controllers.journalController);

 dbConnection.authenticate()
 .then(() => dbConnection.sync())
 .then(() => {
    app.listen(3000, () => {
        console.log(`[Server]: App is listening on 3000.`);
    });
 })
 .catch((err) => {
     console.log(`[Server]: Server crashed. Error = ${err}`);
 });
=======
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
    app.listen(3000, () => {
      console.log(`[Server]: App is listening on 3000.`);
    });
  })
  .catch((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
  });
>>>>>>> 01e2513d3a7bc80990d006ad63bd15206af5e3e6
