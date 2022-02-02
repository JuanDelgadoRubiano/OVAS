const {findOvas, createOva, createMetaData, registerCalificationOva, getCalificationOva, findMetaData } = require('../repositories/ovas.repository')


    /**
     * Service to get all ovas
     * @returns json with ovas
     */
     const getOvasService = async () =>  {
        const response = await findOvas()
        return response
    }

    /**
     * service to create a new ova 
     * @param {*} body 
     * @returns 
     */
    const createOvaService = async (body) => {
        const response = await createOva(body)
        const data = body
        data.id = response.rows[0].id
        return data
    }

    /**
     * service to create the metadata of a new ova
     * @param {*} body 
     * @returns 
     */
    const createOvaMetaDataService = async (body) => {
        const response = await createMetaData(body)
        const data = body
        data.id = response.rows[0].id
        return data
    }

    /**
     * service to save the calification of an ova
     * @param {*} body 
     * @returns 
     */
    const registerCalificationOvaService = async (body) => {
        const response = await registerCalificationOva(body)
        const data = body
        data.calification = response.rows[0].calification
        return data
    }

    /**
     * service to get the calification of an ova 
     * @param {*} body 
     * @returns 
     */
    const getOvaCalificationService = async (ovaId) => {
        const response = await getCalificationOva(ovaId)
        let sumatory = 0
        response.rows.forEach(calification => {
            sumatory += calification.calification
        });
        const averageCalification = sumatory / response.rows.length
        return averageCalification
    }

    /**
     * Service to get all ova metaData
     * @returns json with ovas
     */
    const getOvaMetadataService = async () =>  {
        const response = await findMetaData()
        return response
    }

    
module.exports = {
    getOvasService,
    createOvaService,
    createOvaMetaDataService,
    registerCalificationOvaService,
    getOvaCalificationService,
    getOvaMetadataService

}