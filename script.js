
function convertir() {
    let cm = document.getElementById('cm').value;
    cm = Number(cm);

    let mm = cm * 10;
    let metros = cm / 100;
    let km = cm / 100000;
    let pulgadas = cm / 2.54;

    document.getElementById('resultado').innerHTML =
        "Milímetros: " + mm + "<br>" +
        "Metros: " + metros + "<br>" +
        "Kilómetros: " + km + "<br>" +
        "Pulgadas: " + pulgadas;
}
