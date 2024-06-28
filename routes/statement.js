import { Router } from "express";
import { addStatement, getStatement, newStatement, updateStatement } from "../controllers/statement_controllers.js";

//Creating a Router

const statementRouter = Router()

//Define routes
// statementRouter.get('/statement', (req,res) => {
//     res.json ('All statements');
// });

// statementRouter.post('/statement', (req,res) => {
//     res.json ('Post a statement');
// });
statementRouter.get('/statement', getStatement)

statementRouter.post('/statement', addStatement)

statementRouter.get('/statement/:id', newStatement)

statementRouter.patch('/statement/:id', updateStatement)

statementRouter.delete('/statement/:id',) 

//Export route
export default statementRouter;