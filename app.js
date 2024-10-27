const $rojo = document.getElementById("rojo");
const $verde = document.getElementById("verde");
const $azul = document.getElementById("azul");

const $txtrojo = document.getElementById("p-rojo");
const $txtverde = document.getElementById("p-verde");
const $txtazul = document.getElementById("p-azul");

let rojo = $rojo.value;
let verde = $verde.value;
let azul = $azul.value;

$txtrojo.innerText = rojo;
$txtverde.innerText = verde;
$txtazul.innerText = azul;

function generarRgb ($rojo, $verde, $azul){
    let codigoRgb  = `rgb(${$rojo}, ${$verde}, ${$azul})`;
    document.body.style.backgroundColor = codigoRgb;
   

};

$rojo.addEventListener('change', () =>{
    rojo = $rojo.value;
    $txtrojo.textContent = rojo;
    generarRgb(rojo, verde, azul)
});
$verde.addEventListener("change", () => {
	verde = $verde.value;
	$txtverde.textContent = verde;
	generarRgb(rojo, verde, azul);
});
$azul.addEventListener("change", () => {
	azul = $azul.value;
	$txtazul.textContent = azul;
	generarRgb(rojo, verde, azul);
});