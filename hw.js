https://github.com/tomthedon/hw8.git

let question = [];

async function getData() {
let response = await axios.get(
    "https://dog.ceo/api/breeds/image/random"
)
}

console.log(response.data.results);
console.log(response.data.results[0].question)
console.log(response.data.results[0].correct_answer)
console.log(response.data.results[0].incorrect_answers)
compareAnswer = response.data.results[0].question;

questiontext.innerHtml = response.data.results[0].question
