var botonDesencriptar = document.querySelector(".boton2");

botonDesencriptar.addEventListener("click",function (event) {
    event.preventDefault();

    var msj = document.querySelector("#texto");
    var mensaje = msj.textContent;
    var resultado = document.querySelector(".label3");
    var textoDesencriptado = desencriptarTexto(mensaje);
    var errores = validarDesencriptado(mensaje);
   
    if(errores.length>0){
        alert(errores);
        return;
    }

    document.getElementById('sidebar').classList.add('active');

    resultado.textContent = textoDesencriptado;
    msj.textContent="";
    
})

function desencriptarTexto(mensaje) {
    var texto=[];
    var cont = 0;
    for(i=0; i < mensaje.length; i++){

        if(cont > 0){
            cont --;
            continue;
        }

        if (mensaje[i] == 'e') {
            texto.push(mensaje[i]);
            cont = 4;
            
        }else if (mensaje[i] == 'i'){
            texto.push(mensaje[i]);
            cont = 3;

        } else if (mensaje[i] == 'a') {
            texto.push(mensaje[i]);
            cont = 1
            
        } else if (mensaje[i] == 'o') {
            texto.push(mensaje[i]);
            cont = 3;
            

        }else if (mensaje[i] == 'u') {
            texto.push(mensaje[i]);
           cont = 3;

        } else{
            texto.push(mensaje[i] );
           

        }
    }
    //console.log(texto.join(""));
    return texto.join("");

    
    
}

function validarDesencriptado(texto){
    var caracter=[];
    if(texto.length == 0){
        caracter.push("Ingrese un texto para Desencriptar");
    }
    return caracter;
}