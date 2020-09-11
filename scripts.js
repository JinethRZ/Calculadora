function pintarNumero(numero) {
    //document.getElementById('data').value = numero
    pintarDatos(numero)
}

function pintarOperador(operador) {
    //document.getElementById('data').value = operador
    pintarDatos(` ${operador} `)
}

function pintarDatos(dato) {
    let valorInput = document.getElementById("data")
    //valorInput.value = valorInput.value + " " + dato
    valorInput.value = `${valorInput.value}${dato}` //Se aplica para que salga un espacio, reemplaza el anterior
}

function limpiar() {
    document.getElementById("data").value = ''
    }

function mostrarResultado(){
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split(' ')

    let sumar = parseInt(arreglo[0]) + parseInt(arreglo[2])
    document.getElementById('data').value = sumar
    console.log(arreglo)
}

if (arreglo[1] == "+") {
    let sumar = parseInt(arreglo[0]) + parseInt(arreglo[2])
    document.getElementById("data").value = sumar
}  else if (arreglo[1] == "-") {
    let restar = parseInt(arreglo[0]) - parseInt(arreglo[2]) 
    document.getElementById("data").value = restar
}  else if (arreglo[1] == "*") {
    let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2]) 
    document.getElementById("data").value = multiplicar   
}  else if (arreglo[1] == "/") {
    let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2]) 
    document.getElementById("data").value = dividir
}
   switch (arreglo[1]) {
       case '+':
           console.log('suma')
           let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
           document.getElementById('data').value = suma
           break;
       case '-':
           console.log('resta')
           let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
           document.getElementById('data').value = resta
           break;
       default:
           alert('No es + ni menos')   
    }

function preguntaDia (){
    let nomDia 
    nomDia = prompt("Digite el nombre de un día y descubra su traducción y etimología en inglés");
    if (nomDia ==""){alert ('Ingrese el nombre de un día');}

    switch (nomDia) {
        case 'Lunes':
            alert ("Monday: Mon day→Día de la Luna");
            break;
        case 'Martes':
            alert ("Tuesday: Tyr→Dios germánico de la guerra");
            break;
        case 'Miércoles':
            alert ("Wednesday: Woden→Odín, líder de los dioses Aesir en la mitología nórdica");
            break;
         case 'Jueves':
            alert ("Thursday: Thor→Dios del trueno");
            break;
        case 'Viernes':
            alert ("Friday: Frigg→Diosa del cielo y esposa de Odín");
            break;
        case 'Sábado':
            alert ("Saturday: Saturnus→Saturno");
            break;           
        case 'Domingo':
            alert ("Sunday: Sun→Sol");
            break;  
        default:
            alert("Inicie el nombre del día con letra mayúscula y tenga en cuenta si este lleva tilde"); 
            break; 
    }
}