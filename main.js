function contaCaracteres() {
    const textArea = document.getElementById("text-area");
    const resp = document.getElementById("resp");
    const text = textArea.value;
    const numeroCaracteres = text.length;
    resp.textContent = `Número de caracteres: ${numeroCaracteres}`;
}