const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Rotas
const alunoRouter = require('./routes/alunoRouter');
app.use('/alunos', alunoRouter);

// Rota raiz (opcional, pode manter)
app.get("/", (req, res) => {
    res.json({ mensagem: "API de Alunos funcionando 🚀" });
});

// Conexão com MongoDB
mongoose.connect(process.env.DB_CONEXAO)
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao MongoDB');
            console.log('Servidor rodando em http://localhost:3000');
        });
    })
    .catch((erro) => {
        console.log('Erro ao conectar no MongoDB:', erro);
    });