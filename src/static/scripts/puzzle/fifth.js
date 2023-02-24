const notes = document.getElementsByClassName("note")
const start = document.getElementById("start")
const reset = document.getElementById("reset")
const error = document.getElementById("error")

var isFirst = false,
    isSecond = false

class Piano {
    hist = []
    constructor(result) {
        console.log(result)
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i]
            const audio = new Audio(`/audios/${i}.wav`)

            element.onclick = () => {
                audio.currentTime = 0
                audio.play()

                if (!result) return

                this.hist.push(i)

                console.log(this.hist, result)
                console.log(this.hist[i], result[i])

                if (this.hist[i] != result[i]) {
                    error.style.display = "block"
                    reset.style.display = "block"
                }
            }
        }
    }
}

new Piano()

start.onclick = first

function showMessage({ title, song, win }) {
    const titleDOM = document.getElementById("puzzle")
    const songDOM = document.getElementById("content")

    titleDOM.style.display = "block"
    songDOM.style.display = "block"

    titleDOM.innerHTML = title
    songDOM.innerHTML = song

    if (win) {
        win.style.display = "block"

        const winDOM = document.getElementById("finish")
        winDOM.innerHTML = win
    }
}

// [13, 12, 10, 8, 6, 8, 10, 13, 12, 10, 8, 6, 5]

function first() {
    showMessage({
        title: "Intenta tocar la siguiente canción",
        song: "[ C B A G F G A C B A G F E ]",
        win: null
    })

    const result = [13, 12, 10, 8, 6, 8, 10, 13, 12, 10, 8, 6, 5]
    const piano = new Piano(result)

    reset.onclick = () => {
        error.style.display = "none"
        reset.style.display = "none"

        piano.hist = []
    }
}

