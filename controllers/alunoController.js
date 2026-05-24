const Aluno = require('../models/alunoModel');

// GET /alunos
exports.getAll = async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.json(alunos);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// GET /alunos/:ra
exports.getByRa = async (req, res) => {
    try {
        const aluno = await Aluno.findOne({ ra: req.params.ra });

        if (!aluno) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado' });
        }

        res.json(aluno);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// GET /alunos/:ra/disciplinas
exports.getDisciplinas = async (req, res) => {
    try {
        const aluno = await Aluno.findOne({ ra: req.params.ra });

        if (!aluno) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado' });
        }

        res.json(aluno.disciplinas);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// PUT /alunos/:ra
exports.update = async (req, res) => {
    try {
        const aluno = await Aluno.findOneAndUpdate(
            { ra: req.params.ra },
            req.body,
            { new: true }
        );

        if (!aluno) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado' });
        }

        res.json(aluno);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};