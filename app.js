// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Definición de variables
let amigos = [];


function agregarAmigo(){
    //Capturar el valor del campo de entrada
    let nombreAmigo = document.getElementById('amigo').value;
    if(validarEntrada(nombreAmigo)){
        // agregar amigo a lista
        actualizarAmigos(nombreAmigo);        
        // limpiar entrada de nombre
        limpiarCampo('amigo');
        // mostrar lista
        mostrarAmigos();
    }    
    else
        alert(`Por favor, inserte un nombre.`);
}

//validación para asegurarse de que el campo no esté vacío
function validarEntrada(texto){
    // Elimina los espacios al principio y al final
    const textoLimpio = texto.trim();

    // Verifica si el texto no está vacío
    return textoLimpio.length !== 0? true : false; 
}

//limpia el campo de entrada
function limpiarCampo(campo){
    document.getElementById(campo).value = '';
}

//Actualiza el array de amigos
function actualizarAmigos(nombre){
    amigos.push(nombre);
}

//muestra lista de amigos
function mostrarAmigos(){ 
    //Obtener el elemento de la lista   
    const lista = document.getElementById('resultado');
    //Limpiar la lista existente
    lista.innerHTML = '';

    //Iterar sobre el arreglo
    for(let i = 0; i< amigos.length; i++){    
        // Crear el nuevo <li>
        const nuevoElemento = document.createElement('li');        
        // Establecer el contenido de texto del nuevo <li>
        nuevoElemento.textContent = amigos[i];
        
        //Agregar elementos a la lista
        lista.appendChild(nuevoElemento);
    }
}