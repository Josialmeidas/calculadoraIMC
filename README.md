# Cadastro de pacientes
## Nesta API REST é possível realizar o cadastro de pacientes, incluindo o cálculo de IMC e realizar uma listagem de todos os pacientes cadastrados.

API:

Estará disponível no endereço http://localhost:3000/pacientes
Segue o padrão REST, contemplando os métodos (verbos) GET e POST
Os códigos de status (status codes) a serem retornados deverão seguir a especificação de cada método.

### Cada objeto de novo paciente terá:

- idPaciente (número)
- nome (string)
- peso (número)
- altura (número)
- email (string)
- IMC (número)

## Passo a passo:

1 - Iniciar um novo projeto com npm
No terminal, digite:
``` npm init -y ```

2 - Instalando o Express
Express - ``` npm install express ```

3 - Instalando o Nodemon
Nodemon - ``` npm install -D nodemon ```

