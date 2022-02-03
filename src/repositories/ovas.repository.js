const { pool } = require('../database/database.config');

module.exports = {

    async findOvas(){
        return  pool.query('SELECT * FROM ovas');
    },

    async createOva(body){
        return  pool.query('INSERT INTO ovas (binario, metadata_id, name_file, has_test) VALUES ($1, $2 ,$3 ,$4) RETURNING id', 
        [body.binary, body.metaData_id, body.name_file, body.has_test]);
    },

    async createMetaData(body){
        return pool.query('INSERT INTO metadata (autor_ova, name_ova, category_ova, subject_ova, description_ova, languaje_ova, publisher_ova,'+ 
        'source_ova, relation_ova, coverage_ova, rights_ova, date_publication_ova, format_ova) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id', 
        [body.autor_ova, body.name_ova, body.category_ova, body.subject_ova, body.description_ova, body.languaje_ova, body.publisher_ova, body.source_ova, body.relation_ova, 
        body.coverage_ova, body.rights_ova, body.date_publication_ova, body.format_ova])
    },

    async registerCalificationOva(body){
        return pool.query('INSERT INTO ovascalification (id_ova, calification) VALUES ($1, $2) RETURNING calification', [body.id_ova, body.calification])
    },

    async getCalificationOva(ovaId){
        return pool.query('SELECT calification FROM ovascalification WHERE id_ova = $1', [ovaId])
    },

    async findMetaData(){
        return pool.query('SELECT * FROM metaData')
    },

    async findMetaDataById(id){
        return pool.query('SELECT * FROM metaData where id = $1', [id])
    },

    async updateRouteOva(name, id){
        return pool.query('UPDATE metaData set ovaroute = $1 where id = $2', [name, id])
    }

    
}