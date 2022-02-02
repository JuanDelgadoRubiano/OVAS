const {getOvasService, createOvaService, createOvaMetaDataService, registerCalificationOvaService, getOvaCalificationService} = require('../services/ovas.service')
const fs = require('fs');

/**
 * Controller to find all ovas
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
 const findOvasController = async (req, res) => {
    try{
        const response = await getOvasService()
        res.json(response.rows)
    }catch(error){
        res.status(500).json(error.message)            
    }
}

/**
 * Controller to create a new ova
 * @param {*} req 
 * @param {*} res 
 */
const createOvaController = async (req, res) => {
    try{   
        const bodyOva = req.body.ova
        const bodyMetaData = req.body.metaData
        const responseMetaData = await createOvaMetaDataService(bodyMetaData)
        bodyOva.metadata_id = responseMetaData.id
        const responseOva = await createOvaService(bodyOva)
        res.json({
            message: "Ova Created Succesfully",
            dataOva: responseOva,
            metaData: responseMetaData
        })
    }catch(error){
        res.status(500).json(error.message)    
    }
}

/**
 * Controller to register the calification of an ova
 * @param {*} req 
 * @param {*} res 
 */
 const registerCalificationOvaController = async (req, res) => {
    try{   
        const calification = req.body
        const response = await registerCalificationOvaService(calification)
        res.json({
            message: "Ova calificated Succesfully",
            calification: response
        })
    }catch(error){
        res.status(500).json(error.message)    
    }
}

/**
 * Controller to get the average calification of an ova
 * @param {*} req 
 * @param {*} res 
 */
 const getCalificationOvaController = async (req, res) => {
    try{
        const ovaId = req.params.id   
        const calification = await getOvaCalificationService(ovaId)
        res.json({
            message: "Calification obtained succesfully",
            calification: calification
        })
    }catch(error){
        res.status(500).json(error.message)    
    }
}

const saveFileOva = async (req, res) => {
    let archivos=req.files.uploads;
       for (let i=0; i<archivos.length;++i){
           fs.rename(archivos[i].path, `src/uploads/${archivos[i].originalFilename}.js`, () => { 
               console.log("\nFile Renamed!\n"); 
           }); 
       }    
       res.json({mensaje:"Archivo subido"});
}

module.exports = {
    findOvasController,
    createOvaController,
    registerCalificationOvaController,
    getCalificationOvaController,
    saveFileOva
}