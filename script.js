var dato;
var datos;
var l = 1;
var calcular;
var constante = 10;
var numer;
var boton;

boton = document.getElementById("jj");
boton.addEventListener("click", multiplo);

function multiplo() {
	let tabla;
	dato = document.getElementById("entrada");
	tabla = parseInt(dato.value);
	console.log(tabla);
	while (l <= constante) {
		numer = tabla * l;
		l++;
		document.write("Los multiplos son: " + numer + "<br>");
	}
}

function mensaje() {
	alert("a ver si sirve");
}
