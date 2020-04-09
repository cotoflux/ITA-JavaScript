
function calcular(){

    var any1948 = 1948;
    var cadaQuant = 4;
    const naixement = 1990;
    var anyTraspas = any1948 + cadaQuant;
    var diferencia = naixement - any1948;
    const loop = Math.floor(diferencia / cadaQuant);

    for(i=0; i<loop ; i++){
        anyTraspas = anyTraspas + cadaQuant;
        
        if(anyTraspas<1990){
            var mensaje1 = anyTraspas + "Aquest es un any de traspàs <br>";
            document.getElementById("dades").innerHTML += mensaje1;
        } else {
            var mensaje2 = anyTraspas + "Aquest no es un any de traspàs <br>";
            document.getElementById("dades").innerHTML = mensaje2;
        }
    }
   
}