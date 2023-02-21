const buttonDOM = document.getElementById("btnDOM")
const birthdayDOM = document.getElementById("birthdayDOM")
const bars = document.getElementById("bars")
const error = document.getElementById("error")

function redirect() {
    window.location.href = "/"
}

buttonDOM.onclick = async () => {
    const birthday = birthdayDOM.value

    !birthday && (error.style.display = "block");

    const date = new Date(birthday)

    const response = await fetch(`/api/birthday/set`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date: date }),
    })

    const data = await response.json()
    console.log(data)

    redirect()
}

bars.onclick = () => {
    error.style.display = "none"
}
