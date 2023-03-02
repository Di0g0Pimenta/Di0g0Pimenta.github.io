function Notas() {
    var texto = document.getElementById("texto").value;

    // Cria uma nova checkbox
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "form-check-input");
    checkbox.setAttribute("id", "check" + texto);

    // Cria uma nova label para a checkbox
    var label = document.createElement("label");
    label.setAttribute("for", "check" + texto);
    label.innerHTML = texto;

    // Adiciona a checkbox, a label e uma quebra de linha
    var div = document.getElementById("nota");
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(document.createElement("br"));
}
