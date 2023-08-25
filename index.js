const rosa = {
  leGusta(objeto) {
    return objeto.peso < 2000
  }
}
const estefania = {
  leGusta(objeto) {
    return objeto.colorFuerte()
  }
}
const luisa = {
  leGusta(objeto) {
    return objeto.material.esBrillante()
  },
}
const juan = {
  leGusta(objeto) {
    return !objeto.colorFuerte()  || ( objeto.peso >= 1200 && objeto.peso <= 1800 )
  }
}
//Colores
const rojo = {
  esFuerte() {
    return true
  },
}
const verde = {
  esFuerte() {
    return true
  },
}
const celeste = {
  esFuerte() {
    return false
  },
}
const pardo = {
  esFuerte() {
    return false
  },
}

//Materiales
const cobre = {
  esBrillante(){
    return true
  },
}
const vidrio = {
  esBrillante(){
    return true
  },
}
const lino = {
  esBrillante(){
    return false
  },
}
const madera = {
  esBrillante(){
    return false
  },
}
const cuero = {
  esBrillante(){
    return false
  },
}
// Objetos
const remera = {
  color: rojo,
  material: lino,
  peso: 800,
  colorFuerte() {
    return this.color == rojo || this.color == verde
  },
  materialBrillante(){
    return this.material.esBrillante()
  },
}
const pelota = {
  color: pardo,
  material: cuero,
  peso: 1300,
  colorFuerte() {
    return this.color == rojo || this.color == verde
  },
  materialBrillante(){
    return this.material.esBrillante()
  },
}
const biblioteca = {
  color: verde,
  material: madera,
  peso: 8000,
  colorFuerte() {
    return this.color == rojo || this.color == verde
  },
  materialBrillante(){
    return this.material.esBrillante()
  },
}
const muñeco = {
  color: celeste,
  material: vidrio,
  peso: 1300,
  colorFuerte() {
    return this.color == rojo || this.color == verde
  },
  materialBrillante(){
    return this.material.esBrillante()
  },
}
const placa = {
  color: pardo,
  material: cobre,
  peso: 1300,
  colorFuerte() {
    return this.color == rojo || this.color == verde
  },
  materialBrillante(){
    return this.material.esBrillante()
  },
}

console.log(`A estefania le gusta ${juan.leGusta(placa)}`)