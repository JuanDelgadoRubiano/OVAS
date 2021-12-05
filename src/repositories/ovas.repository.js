const { pool } = require('../database/database.config');

module.exports = {

    async findOvas(){
        return  pool.query('SELECT * FROM ovas');
    },

    async createOva(body){
        return  pool.query('INSERT INTO ovas (binario, metadata_id, name_file, has_test) VALUES ($1, $2 ,$3 ,$4) RETURNING id', [body.binary, body.metaData_id, body.name_file, body.has_test]);
    },

    async createMetaData(body){
        return pool.query('INSERT INTO metadata (autor_ova, name_ova, category_ova, calification) VALUES ($1, $2 ,$3 ,$4) RETURNING id', [body.autor_ova, body.name_ova, body.category_ova, body.calification])
    }

    
}