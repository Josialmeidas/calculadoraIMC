const { pacientes } = require('../bancodedados');

let idPaciente = 1;

const listarPacientes = (req, res) => {
    return res.status(200).json(pacientes);
}

const cadastarPaciente = (req, res) => {
    const { nome, peso, altura, email } = req.body;
    if (!nome || !peso || !altura || !email) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
    }
    const pacienteDuplicado = pacientes.find(paciente => paciente.email === email);
    if (pacienteDuplicado) {
        return res.status(400).json({ mensagem: 'Paciente já cadastrado!'});
    }
    const IMC = peso / (altura ** 2);
    const novoPaciente = {
        idPaciente: idPaciente,
        nome,
        peso: Number(peso),
        altura: Number(altura),
        email,
        IMC: Number(IMC.toFixed(2))
    }
    pacientes.push(novoPaciente);
    idPaciente++;
    return res.status(201).json(novoPaciente);
}
module.exports = {
    listarPacientes,
    cadastarPaciente
}
