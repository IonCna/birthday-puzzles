const buttonDOM = document.getElementById("btnDOM")
const birthdayDOM = document.getElementById("birthdayDOM")
const bars = document.getElementById("bars")
const error = document.getElementById("error")

buttonDOM.onclick = async () => {
    const birthday = birthdayDOM.value

    if (!birthday) {
        return error.style.display = "block"
    }

    const date = new Date(birthday)

    fetch("http://26.89.117.213:3000/api/birthday", {
        method: "POST",
        body: JSON.stringify({ date: date }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    window.location.href = "http://26.89.117.213:3000"
}

bars.onclick = () => {
    error.style.display = "none"
}
