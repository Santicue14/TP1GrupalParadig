// Trabajo Practico de "Gustos" para Paradigmas de la Programacion

//Colores:
//Como colores contemplar (al menos) rojo, verde, celeste y pardo. De estos, los dos primeros son fuertes, los otros no.

const colorRojo = {
  esFuerte() {
    return true
  }
}

const colorVerde = {
  esFuerte() {
    return true
  }
}

const colorCeleste = {
  esFuerte() {
    return false
  }
}

const colorPardo = {
  esFuerte() {
    return false
  }
}

const colorNaranja = {
  esFuerte() {
    return true
  }
}


//Materiales
//Como materiales tenemos: el cobre y el vidrio que brillan; el lino, la madera y el cuero que no.

const materialCobre = {
  brilla() {
    return true
  }
}

const materialVidrio = {
  brilla() {
    return true
  }
}

const materialLino = {
  brilla() {
    return false
  }
}

const materialMadera = {
  brilla() {
    return false
  }
}

const materialCuero = {
  brilla() {
    return false
  }
}

//Objetos
/*Finalmente, considerar (al menos) estos objetos:

una remera roja de lino, pesa 800 gramos.
una pelota parda de cuero, pesa 1300 gramos.
una biblioteca verde de madera, pesa 8000 gramos.
un muñeco celeste de vidrio, de peso variable.
una placa de cobre, de peso y color variables.

*/

const remera = {
  nombre: "Remera",
  peso: 800,
  material: materialLino,
  color: colorRojo,
  cambiarPeso() { },
  cambiarColor() { }
}

const pelota = {
  nombre: "Pelota",
  peso: 100,
  material: materialCuero,
  color: colorPardo,
  cambiarPeso() { },
  cambiarColor() { }
}

const biblioteca = {
  nombre: "Biblioteca",
  peso: 8000,
  material: materialMadera,
  color: colorVerde,
  cambiarPeso() { },
  cambiarColor() { }
}

const munieco = {
  nombre: "Muñeco",
  peso: 300,
  material: materialVidrio,
  color: colorCeleste,
  cambiarColor() { },
  cambiarPeso(unPeso) {
    this.peso = unPeso
  },
}

const placa = {
  nombre: "Placa",
  peso: 200,
  material: materialCobre,
  color: colorRojo,
  cambiarColor(unColor) {
    this.color = unColor;
  },
  cambiarPeso(unPeso) {
    this.peso = unPeso
  }
}


//Personas
/*
Tener en cuenta a estas personas:

Rosa: le gustan las cosas que pesan 2 kilos (o sea 2000 gramos) o menos.
Estefanía: le gustan las cosas de colores fuertes.
Luisa: le gustan las cosas que sean de un material que brilla.
Juan: le gustan las cosas que, o bien son de un color que no es fuerte, o bien pesan entre 1200 y 1800 gramos.
*/

const Rosa = {
  leGusta: undefined,
  objetoQueEncontro: undefined,
  encuentraObjeto(objetoEncontrado) {
    if (objetoEncontrado.peso <= 2000) {
      this.leGusta = true
    } else {
      this.leGusta = false
    }
    this.objetoQueEncontro = objetoEncontrado;
  }
}

const Estefania = {
  leGusta: undefined,
  objetoQueEncontro: undefined,
  encuentraObjeto(objetoEncontrado) {
    if (objetoEncontrado.color.esFuerte() === true) {
      this.leGusta = true
    } else {
      this.leGusta = false
    }
    this.objetoQueEncontro = objetoEncontrado;
  }
}

const Luisa = {
  leGusta: undefined,
  objetoQueEncontro: undefined,
  encuentraObjeto(objetoEncontrado) {
    if (objetoEncontrado.material.brilla() === true) {
      this.leGusta = true
    } else {
      this.leGusta = false
    }
    this.objetoQueEncontro = objetoEncontrado;
  }
}

const Juan = {
  leGusta: undefined,
  objetoQueEncontro: undefined,
  encuentraObjeto(objetoEncontrado) {
    if (objetoEncontrado.color.esFuerte() === false || objetoEncontrado.peso >= 1200 && objetoEncontrado.peso <= 1800) {
      this.leGusta = true
    } else {
      this.leGusta = false
    }
    this.objetoQueEncontro = objetoEncontrado;
  }
}


