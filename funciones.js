const listaColores = document.querySelector("ul");
const formulario = document.querySelector("form");
const texto = document.querySelector('input[type="text"]');
const msgError = document.querySelector(".error");

function li(color){
    let li = document.createElement("li");
    li.innerHTML = color;
    li.style.backgroundColor = color;
    return li;
}

formulario.addEventListener("submit", evento =>{
    evento.preventDefault();
    msgError.classList.remove("visible");

    if(texto.value.trim() != ""){ //destinto de vacio

        let elColor = texto.value.split(",").map(valor => parseInt(valor));

        let formularioValido = elColor.length == 3;
        elColor.forEach(valor => formularioValido = formularioValido && valor >= 0 && valor <= 255);
       
        if(formularioValido){
            listaColores.appendChild(li(codigo(elColor)));
            texto.value = "";
        }else{
            msgError.innerHTML = "tres valores separados por comas...";
            msgError.classList.add("visible");
        }

    }else{
        msgError.innerHTML = "no puede estar vacío";
        msgError.classList.add("visible");

    }

});



//si el valor del input esta vacio no ha escrito nada 
//si es asi que salte error

//si el usuario lo ha dejado vacio que salte error
//si lo que ha escrito esta mal - frase indicando que el valor tiene que ser emtre 0 y 255 
// si es correcto se limpia el imput.
