const fnComprarOficial = require("./modulos/comprarOficial");
const fnComprarBlue = require("./modulos/comprarBlue");
const fnvenderOficial = require("./modulos/venderOficial");
const fnvenderBlue = require("./modulos/venderBlue");
const process = require ("process");
let operacion = process.argv[2];
let cantidad = process.argv[3];
switch (operacion) {
  case "comprar":
  case "Comprar":
  case "COMPRAR":
    let resultadoCompraOfical = fnComprarOficial(cantidad); 
    let resultadoCompraBlue = fnComprarBlue(cantidad);
    let dolar = 105
    return  cantidad >= (200*dolar) ? console.log("No podés comprar más de 200 dólares por la legislación actual. En el mercado paralelo serían ",resultadoCompraBlue.toFixed(2) + " dólares") : console.log("Podes", resultadoCompraOfical);
    break;
  case "vender":
  case "Vender":
  case "VENDER":
    let resultadoVenderOfical = fnvenderOficial(cantidad);
    let resultadoVenderBlue = fnvenderBlue(cantidad);
    console.log(
      "La venta de tus dólares te da ",resultadoVenderOfical.toFixed(2) + " pesos. Si lo hacés en el mercado paralelo son: ",
      resultadoVenderBlue.toFixed(2));
    break;
    default : 
    console.log("Tenes que indicar la operación que querés realizar y el monto");
}