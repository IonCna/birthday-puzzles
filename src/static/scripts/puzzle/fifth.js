class Piano {
    hist = []

    constructor() {
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i]
            const audio = new Audio(`/audios/${i}.wav`)

            element.onclick = () => {
                audio.currentTime = 0
                this.hist.push(i)
                audio.play()

                console.log(this.hist)
            }
        }
    }

    verify(song) {
        for (let i = 0; i < song.length; i++) {
            const note = song[i];
        }
    }
}

const notes = document.getElementsByClassName("note")
const piano = new Piano(notes)

piano.verify([13, 12, 10, 8, 6, 8, 10, 13, 12, 10, 8, 6, 5])