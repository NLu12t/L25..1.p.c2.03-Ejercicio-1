import Cl_persona from "./Cl_persona.js";

export default class Cl_administrativo extends Cl_persona {
  constructor(nombre, edad, nivel) {
    super(nombre, edad);
    this.nivel = nivel;
  }
  incentivo() {
    if (this.esMayorDeEdad()) {
      return this.nivel === 1 ? 50 : 100;
    }
    return 0;
  }

  sueldo() {
    return this.sueldoBase() + this.incentivo();
  }

  mostrar() {
    return `<tr>
        <td>${this.nombre}</td>
        <td> 2 </td>
        <td>${this.edad}</td>
        <td>N/A</td>
        <td>${this.nivel}</td>
        <td>${this.esMayorDeEdad() ? "SI" : "NO"}</td>
        <td>N/A</td>
        <td>${this.incentivo()}</td>
        <td>${this.sueldo()}</td>
    </tr>`;
  }
}
