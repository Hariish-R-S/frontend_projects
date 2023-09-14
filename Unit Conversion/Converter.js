function convert() {
    let input = document.getElementById("inp").value;
    let res = input / 2;
    document.getElementById("output").value = res;
}
function toInch() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Centimeter :";
    document.getElementById("output").value = (input / 2.54).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Inch :";
}
function toMeter() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Centimeter :";
    document.getElementById("output").value = (input / 100).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Meter :";
}
function toMillimeter() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Centimeter :";
    document.getElementById("output").value = (input / 10).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Millimeter :";
}
function toFareheit() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Celcius :";
    document.getElementById("output").value = ((input*(9/5))+32).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Farenheit :";
}
function toFeet() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Inch :";
    document.getElementById("output").value = (input / 12).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Feet :";
}
function toKilometer() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Meter :";
    document.getElementById("output").value = (input / 1000).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Kilometer :";
}
function toMiles() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Kilometer :";
    document.getElementById("output").value = (input / 1609).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Miles :";
}
function toCentimeter() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Meter :";
    document.getElementById("output").value = (input *100).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Centimeter :";
}
function mmToCm() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Millimeter :";
    document.getElementById("output").value = (input / 10).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Centimeter :";
}
function inchTocm() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Inch :";
    document.getElementById("output").value = (input *2.54).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Centimeter :";
}
function toCelcius() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Farenheit :";
    document.getElementById("output").value = ((input - 32)*5/9).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Celcius :";
}
function kmTom() {
    let input = document.getElementById("inp").value;
    document.getElementById("inpUnit").innerHTML = "Kilometer :";
    document.getElementById("output").value = (input *1000).toFixed(3);
    document.getElementById("outUnit").innerHTML = "Meter :";
}