// inicio

const dev = document.getElementById("dev")
const maths = document.getElementById("maths")

const mathDOM = document.getElementById("mathDOM")
const devDOM = document.getElementById("devDOM")

// iniciar parte 1

dev.onclick = () => {
    mathDOM.style.display = "none"
    devDOM.style.display = "block"

    startPartDev()
}

// iniciar parte 2

maths.onclick = () => {
    devDOM.style.display = "none"
    mathDOM.style.display = "block"

    startPartMath()
}

// parte 1

var first = false
var second = false
var third = false

function check() {
    if (first && second && third) {
        console.log(`
        LO LOGRASTE?!
        Lograste acabar el primer ejercicio, estoy orgulloso de ti <3
        espero y no hayas hecho trampas ehh... 😠

        como sea aquí está la primera parte de el código, ahora toca la segunda 😈
        `)

        console.error("[SYSTEM]: El sistema se autodestruirá en...")

        let counter = 10

        const id = setInterval(() => {
            console.error("${counter}...")
            counter--

            if(counter < 1) {
                clearInterval(id)

                console.clear()
                console.log("Código: W94")
                console.warn("consejo: escribe el código en otro lado <3")
            }
        }, 1000)

        first = false
        second = false
        third = false
    }
}

function correct() {
    console.warn("LO LOGRASTE :D")
}

function error() {
    console.error("TU FUNCIÓN NO PASÓ :(")
}

function verify(cb, index) {
    const strings = ["te", "quiero", "mucho", "amo", "queso", "ferrocarril"]

    function reverse(string) {
        return String(string).split("").reverse().join().replaceAll(",", "")
    }

    const array = [3, 6, 6, 2, 5, 8, 9, 0, 2]

    function multiply(array) {
        return array.map(item => item * 2)
    }

    const ages = [13, 18, 2, 35, 12, 99, 7]

    function isOlder(age) {
        return age >= 18
    }

    switch (index) {
        case 1:
            const isFirstValid = strings.map((item) => {
                const user_str = cb(item)
                const correct_str = reverse(item)

                return user_str == correct_str
            })

            for (let i = 0; i < isFirstValid.length; i++) {
                const element = isFirstValid[i];

                if (element !== true) {
                    first = false
                    break
                } else first = true
            }

            if (first != false) correct()
            else error()

            check()

            break;
        case 2:
            const user_arr = cb(array)
            const correct_arr = multiply(array)

            for (let i = 0; i < correct_arr.length; i++) {
                if (user_arr[i] != correct_arr[i]) {
                    second = false
                    break
                } else second = true
            }

            if (second !== false) correct()
            else error()

            check()

            break;
        case 3:
            const esMayor = ages.map((item) => {
                const user_ans = cb(item)
                const correct_ans = isOlder(item)

                return user_ans == correct_ans
            })

            for (let i = 0; i < esMayor.length; i++) {
                const element = esMayor[i];

                if (element !== true) third = false
                else third = true
            }

            if (third !== false) correct()
            else error()

            check()

            break;
        default:
            console.error("Eso no oye!")
            break;
    }
}

function startPartDev() {
    console.clear()
    console.log(`
    Oag 🐸
    Esta es la parte de programación, necesito que hagas algunas funciones 😈
    puedes usar tu visual studio para hacer la función, hazla como gustes
    al final necesitarás verificar si la función funciona

    1.- haz una función que como parámetro reciba un string y que la función te regrese el string invertido
        Ejemplo: yo pongo "queso" resultado "oseuq"

    2.- haz una función que como parámetro reciba un array y devuelva cada número multiplicado x2
        Ejemplo: input [2, 6, 8, 12] output [4, 12, 16, 24]
         
    3.- haz una función que determine si la persona es mayor de edad o menor de edad
        la función debe recibir la edad que se va a comparar
        Ejemplo: input 13 output es menor de edad

    cuando las tengas en la consola pon verify con tu función y cual reto es
    Ejemplo verify(my_function, 3)

    si quieres hacer las funciones aquí puedes hacer esto

    verify(() => {
        // tu código
    }, 1)
    `)
}

// parte 2

const results = [53, 42, 43]

const getMathsResults = document.getElementById("getMathsResults")

getMathsResults.onclick = () => {
    const results = document.querySelectorAll(".verify")
    const ans = document.getElementById(".ans")

    for (let i = 0; i < ans.length; i++) {
        const element = array[i];
    }
}

function startPartMath() {
    console.clear()
}
