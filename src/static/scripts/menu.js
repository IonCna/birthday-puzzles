const btnSend = document.getElementById("send")
const bars = document.getElementById("bars")
const error = document.getElementById("error")

function jumpError() {
    error.style.display = "block"
}

const URL = window.location.host

btnSend.onclick = async () => {
    const code = (document.getElementById("code").value).toLowerCase()

    console.log(code)
    if(!code) jumpError()

    const response = await fetch(`/api/code`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: code })
    })

    const data = await response.json()
    
    const { status } = data

    if (status < 1) window.location.href = `/gift?code=${code}`
    else jumpError()
}

bars.onclick = () => {
    error.style.display = "none"
}
