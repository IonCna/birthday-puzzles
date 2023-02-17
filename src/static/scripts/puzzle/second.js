const btnStart = document.getElementById("start")
const songs = document.querySelectorAll(".song")
const bars = document.getElementsByClassName("bars")
const errors = document.getElementsByClassName("error-label")

btnStart.onclick = () => {
    songs[0].style.display = "block"
}

const verifyBTN = document.getElementsByClassName("validar")

const correct_answers = {
    first: [
        "infinito",
        "inmensidad",
        "negro",
        "muera",
        "canela",
        "arcoiris",
        "perfume",
        "tristeza",
        "amor",
        "tu",
        "tu",
        "tu"
    ],
    second: [
        "bonito",
        "estrellas",
        "marte",
        "solitario",
        "tu",
        "yo",
        "mierda",
        "punzantes",
        "constelaciones",
        "vacio",
        "mano",
        "comencemos",
        "ti",
        "mi",
        "callado",
        "tu",
        "yo"
    ]
}

function verify(ans) {
    const answers = document.getElementsByClassName(ans)
    const corrects = correct_answers[ans]

    if (ans == "first") return true

    let status = true

    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        const { value } = answer

        const correct = corrects[i]

        if (correct != value) {
            status = false
            break
        }
    }

    return status
}

for (let i = 0; i < verifyBTN.length; i++) {
    const button = verifyBTN[i];

    bars[i].onclick = () => {
        errors[i].style.display = "none"
    }

    button.onclick = () => {
        switch (i) {
            case 0:
                const firstCorrect = verify("first")

                if (firstCorrect) songs[i + 1].style.display = "block"
                else errors[i].style.display = "block"

                break;
            case 1:
                const secondCorrect = verify("second")

                if (secondCorrect) {
                    fetch("http://26.89.117.213:3000/api/status?index=1&complete=true", 
                    { method: "PUT" })
                    .then(() => {
                        window.location.href = "http://26.89.117.213:3000/menu"
                    })
                } else errors[i].style.display = "block"

                break;
            default:
                alert("no hay mas partes")
                break;
        }
    }
}
