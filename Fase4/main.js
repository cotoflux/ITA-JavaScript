
function calcular(){

    //Exercici nom i cognoms
    const nom = "Nuria ";
    const cognom1 = "Puig ";
    const cognom2 =  "Riera";
    var totNom = nom + cognom1 + cognom2;

    const diaNeix = 13;
    const mesNeix = 04;
    const naixement = 1990;
    var dataNeixement = diaNeix + "/" + mesNeix + "/" + naixement;

    document.getElementById("elMeuNom").innerHTML = totNom;
    document.getElementById("dataNeixement").innerHTML = dataNeixement;

    // Exercici dels anys de traspas
    var any1948 = 1948;
    var cadaQuant = 4;
    
    var anyTraspas = any1948 + cadaQuant;
    var diferencia = naixement - any1948;
    const loop = Math.floor(diferencia / cadaQuant);

    for(i=0; i<loop ; i++){
        anyTraspas = anyTraspas + cadaQuant;
        
        if(anyTraspas<1990){
            var mensaje1 = anyTraspas + "Aquest es un any de traspàs <br>";
            document.getElementById("dades").innerHTML += mensaje1;
        } else {
            var mensaje2 = "Aquest no es un any de traspàs <br>";
            document.getElementById("dades").innerHTML = mensaje2;
        }
    }
   
}