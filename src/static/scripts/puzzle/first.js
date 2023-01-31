const start = document.getElementById("start")
const questions = document.getElementsByClassName("question")
const results = ["Una gatita que le gusta el mambo", "Mauricio"]

start.onclick = () => {
    questions[0].style.display = "block"
}

/**
 * 
 * @param { string } input 
 * @param { string } correct 
 */

function isCorrect(input, correct) {
    input = input.toLowerCase()
    return input == correct
}

function verify(index, )

for(let i = 0; i < questions.length; i++) {
    questions[i].onclick = () => verify(i, )
}