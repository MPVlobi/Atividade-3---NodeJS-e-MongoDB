const mongoose = require('mongoose');

const disciplinaSchema = new mongoose.Schema({
    codigo: String,
    nome: String,
    professor: String
});

const alunosSchema = new mongoose.Schema({
    ra: String,
    nome: String,
    disciplinas: [disciplinaSchema]
});

module.exports = mongoose.model('Alunos', alunosSchema);