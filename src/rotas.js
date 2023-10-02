const express = require('express');
const { listarPacientes, cadastarPaciente} = require('./controladores/pacientes');

const rotas = express();

rotas.get('/pacientes', listarPacientes);
rotas.post('/pacientes', cadastarPaciente);

module.exports = {
    rotas
};