const { Router } = require('express');
const router = Router();

const multipart = require('connect-multiparty');  

// Ovas controller
const {findOvasController, createOvaController, registerCalificationOvaController, getCalificationOvaController, saveFileOva, getMetaData, saveJsonOva} = require('../controllers/ovas.controller')


const multipartMiddleware = multipart({  
    uploadDir: 'src/../../../PWA/Tucucha/aqui'
});

const multipartMiddleware2 = multipart({
    uploadDir: 'src/public'
})


// Routes of ovas
router.get('/ovas', findOvasController);
router.post('/ova', createOvaController);
router.post('/calificationOva', registerCalificationOvaController);
router.get('/calification/:id', getCalificationOvaController)
router.get('/metaData', getMetaData)

router.post('/ovaArchivo', multipartMiddleware, saveFileOva)
router.post('/ovaJson',multipartMiddleware2, saveJsonOva)

router.get('/health', (req, res) => {
    res.status(200).send()
});

module.exports = router;