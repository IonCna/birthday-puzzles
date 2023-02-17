const btnStart = document.getElementById("start")

btnStart.onclick = () => {
    const songs = document.querySelectorAll(".song")
    songs[0].style.display = "block"
}

function verify(input, expected) {
    return input == expected
}

const btnValidate = document.getElementsByClassName("validar")

for (let i = 0; i < btnValidate.length; i++) {
    const button = btnValidate[i]

    button.onclick = () => {

    }
}