// Creacion de Boliche
/*Bolichito
Agregar al modelo un bolichito, que vende dos objetos: uno está en la vidriera, otro está en el mostrador. Estos objetos van cambiando con el tiempo.

Se esperar que el objeto que representa al bolichito responda a estos mensajes:

esBrillante(): indica si los dos objetos que tiene (el de mostrador y el de vidriera) son de un material que brilla.

esMonocromatico(): indica si los dos objetos que tiene son del mismo color.
Esto se daría si tiene p.ej. la remera en mostrador y la placa en vidriera, y la placa se configura como de color rojo y peso 2400 gramos.

estaDesequilibrado(): indica si el objeto en el mostrador pesa más que el de la vidriera.
P.ej. si el bolichito tiene la biblioteca en el mostrador y la remera en la vidriera, está desequilibrado.

tieneAlgoDeColor(color): indica si alguno de los dos objetos que tiene el boliche es del color indicado.
P.ej. si el bolichito tiene la biblioteca en la vidriera y la remera en el mostrador, entonces tiene algo de color rojo y tiene algo de color verde, pero no tiene nada de color pardo.

puedeMejorar(): indica si el bolichito puede mejorar en uno de los siguientes aspectos: o bien está desequilibrado (falta de equilibrio), o bien es monocromático (falta de alegría).

puedeOfrecerleAlgoA(persona): indica si alguno de los dos objetos que tiene en venta el boliche le gustan a la persona.
P.ej. si el bolichito tiene la remera en la vidriera y la pelota en el mostrador, entonces puede ofrecerle algo a Estefanía (la remera) y a Juan (la pelota) pero no a Luisa (porque no le gustan ni la remera ni la pelota).
*/

const bolichito = {
  objetoVidriera: undefined,
  objetoMostrado: undefined,
  cambiarObjetoVidriera(objetoEncontrado1) {
    this.objetoVidriera = objetoEncontrado1
  },
  cambiarObjetoMostrador(objetoEncontrado2) {
    this.objetoMostrador = objetoEncontrado2
  },
  esBrillante() {
    if (this.objetoVidriera.material.brilla() === true && this.objetoMostrador.material.brilla() === true) {
      return true
    } else {
      return false
    }
  },

  esMonocromatico() {
    if (this.objetoVidriera.color == this.objetoMostrador.color) {
      return true
    } else {
      return false
    }
  },

  estaDesequilibrado() {
    if (this.objetoMostrador.peso > this.objetoVidriera.peso) {
      return true
    } else {
      return false
    }
  },

  tieneAlgoDeColor(unColor) {
    if (this.objetoMostrador.color == unColor || this.objetoVidriera.color == unColor) {
      return true
    } else {
      return false
    }
  },

  puedeMejorar() {
    if (this.esMonocromatico() === true || this.estaDesequilibrado() === true) {
      return true
    } else {
      return false
    }
  },

  puedeOfrecerleAlgoA(unaPersona) {
    unaPersona.encuentraObjeto(this.objetoVidriera)
    unaPersona.encuentraObjeto(this.objetoMostrador)
    if ( unaPersona.leGusta === true ) {
      return true
    } else {
      return false
    }
  }
}


// Mas Cosas
/*Agregar al modelo estos objetos:

-un arito celeste de cobre, que pesa 180 gramos.
-un banquito de madera que pesa 1700 gramos. Al principio es naranja, pero puede cambiar de color. El naranja es un color fuerte.
-una cajita roja de cobre, que tiene un objeto adentro. Este objeto puede ser cualquiera de los definidos previamente, y puede cambiar. El peso de la cajita es de 400 gramos más el peso de lo que tiene adentro.
*/

const Arito = {
  peso: 180,
  nombre: "Arito",
  material: materialCobre,
  color: colorCeleste,
  cambiarPeso() { },
  cambiarColor() { }
}

const Banquito = {
  peso: 1700,
  nombre: "Banquito",
  material: materialMadera,
  color: colorNaranja,
  cambiarColor(unColor) {
    this.color = unColor;
  },
  cambiarPeso() { },
}

const cajita = {
  nombre: "Cajita",
  color: colorRojo,
  material: materialCobre,
  peso: 40,
  contenerObjeto(unObjeto) {
    this.peso = this.peso + unObjeto.peso
  }
}


//Pruebas del Codigo

