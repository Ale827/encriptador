var botonEncriptar = document.querySelector(".boton1");

botonEncriptar.addEventListener("click",function(event) {
    event.preventDefault();

    var msj = document.querySelector("#texto");
    var mensaje = msj.textContent;
    var resultado = document.querySelector(".label3");
    var textoEncriptado = encriptarTexto(mensaje);
    var errores = validarEncriptado(mensaje);
    
    if(mensaje != mensaje.toLocaleLowerCase()){
        alert("Ingrese solo minusculas");
        msj.textContent="";
        return;
    }
    

    if(errores.length>0){
        alert(errores);
        return;
    }
    
    document.getElementById('sidebar').classList.add('active');

    resultado.textContent = textoEncriptado;
    msj.textContent="";

})

function encriptarTexto(mensaje) {
    var texto=[];
    var textoEncriptado  ="";
    for(i=0; i < mensaje.length; i++){
        
        if (mensaje[i] == 'e') {
            texto.push(mensaje[i] + "nter");
            textoEncriptado += mensaje[i] + "nter";
        }else if (mensaje[i] == 'i'){
            texto.push(mensaje[i] + "nes");
            textoEncriptado += mensaje[i] + "nes";

        } else if (mensaje[i] == 'a') {
            texto.push(mensaje[i] + "i");
            textoEncriptado += mensaje[i] + "i";

        } else if (mensaje[i] == 'o') {
            texto.push(mensaje[i] + "ber");
            textoEncriptado += mensaje[i] + "ber";

        }else if (mensaje[i] == 'u') {
            texto.push(mensaje[i] + "fat");
            textoEncriptado += mensaje[i] + "fat";

        } else{
            texto.push(mensaje[i] );
            textoEncriptado += mensaje[i];

        }
    }

    return texto.join("");

}

function validarEncriptado (texto){
    var caracter=[];
    if (texto.length == 0){
        caracter.push("Ingrese un texto para Encriptar");
    }
    return caracter;
}



  