const start = document.getElementById("start")
const questions = document.getElementsByClassName("question")

const results = [ "periferico", "pompompurin", "cuemanco", "soda stereo", "papá", "metrobus" ]

start.onclick = () => {
    questions[0].style.display = "block"
}

const verify_btn = document.getElementsByClassName("verify")

for(let i = 0; i < verify_btn.length; i++) {
    verify_btn[i].onclick = () => {
        const input = document.getElementsByClassName("result")

        const error = document.getElementsByClassName("error")
        const bars = document.getElementsByClassName("bars")

        bars[i].onclick = () => {
            error[i].style.display = "none"
        }

        if (i + 1 == 6) {
            const result = input[i].value
            if (result == results[i]) {
                fetch("http://26.89.117.213:3000/api/status?index=0&complete=true", {
                    method: "PUT"
                })
                .then(() => {
                    window.location.href = "http://26.89.117.213:3000"
                });
            } else error[i].style.display = "block"
        } else {
            const result = input[i].value

            if (result == results[i]) {
                questions[i + 1].style.display = "block"
            } else error[i].style.display = "block"
        }
    }
}