console.log(`-----------------------------   Prueba de los atributos de los Colores   -----------------------------------------------------`)
console.log(`¿El Color Rojo es Fuerte?: ${colorRojo.esFuerte()}`)
console.log(`¿El Color Verde es Fuerte?: ${colorVerde.esFuerte()}`)
console.log(`¿El Color Celeste es Fuerte?: ${colorCeleste.esFuerte()}`)
console.log(`¿El Color Pardo es Fuerte?: ${colorPardo.esFuerte()}`)
console.log(`El  Color Naranja es Fuerte?: ${colorNaranja.esFuerte()}`)
console.log(`------------------------------------------------------------------------------------------------------------------------------`)
console.log(``)
console.log(`-----------------------------     Prueba de los atributos de la Materiales     -----------------------------------------------`)
console.log(`¿El material cobre es brillante?: ${materialCobre.brilla()}`)
console.log(`¿El material vidrio es brillante?: ${materialVidrio.brilla()}`)
console.log(`¿El material lino es brillante?: ${materialLino.brilla()}`)
console.log(`¿El material madera es brillante?: ${materialMadera.brilla()}`)
console.log(`¿El material cuero es brillante?: ${materialCuero.brilla()}`)
console.log(``)
console.log(`-----------------------------------------------------------------------------------------------------------------------------`)
console.log(``)
console.log(`-----------------------------   Prueba de los atributos de los Objetos   ----------------------------------------------------`)
console.log(``)
console.log(`-------------------------------------        Remera       -------------------------------------------------------------------`)
console.log(`El color de la remera es Fuerte: ${remera.color.esFuerte()}`)
console.log(`El material de la remera es Brillante: ${remera.material.brilla()}`)
console.log(`El peso de la remera es: ${remera.peso} gramos`)
console.log(``)
console.log(`------------------------------------        Pelota        ------------------------------------------------------------------`)
console.log(`El color de la pelota es Fuerte: ${pelota.color.esFuerte()}`)
console.log(`El material de la pelota es Brillante: ${pelota.material.brilla()}`)
console.log(`El peso de la pelota es: ${pelota.peso} gramos`)
console.log(``)
console.log(`------------------------------------      Biblioteca     -------------------------------------------------------------------`)
console.log(`El color de la biblioteca es Fuerte: ${biblioteca.color.esFuerte()}`)
console.log(`El material de la biblioteca es Brillante: ${biblioteca.material.brilla()}`)
console.log(`El la peso de la biblioteca es: ${biblioteca.peso} gramos`)
console.log(``)
console.log(`-------------------------------------        Muñeco       -----------------------------------------------------------------`)
console.log(`El color del muñeco es Fuerte: ${munieco.color.esFuerte()}`)
console.log(`El material del munieco es Brillante: ${munieco.material.brilla()}`)
console.log(`El peso del muñeco es: ${munieco.peso} gramos`)
munieco.cambiarPeso(800)
console.log(`El peso del muñeco es: ${munieco.peso} gramos`)
console.log(``)
console.log(`-------------------------------------         Placa         --------------------------------------------------------------`)
console.log(`El color de la placa es Fuerte: ${placa.color.esFuerte()}`)
console.log(`El material de la placa es Brillante: ${placa.material.brilla()}`)
console.log(`El peso de la placa es: ${placa.peso} gramos`)
placa.cambiarPeso(9000)
console.log(`El peso de la placa es: ${placa.peso} gramos`)
placa.cambiarColor(colorRojo)
console.log(`El color de la placa es Fuerte: ${placa.color.esFuerte()}`)
console.log(``)
console.log(`-------------------------------------          Arito           ----------------------------------------------------------`)
console.log(`El color del arito es fuerte: ${Arito.color.esFuerte()}`)
console.log(`El material del arito es Brillante: ${Arito.material.brilla()}`)
console.log(`El peso del del arito es: ${Arito.peso} gramos`)
console.log(``)
console.log(`-------------------------------------          Banquito          --------------------------------------------------------`)
console.log(`El color del banquito es fuerte: ${Banquito.color.esFuerte()}`)
console.log(`El material del Banquito es Brillante: ${Banquito.material.brilla()}`)
console.log(`El peso del Banquito es: ${Banquito.peso} gramos `)
Banquito.cambiarColor(colorPardo)
console.log(`El color del banquito es fuerte: ${Banquito.color.esFuerte()}`)
console.log(``)
console.log(`------------------------------------------        Cajita      ----------------------------------------------------------`)
console.log(`El color de la cajita es fuerte: ${cajita.color.esFuerte()}`)
console.log(`El material de la cajita es brillante: ${cajita.material.brilla()}`)
console.log(`la caja pesa ${cajita.peso} gramos`)
cajita.contenerObjeto(remera)
console.log(`la caja pesa ${cajita.peso} gramos`)
console.log(`-------------------------      Prueba de los gustos de los Personajes     ---------------------------------------------`)
console.log(``)
console.log(`--------------------------------           Rosa           -------------------------------------------------------------`)
Rosa.encuentraObjeto(remera)
console.log(` A Rosa le gusta ${Rosa.objetoQueEncontro.nombre}: ${Rosa.leGusta}`)
Rosa.encuentraObjeto(pelota)
console.log(` A Rosa le gusta ${Rosa.objetoQueEncontro.nombre}: ${Rosa.leGusta}`)
Rosa.encuentraObjeto(biblioteca)
console.log(` A Rosa le gusta ${Rosa.objetoQueEncontro.nombre}: ${Rosa.leGusta}`)
Rosa.encuentraObjeto(munieco)
console.log(` A Rosa le gusta ${Rosa.objetoQueEncontro.nombre}: ${Rosa.leGusta}`)
Rosa.encuentraObjeto(placa)
console.log(` A Rosa le gusta ${Rosa.objetoQueEncontro.nombre}: ${Rosa.leGusta}`)
Rosa.encuentraObjeto(Arito)
console.log(` A Rosa le gusta ${Rosa.objetoQueEncontro.nombre}: ${Rosa.leGusta}`)
Rosa.encuentraObjeto(Banquito)
console.log(` A Rosa le gusta ${Rosa.objetoQueEncontro.nombre}: ${Rosa.leGusta}`)
Rosa.encuentraObjeto(cajita)
console.log(` A Rosa le gusta ${Rosa.objetoQueEncontro.nombre}: ${Rosa.leGusta}`)
console.log(``)
console.log(`--------------------------------        Estefania       ------------------------------------------------------------`)
Estefania.encuentraObjeto(remera)
console.log(` A Estefania le gusta ${Estefania.objetoQueEncontro.nombre}: ${Estefania.leGusta}`)
Estefania.encuentraObjeto(pelota)
console.log(` A Estefania le gusta ${Estefania.objetoQueEncontro.nombre}: ${Estefania.leGusta}`)
Estefania.encuentraObjeto(biblioteca)
console.log(` A Estefania le gusta ${Estefania.objetoQueEncontro.nombre}: ${Estefania.leGusta}`)
Estefania.encuentraObjeto(munieco)
console.log(` A Estefania le gusta ${Estefania.objetoQueEncontro.nombre}: ${Estefania.leGusta}`)
Estefania.encuentraObjeto(placa)
console.log(` A Estefania le gusta ${Estefania.objetoQueEncontro.nombre}: ${Estefania.leGusta}`)
Estefania.encuentraObjeto(Arito)
console.log(` A Estefania le gusta ${Estefania.objetoQueEncontro.nombre}: ${Estefania.leGusta}`)
Estefania.encuentraObjeto(Banquito)
console.log(` A Estefania le gusta ${Estefania.objetoQueEncontro.nombre}: ${Estefania.leGusta}`)
Estefania.encuentraObjeto(cajita)
console.log(` A Estefania le gusta ${Estefania.objetoQueEncontro.nombre}: ${Estefania.leGusta}`)
console.log(``)
console.log(`---------------------------------        Luisa        -------------------------------------------------------------`)
Luisa.encuentraObjeto(remera)
console.log(` A Luisa le gusta ${Luisa.objetoQueEncontro.nombre}: ${Luisa.leGusta}`)
Luisa.encuentraObjeto(pelota)
console.log(` A Luisa le gusta ${Luisa.objetoQueEncontro.nombre}: ${Luisa.leGusta}`)
Luisa.encuentraObjeto(biblioteca)
console.log(` A Luisa le gusta ${Luisa.objetoQueEncontro.nombre}: ${Luisa.leGusta}`)
Luisa.encuentraObjeto(munieco)
console.log(` A Luisa le gusta ${Luisa.objetoQueEncontro.nombre}: ${Luisa.leGusta}`)
Luisa.encuentraObjeto(placa)
console.log(` A Luisa le gusta ${Luisa.objetoQueEncontro.nombre}: ${Luisa.leGusta}`)
Luisa.encuentraObjeto(Arito)
console.log(` A Luisa le gusta ${Luisa.objetoQueEncontro.nombre}: ${Luisa.leGusta}`)
Luisa.encuentraObjeto(Banquito)
console.log(` A Luisa le gusta ${Luisa.objetoQueEncontro.nombre}: ${Luisa.leGusta}`)
Luisa.encuentraObjeto(cajita)
console.log(` A Luisa le gusta ${Luisa.objetoQueEncontro.nombre}: ${Luisa.leGusta}`)
console.log(``)
console.log(`-------------------------------            Juan          --------------------------------------------------------`)
Juan.encuentraObjeto(remera)
console.log(` A Juan le gusta ${Juan.objetoQueEncontro.nombre}: ${Juan.leGusta}`)
Juan.encuentraObjeto(pelota)
console.log(` A Juan le gusta ${Juan.objetoQueEncontro.nombre}: ${Juan.leGusta}`)
Juan.encuentraObjeto(biblioteca)
console.log(` A Juan le gusta ${Juan.objetoQueEncontro.nombre}: ${Juan.leGusta}`)
Juan.encuentraObjeto(munieco)
console.log(` A Juan le gusta ${Juan.objetoQueEncontro.nombre}: ${Juan.leGusta}`)
Juan.encuentraObjeto(placa)
console.log(` A Juan le gusta ${Juan.objetoQueEncontro.nombre}: ${Juan.leGusta}`)
Juan.encuentraObjeto(Arito)
console.log(` A Juan le gusta ${Juan.objetoQueEncontro.nombre}: ${Juan.leGusta}`)
Juan.encuentraObjeto(Banquito)
console.log(` A Juan le gusta ${Juan.objetoQueEncontro.nombre}: ${Juan.leGusta}`)
Juan.encuentraObjeto(cajita)
console.log(` A Juan le gusta ${Juan.objetoQueEncontro.nombre}: ${Juan.leGusta}`)
console.log(``)
console.log(`--------------------------------------------------------------------------------------------------------------`)
console.log(``)
console.log(`----------------------           Prueba de los objetos en el bolichito       -----------------------------------`)
bolichito.cambiarObjetoMostrador(placa)
bolichito.cambiarObjetoVidriera(placa)
console.log(`El Objeto en el mostrador es: ${bolichito.objetoMostrador.nombre}`)
console.log(`El Objeto en la Vidriera es: ${bolichito.objetoVidriera.nombre}`)
bolichito.cambiarObjetoVidriera(biblioteca)
bolichito.cambiarObjetoMostrador(placa)
bolichito.cambiarObjetoMostrador(Banquito)
bolichito.cambiarObjetoVidriera(Arito)
bolichito.cambiarObjetoMostrador(cajita)
console.log(`El Objeto en el mostrador es brillante: ${bolichito.objetoMostrador.material.brilla()}`)
console.log(`El Objeto en la Vidriera es brillante: ${bolichito.objetoVidriera.material.brilla()}`)
console.log(`los dos Objetos del bolichito son brillantes: ${bolichito.esBrillante()}`)
console.log(`los dos Objetos del bolichito son del mismo color, es monocromatico: ${bolichito.esMonocromatico()}`)
console.log(`EL Objeto del mostrador pesa mas que el de la Vidriera, esta desequilibrado: ${bolichito.estaDesequilibrado()}`)
console.log(`El boliche tiene algo de color celeste:${bolichito.tieneAlgoDeColor(colorCeleste)}`)
console.log(`El boliche tiene algo de color rojo: ${bolichito.tieneAlgoDeColor(colorRojo)}`)
console.log(`¿El boliche puede mejorar?: ${bolichito.puedeMejorar()}`)
console.log(``)
console.log(`Le puedo ofrecer algo a Rosa: ${bolichito.puedeOfrecerleAlgoA(Rosa)}`)
console.log(`Le puedo ofrecer algo a Estefania: ${bolichito.puedeOfrecerleAlgoA(Estefania)}`)
console.log(`Le puedo ofrecer algo a Luisa: ${bolichito.puedeOfrecerleAlgoA(Luisa)}`)
console.log(`Le puedo ofrecer algo a Juan: ${bolichito.puedeOfrecerleAlgoA(Juan)}`)
console.log(``)
console.log(`------------------------------------------------------------------------------------------------------------------`)