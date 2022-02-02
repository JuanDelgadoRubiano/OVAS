const { Router } = require('express');
const router = Router();

const multipart = require('connect-multiparty');  

// Ovas controller
const {findOvasController, createOvaController, registerCalificationOvaController, getCalificationOvaController, saveFileOva} = require('../controllers/ovas.controller')


const multipartMiddleware = multipart({  
    uploadDir: 'src/uploads'
});


// Routes of ovas
router.get('/ovas', findOvasController);
router.post('/ova', createOvaController);
router.post('/calificationOva', registerCalificationOvaController);
router.get('/calification/:id', getCalificationOvaController)

router.post('/ovaArchivo', multipartMiddleware, saveFileOva)

router.get('/health', (req, res) => {
    res.status(200).send()
});

module.exports = router;