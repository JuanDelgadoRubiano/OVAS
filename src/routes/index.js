const { Router } = require('express');
const router = Router();

const multipart = require('connect-multiparty');  
const multer = require('multer');

// Ovas controller
const {findOvasController, createOvaController, registerCalificationOvaController, getCalificationOvaController, saveFileOva, getMetaData, saveJsonOva, getMetaDataById} = require('../controllers/ovas.controller')


const multipartMiddleware = multipart({  
    uploadDir: 'src/public'
});

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/public')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

const middleware  = multer({ storage: storage })
const middleware2  = multer({ storage: storage })

const multipartMiddleware2 = multipart({
    uploadDir: 'src/public'
})





// Routes of ovas
router.get('/ovas', findOvasController);
router.post('/ova', createOvaController);
router.post('/calificationOva', registerCalificationOvaController);
router.get('/calification/:id', getCalificationOvaController)
router.get('/metaData', getMetaData)
router.get('/metaDataById/:id', getMetaDataById)

router.post('/ovaArchivo', middleware.single('uploads[]'),  saveFileOva)
router.post('/ovaJson', middleware2.single('uploads[]'), saveJsonOva)

router.get('/health', (req, res) => {
    res.status(200).send()
});

module.exports = router;