// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Definición de variables
let amigos = [];
const listaAmigos = document.getElementById('listaAmigos');        
const amigoSorteado = document.getElementById('resultado');        

function agregarAmigo(){
    //Capturar el valor del campo de entrada
    let nombreAmigo = document.getElementById('amigo').value;
    if(validarEntrada(nombreAmigo)){
        //limpiar amigo sorteado
        if(amigos.length == 0)
            limpiarElemento(amigoSorteado);

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

//limpia elemento html
function limpiarElemento(elemento){
    elemento.innerHTML = '';
}

//muestra lista de amigos
function mostrarAmigos(){     
    //Limpiar la lista existente    
    limpiarElemento(listaAmigos);

    //Iterar sobre el arreglo
    for(let i = 0; i< amigos.length; i++){    
        // Crear el nuevo <li>
        const nuevoElemento = document.createElement('li');        
        // Establecer el contenido de texto del nuevo <li>
        nuevoElemento.textContent = amigos[i];
        
        //Agregar elementos a la lista
        listaAmigos.appendChild(nuevoElemento);
    }
}

//valida que haya amigos disponibles
function validarAmigosDisponibles(){
    return amigos.length > 0 ? true: false;
}

//genera un índice aleatorio
function generarIndiceAleatorio(){
    let cantidadAmigos = amigos.length;
    //a diferencia de los otros ejercicios, no agregó el +1 para que no desborde el arreglo
    let indiceAleatorio =  Math.floor(Math.random()* cantidadAmigos);
    return indiceAleatorio;    
}

function sortearAmigo(){    
    if(validarAmigosDisponibles()){
        let indice = generarIndiceAleatorio();        
        //Obtener el nombre sorteado
        let nombreSorteado = amigos[indice];

        //limpiar lista de amigos                
        limpiarElemento(listaAmigos);
        amigos = [];

        //Mostrar el resultado                        
        amigoSorteado.innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;
    }else{
        alert('Por favor, primero agregue amigos.');
    }        
}
