const {getOvasService, createOvaService, createOvaMetaDataService, registerCalificationOvaService, getOvaCalificationService, getOvaMetadataService, getOvaMetadataByIdService} = require('../services/ovas.service')
const fs = require('fs');
const { updateRouteOva } = require('../repositories/ovas.repository');

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
  let archivos=req.file
    var test = archivos.originalname.split('ova')
    var test2 = test[1].split('.')
    await updateRouteOva(archivos.originalname, test2[0])
    fs.rename(archivos.path, `src/public/${archivos.originalname}`, () => { 
        console.log("\nFile Renamed!\n"); 
    }); 

    res.json({mensaje:"Archivo subido"});
}


const saveJsonOva = async (req, res) => {
   let archivos=req.file;
    fs.rename(archivos.path, `src/public/${archivos.originalname}`, () => { 
        console.log("\nFile Renamed!\n"); 
    }); 
    res.json({mensaje:"Archivo subido"});
}


const getMetaData = async (req, res) => {
    try{
        const response = await getOvaMetadataService()
        res.json(response.rows)
    }catch(error){
        res.status(500).json(error.message)            
    }
}


const getMetaDataById = async (req, res) => {
    try{
        const response = await getOvaMetadataByIdService(req.params.id)
        res.json(response[0])
    }catch(error){
        res.status(500).json(error.message)            
    }
}

module.exports = {
    findOvasController,
    createOvaController,
    registerCalificationOvaController,
    getCalificationOvaController,
    saveFileOva,
    getMetaData,
    saveJsonOva,
    getMetaDataById
}