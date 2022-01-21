var copiar = document.querySelector(".boton3");

function copiarTexto(){
    var contenido = document.querySelector(".label3");
    
    
  navigator.clipboard.writeText(contenido.textContent);

    alert("Texto copiado con Exito");

}

copiar.addEventListener("click", function(event){
    event.preventDefault();
    copiarTexto();
    document.getElementById("sidebar").classList.remove("active");
})