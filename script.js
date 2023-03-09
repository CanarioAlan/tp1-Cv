const persona = `{"nombre":"Alan","apellido":"Canario", "ubicacion":"Santa Fe, Capital"}`;
const obj = JSON.parse(persona);
document.getElementById("titulo").innerHTML = obj.apellido + " " + obj.nombre;
document.querySelector(".lugar").innerHTML = obj.ubicacion;

document.getElementById("enviar").onclick = function () {
  document.getElementById("enviado").innerHTML = "formulario enviado";
};
