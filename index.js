// Ejercicio 1: Retornar el array de autos
function mostrarInformacionAutos(autos) {
  return autos
}

// Ejercicio 2: Filtrar autos por marca
function filtrarPorMarca(autos, marca) {
  return autos.filter((auto) => auto.marca === marca)
}

// Ejercicio 3: Calcular el precio promedio de todos los autos
function calcularPrecioPromedio(autos) {
  
  return autos.reduce((acc, val) => acc + val.precio, 0) / autos.length

}

// Ejercicio 4: Encontrar el auto más caro
function encontrarAutoMasCaro(autos) {
  let autoMaisCaro = null
  let m = 0

  autos.forEach(auto => {
    auto.precio > m ? (m = auto.precio, autoMaisCaro = auto) : m
  });
  return autoMaisCaro
}

// Ejercicio 5: Incrementar el precio de todos los autos en un 10%
function incrementarPrecio(autos) {
  const preciosOriginales = autos.map(auto => auto.precio)
  return preciosOriginales.map(precio => precio  * 1.10)
}

// Ejercicio 6: Encontrar el auto con el menor kilometraje
function encontrarAutoMenorKilometraje(autos) {
  let autoMenorKilometraje = autos.reduce((menor, actual) => (menor.kilometraje < actual.kilometraje) ? menor : actual, 0)
  // console.log(autoMenorKilometraje);
 return autoMenorKilometraje
}

// Ejercicio 7: Ordenar autos por precio de menor a mayor y devolver un array con los precios
function ordenarPorPrecio(autos) {
  return autos.sort((a, b) => a.precio - b.precio).map(a => a.precio)
}

// Ejercicio 8: Obtener un array con las marcas únicas de los autos
function obtenerMarcasUnicas() {

}

// Ejercicio 9: Filtrar autos por rango de precios
function filtrarPorRangoDePrecio() {

}

// Ejercicio 10: Calcular el total de kilometraje de todos los autos
function calcularTotalKilometraje() {

}



// No tocar este exports. Es para el test
module.exports = {
  mostrarInformacionAutos,
  filtrarPorMarca,
  calcularPrecioPromedio,
  encontrarAutoMasCaro,
  incrementarPrecio,
  encontrarAutoMenorKilometraje,
  ordenarPorPrecio,
  obtenerMarcasUnicas,
  filtrarPorRangoDePrecio,
  calcularTotalKilometraje
};