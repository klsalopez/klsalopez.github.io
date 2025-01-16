function copyLink(url) {
    // Crear un campo de texto temporal para copiar el enlace
    var tempInput = document.createElement("input");
    tempInput.value = url;
    document.body.appendChild(tempInput);
    
    // Seleccionar y copiar el enlace al portapapeles
    tempInput.select();
    document.execCommand("copy");
    
    // Eliminar el campo temporal
    document.body.removeChild(tempInput);

    // Mostrar un mensaje de confirmación
    alert("Enlace copiado: " + url);
}

function filterNames() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const items = document.querySelectorAll("#name-list li");
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? "block" : "none";
    });
}
