export default class Cl_persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  set nombre(c) {
    this._nombre = c;
  }
  get nombre() {
    return this._nombre;
  }
  set edad(e) {
    this._edad = +e;
  }
  get edad() {
    return this._edad;
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }
  sueldoBase() {
    return 150;
  }
}
