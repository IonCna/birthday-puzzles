const buttonDOM = document.getElementById("btnDOM")
const birthdayDOM = document.getElementById("birthdayDOM")
const bars = document.getElementById("bars")
const error = document.getElementById("error")

function redirect() {
    window.location.href = "http://26.89.117.213:3000"
}

buttonDOM.onclick = async () => {
    const birthday = birthdayDOM.value

    !birthday && (error.style.display = "block");

    const date = new Date(birthday)

    const response = await fetch("http://26.89.117.213:3000/api/birthday/set", {
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
