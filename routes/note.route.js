const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');
router.get('/', noteController.findAll);
router.post('/', noteController.create);
router.get('/:id', noteController.findOne);
router.put('/:id', noteController.update);
router.delete('/:id', noteController.delete);
module.exports = router;