var intentos = 3;
var palabra_oculta_1 = 'luciernaga';

function comprobar(){
    if (intentos == 0) {
        alert("Tus intrentos se han agotado")
        return false;
    }

    var palabra_a_comprobar = document.getElementById('palabra_1');
    if (palabra_a_comprobar.value == palabra_oculta_1){
        alert("Felicidades \n Lo lograste en " + ((2 - intentos)+1) + " intento(s).");
        window.location.reload();
    } else {
        
        alert("no le atinaste, vuelve a intentar");
    }
    palabra_a_comprobar.value = '';
    intentos--;
    document.getElementById('intentos').innerHTML = intentos;
}