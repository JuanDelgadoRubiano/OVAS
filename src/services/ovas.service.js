const {findOvas, createOva, createMetaData } = require('../repositories/ovas.repository')


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

    
module.exports = {
    getOvasService,
    createOvaService,
    createOvaMetaDataService

}