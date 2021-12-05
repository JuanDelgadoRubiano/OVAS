const {getOvasService, createOvaService, createOvaMetaDataService} = require('../services/ovas.service')


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
module.exports = {
    findOvasController,
    createOvaController
}