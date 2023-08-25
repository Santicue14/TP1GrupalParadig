const rosa = {
  leGusta() {
    return peso < 2000
  }
}
const estefania = {
  leGusta() {
    return color == fuerte
  }
}
const luisa = {
  leGusta() {
    return material == brilla
  }
}
const juan = {
  leGusta() {
    return color != fuerte || 1200 >= peso >= 1800
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
    return this.color == rojo || this.color == pardo
  },
}
const pelota = {
  color: pardo,
  material: cuero,
  peso: 1300,
  colorFuerte() {
    return this.color == rojo || this.color == pardo
  },
}
const biblioteca = {
  color: verde,
  material: madera,
  peso: 8000,
  colorFuerte() {
    return this.color == rojo || this.color == pardo
  },
}
const muñeco = {
  color: celeste,
  material: vidrio,
  peso: 1300,
  colorFuerte() {
    return this.color == rojo || this.color == pardo
  },
}
const placa = {
  color: pardo,
  material: cuero,
  peso: 1300,
  colorFuerte() {
    return this.color == rojo || this.color == pardo
  },
}
console.log(`El color es fuerte: ${placa.colorFuerte()}`)