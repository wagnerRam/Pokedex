
const offset = 0
const limit = 13
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}limit=${limit}`

// Quango o fetch der certo chame essa função para interpretar a resposta 
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody)) // sempre o que vai para o segundo then é o retorno do primeiro 
    .catch((error) => console.error(error))// quando der errado


    // independente do resultado
    // .finally(function () {
    //     console.log('Requisição concluida')
    // })