const colors = document.getElementsByClassName("part")
const start = document.getElementById("start")
const counterDOM = document.getElementById("counter")
const message = document.getElementById("message")
const repeat = document.getElementById("repeat")

const Length = 10
var isFirst = false, isSecond = false, isThird = false

const speed = 600
const timeON = 300

for (let i = 0; i < colors.length; i++) {
    const element = colors[i];

    element.onclick = () => {
        element.classList.toggle("pushed")

        setTimeout(() => {
            element.classList.toggle("pushed")
        }, 100)
    }
}

start.onclick = () => {
    init()
}

function randomize() {
    let arr= []
    for (let i = 0; i < Length; i++) {
        const num = Math.round(Math.random() * 3)
        arr.push(num)
    }

    return arr
}

/**
 * @param { number } index
 * @param { number[] } result 
 */

function play(index, result) {
    const hist = []
    let counter = 0

    for (let i = 0; i < colors.length; i++) {
        const element = colors[i];

        element.onclick = () => {
            element.classList.toggle("pushed")

            hist.push(i)
            while (counter < result.length) {
                if (result[counter] == hist[counter]) {
                    counter++

                    if(counter == result.length) {
                        switch (index) {
                            case 0:
                                isFirst = true
                                segunda()
                                break;
                            case 1:
                                isSecond = true
                                tercera()
                                break;
                            case 2:
                                isThird = true
                                end()
                                break;
                            default:
                                throw new Error("hiciste algo mal")
                        }
                    }

                    break
                } else {
                    colors[i].classList.toggle("off")
                    repeat.classList.toggle("hide")

                    counter = 0
                    break
                }
            }

            setTimeout(() => {
                element.classList.toggle("pushed")
            }, 100)
        }
    }
}

function end() {
    console.clear()
    console.log("end")

    message.innerHTML = "LO HAS HECHO BIEN!!. Este mensaje se auto destruirá en, -..."
    message.style.display = "block"

    
    let counter = 10

    counterDOM.innerHTML = counter
    counterDOM.style.display = "block"

    setInterval(() => {
        counter--
        counterDOM.innerHTML = counter

        if(counter < 1) {
            fetch("/api/status?index=2&complete=true", { method: "PUT" })
            window.location.href = "/"
        }

    }, 1000)
}

async function tercera() {
    console.clear()
    const third = randomize()
    console.log(third)

    let counter = 0

    const isFinish = await showMessage("ESTA ES LA ÚLTIMA, ESPERO ESTÉS LISTA..")

    if(isFinish) {
        const id = setInterval(() => {
            const active = third[counter]
    
            colors[active].classList.toggle("active")
    
            const timer = setInterval(() => {
                colors[active].classList.toggle("active")
                clearInterval(timer)
            }, timeON)
    
            counter++
    
            if (counter >= Length) {
                clearInterval(id)
            }
        }, speed / 1.5)
    
        play(2, third)
    }
}

async function segunda() {
    console.clear()
    const second = randomize()
    console.log(second)

    let counter = 0

    const isFinish = await showMessage("SIGUE ASÍ, VAS MUY BIEN...")

    if(isFinish) {
        const id = setInterval(() => {
            const active = second[counter]
    
            colors[active].classList.toggle("active")
    
            const timer = setInterval(() => {
                colors[active].classList.toggle("active")
                clearInterval(timer)
            }, timeON)
    
            counter++
    
            if (counter >= Length) {
                clearInterval(id)
            }
        }, speed / 1.2)
    
        play(1, second)
    }
}

async function init() {
    console.clear()
    const first = randomize()
    console.log(first)

    let counter = 0

    const isFinish = await showMessage("Prepárate porque el primero inicia en...")

    if(isFinish) {
        const id = setInterval(() => {
            const active = first[counter]
    
            colors[active].classList.toggle("active")
    
            const timer = setInterval(() => {
                colors[active].classList.toggle("active")
                clearInterval(timer)
            }, timeON)
    
            counter++
    
            if (counter >= Length) {
                clearInterval(id)
            }
        }, speed)
    
        play(0, first)
    }
}

repeat.onclick = () => {
    repeat.classList.toggle("hide")
    const colors = document.querySelectorAll(".off")

    colors.forEach((color) => {
        color.classList.toggle("off")
    })

    if(isFirst == false) return init()
    else if(isSecond == false ) return segunda()
    else if(isThird == false) return tercera()
    else end()
}

function showMessage(text) {
    let counter = 5
    message.style.display = "block"
    message.innerHTML = text

    counterDOM.style.display = "block"
    counterDOM.innerHTML = counter

    const id = setInterval(() => {
        counter--
        counterDOM.innerHTML = counter

        if (counter <= 0) {
            counterDOM.style.display = "none"
            message.style.display = "none"
            clearInterval(id)
        }
    }, 1000)

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(true)
        }, counter * 1000)
    })
}