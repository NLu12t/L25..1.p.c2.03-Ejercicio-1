import Cl_persona from "./Cl_persona.js";

export default class Cl_obrero extends Cl_persona {
  constructor(nombre, edad, cntHijos) {
    super(nombre, edad);
    this.cntHijos = +cntHijos;
  }

  bono() {
    if (this.cntHijos > 3) {
      return 70;
    } else if (this.cntHijos <= 3) {
      return 50;
    }
    return 0;
  }

  sueldo() {
    return this.sueldoBase() + this.bono();
  }

  mostrar() {
    return `<tr>
        <td>${this.nombre}</td>
        <td> 1 </td>
        <td>${this.edad}</td>
        <td>${this.cntHijos}</td>
        <td>N/A</td>
        <td>${this.esMayorDeEdad() ? "SI" : "NO"}</td>
        <td>${this.bono()}</td>
        <td>N/A</td>
        <td>${this.sueldo()}</td>
    </tr>`;
  }
}
