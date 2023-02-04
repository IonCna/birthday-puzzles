const start = document.getElementById("start")
const questions = document.getElementsByClassName("question")
const results = ["", "", "", "", "", ""]

start.onclick = () => {
    questions[0].style.display = "block"
}