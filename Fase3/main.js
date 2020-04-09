
function calcular(){

    const any1948 = 1948;
    var cadaQuant = 4;
    const naixement = 1990;

    var diferencia = (naixement - any1948);
    var quantsAnys = diferencia / cadaQuant;
   
    document.getElementById("dades").innerHTML = Math.floor(quantsAnys);

}