import { StatementModel } from "../models/statement_model.js";

//function to store data in the database
export const addStatement = async (req,res) => {

    try {
        console.log('request', req.body)
    const addData = await StatementModel.create(req.body);
       res.status(200).send(addData);
    
    } catch (error) {
       console.log(error) 
    }
}; 

export const getStatement = async (req,res) => {

    try {
        console.log('request',req.body)
        const allData = await StatementModel.find();
        res.status(200).send(allData);
    } catch (error) {
        console.log(error)
        
    }
}

export const newStatement = async (req,res) => {
   
    try {
        console.log('request',req.body)
        const oneData = await StatementModel.findById(req.params.id);
        res.status(200).send(oneData);
    } catch (error) {
        console.log(error)
        
    }
}

export const updateStatement = async (req,res) => {

    try {
        const status = req.body.caseStatus
        const updateStatus= await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
        res.status(200).send(updateStatus)
    } catch (error) {
        error
        
    }
}

export const deleteStatement = async (req,res) => {
    const deleteId = req.body
    await StatementModel.findByIdAndDelete(req.params.id)
    res.status(200).send('statement deleted')
}