# Calculadora de IMC
## Nesta API REST é possível realizar o cadastro de pacientes, incluindo o cálculo de IMC e realizar uma listagem de todos os pacientes cadastrados.


***Disponível em:***  http://localhost:3000/pacientes


## Funcionalidades

### 1 - Listagem de todos os pacientes cadastrados, utilizando o método (verbo) ***GET***
Retorna um status code (200), com a lista de todos os pacientes cadastrados.

![](https://github.com/Josialmeidas/calculadoraIMC/blob/main/listagemPacientes.png)

### Caso não haja nenhum paciente cadastrado, retorna um array vazio: []

### 2 - Cadastro de novos pacientes, utilizando o método (verbo) ***POST***
Para cada novo paciente cadastrado, é gerado um número único de id e calculado seu Índice de Massa corporal, com base no peso e altura informados.

Para inclusão de novo cadastro, verifica-se se o paciente já está cadastrado com base no e-mail informando no *body* da requisição.
Caso seja fornecido o mesmo e-mail, é retornando o status code(400) com a seguinte mensagem:

```json
{
	"mensagem": "Paciente já cadastrado!"
}
```

Caso não haja duplicidade de cadastro, é retornando um objeto contendo as informações do novo paciente cadastrado, com status code (201):

![](https://github.com/Josialmeidas/calculadoraIMC/blob/main/cadastroPaciente.png)


O projeto ainda está passando por melhorias e adaptações, mas já se mostra eficaz ao que foi proposto!

### Para me encontrar: 

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joziane-almeida-dev/)

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Josialmeidas)


