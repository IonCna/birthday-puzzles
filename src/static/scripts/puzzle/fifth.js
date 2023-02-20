const notes = document.getElementsByClassName("note")
const reset = document.getElementById("reset")

var hist = []

reset.onclick = () => {
    hist = []

    console.clear()
    console.log("history was reset")
}

var first = false,
    second = false

function verify() {
    function checkFirst() {
        console.log("checking first")
        const result = [13, 12, 10, 8, 6, 8, 10, 13, 12, 10, 8, 6, 5]

        if(hist.length >= result.length) {
            for (let i = 0; i < result.length; i++) {
                const element = result[i];

                if(element == hist[i]) {
                    first = true
                    hist = []
                }
            }
        } else first = false
    }

    function checkSecond() {
        console.log("checking second")
        const result = [8, 8, 5, 6, 8, 10, 8, 6, 5, 3, 5, 5, 1, 3, 5, 6, 5, 3, 1, 0]
        
        if(hist.length >= result.length) {
            for (let i = 0; i < result.length; i++) {
                const element = result[i];

                if(element == hist[i]) {
                    second = true
                    hist = []
                }
            }
        } else second = false

        if (second) {
            fetch("http://26.89.117.213:3000/api/status?index=4&complete=true")
            window.location.href = "http://26.89.117.213:3000"
        }
    }

    if(first == false) return checkFirst()
    if (second == false) return checkSecond()
}

for (let i = 0; i < notes.length; i++) {
    const element = notes[i];
    const audio = new Audio(`/audios/${i}.wav`)
    
    element.onclick = () => {
        audio.currentTime = 0
        audio.play()

        hist.push(i)

        verify()
    }
}
