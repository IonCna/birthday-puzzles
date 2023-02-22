const btn = document.getElementById("btn")
const code = document.getElementById("code")

btn.onclick = async () => {
    code.style.display = "block"

    try {
        await navigator.clipboard.writeText(code.innerHTML)
        alert("El código fue copiado en tu papelera")
    } catch (error) {
        console.error("Error al copiar el código")
    }
}

