const notes = document.getElementsByClassName("note")
const start = document.getElementById("start")
const reset = document.getElementById("reset")
const error = document.getElementById("error")

var isFirst = false,
    isSecond = false

class Piano {
    hist = []
    song = []
    status = ""

    get getStatus() {
        return this.status
    }

    /**
     * @param { string } status
     */

    set setStatus(status) {
        this.status = status
    }

    get getSong() {
        return this.song
    }

    /**
     * @param { number[] } song
     */

    set setSong(song) {
        this.song = song
    }

    constructor() {
        for (let i = 0; i < notes.length; i++) {
            const note = notes[i]
            const audio = new Audio(`/audios/${i}.wav`)

            note.onclick = () => {
                audio.currentTime = 0
                audio.play()

                if (this.song.length < 1) return

                this.registry(i)
            }
        }
    }

    /**
     * @param { number } index 
     */

    registry(index) {
        this.hist.push(index)
        console.log(this.hist)

        for (let i = 0; i < this.hist.length; i++) {
            const note = this.hist[i];

            if (note !== this.song[i]) {
                reset.style.display = "block"
                error.style.display = "block"

                isFirst = false

                break
            }

            if(this.hist.length == this.song.length) {
                this.verify()
                break
            }
        }
    }

    verify() {
        switch (this.status) {
            case "first":
                isFirst = true
                this.hist = []
                first()
                break;
            case "second":
                isSecond = true
                this.hist = []
                second()
            default:
                break;
        }
    }
}

const piano = new Piano()

start.onclick = first

reset.onclick = () => {
    error.style.display = "none"
    reset.style.display = "none"

    piano.hist = []
}

function showMessage({ title, song, win }) {
    const titleDOM = document.getElementById("puzzle")
    const songDOM = document.getElementById("content")

    titleDOM.style.display = "block"
    songDOM.style.display = "block"

    titleDOM.innerHTML = title
    songDOM.innerHTML = song

    if (win) {
        const winDOM = document.getElementById("finish")

        winDOM.style.display = "block"
        winDOM.innerHTML = win
    }
}

function first() {
    showMessage({
        title: "Intenta tocar la siguiente canción",
        song: "[ C B A G F G A C B A G F E ]",
        win: isFirst ? "BIEN HECHO!" : null
    })

    const result = [13, 12, 10, 8, 6, 8, 10, 13, 12, 10, 8, 6, 5]
    piano.setSong = result
    piano.setStatus = "first"

    if(isFirst) {
        let timer = 5

        const id = setInterval(() => {
            timer--

            showMessage({
                title: "la siguiente canción estará en",
                song: timer,
                win: ""
            })

            if (timer < 1) {
                clearInterval(id)
                second()
            }
        }, 1000)
    }
}

function second() {
    showMessage({
        title: "LA SIGUIENTE CANCIÓN ES...",
        song: "[ G G E F G A G F E D E E C D E F E D C B ]",
        win: isSecond ? "MUY BIEN!!!" : null
    })

    const result = [8, 8, 5, 6, 8, 10, 8, 6, 5, 3, 5, 5, 1, 3, 5, 6, 5, 3, 1, 0]
    piano.setSong = result
    piano.setStatus = "second"

    if(isSecond) {
        let timer = 5

        const id = setInterval(() => {
            timer--

            showMessage({
                title: "QUE?! COMO LO HICISTE?!",
                song: timer,
                win: "WOAAAAAAAAAAAAAAA"
            })

            if (timer < 1) {
                clearInterval(id)
                
                fetch("/api/status?index=4&complete=true", { method: "PUT" })
                window.location.href = "/"
            }
        }, 1000)
    }
}

