import express from "express";
import statementRouter from "./routes/statement.js";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";

//Creating routes
const app = express();
app.use(express.json());
app.use(statementRouter);

 //Listening for incoming messages
app.listen(4000, () => {
    console.log('App listening on port 4000');
});



dbConnection();





