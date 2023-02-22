const btn = document.getElementById("btn")
const hidden = document.getElementsByClassName("hide")

btn.onclick = async () => {    
    for (let i = 0; i < hidden.length; i++) {
        const element = hidden[i];
        element.style.display = "block"
    }

    try {
        await navigator.clipboard.writeText(code.innerHTML)
        alert("El código fue copiado en tu papelera")
    } catch (error) {
        console.error("Error al copiar el código")
    }
}


