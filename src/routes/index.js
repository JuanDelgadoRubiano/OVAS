const { Router } = require('express');
const router = Router();

// Ovas controller
const {findOvasController, createOvaController} = require('../controllers/ovas.controller')

// Routes of ovas
router.get('/ovas', findOvasController);
router.post('/ova', createOvaController);

router.get('/health', (req, res) => {
    res.status(200).send()
});

module.exports = router;