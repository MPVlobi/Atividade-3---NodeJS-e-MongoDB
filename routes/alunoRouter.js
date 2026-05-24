const express = require('express');
const router = express.Router();

const alunoController = require('../controllers/alunoController');

// GET /alunos
router.get('/', alunoController.getAll);

// GET /alunos/:ra
router.get('/:ra', alunoController.getByRa);

// GET /alunos/:ra/disciplinas
router.get('/:ra/disciplinas', alunoController.getDisciplinas);

// PUT /alunos/:ra
router.put('/:ra', alunoController.update);

module.exports = router;