const btnStart = document.getElementById("start")

btnStart.onclick = () => {
    const songs = document.querySelectorAll(".song")
    songs[0].style.display = "block"
}

const btnValidar = document.getElementById("validar")

function verify(answers, correct) {
    const { value } = correct
    return value == answers
}

btnValidar.onclick = () => {
    const words = document.querySelectorAll(".word")
    const first_song = [
        "infinito",
        "inmensidad",
        "negro",
        "muera",
        "canela",
        "arcoíris",
        "perfume",
        "tristeza",
        "amor",
        "tu",
        "tu",
        "tu",
        "Y nadie más que tu"
    ]

    for(let i =0; i < words.length; i++) {
        const isCorrect = verify(words[i], first_song[i])
        console.log(isCorrect)
    }

    const isCorrect = verify(words, first_song)
    console.log(isCorrect)
}

const second_song = []
