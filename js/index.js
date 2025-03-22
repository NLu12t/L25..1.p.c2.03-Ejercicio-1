/**
 * Ejercicio 1
 * En una empresa se conoce el nombre y edad de su personal,
 * con un sueldo base de $150. Trabajan obreros (1) y
 * administrativos (2). 
 * Los obreros hasta con 3 hijos reciben $50
 * de bono, con más de 3 hijos reciben $70.
 *  Los administrativos
 * tienen nivel de estudio (1=bachiller, 2=técnico, 3=universitario),
 * y reciben un incentivo (sólo si son mayor de edad) de $50 para
 * bachilleres y $100 si tienen otro nivel.
 * nombre tipo edad cntHijos nivel esMayorDeEdad() bono() Incentivo() sueldo()
 * Luis 2 15 n/a 1 NO n/a 0  150
 * Ana  1 20 2   n/a  SI 50  n/a 200
 * Raul 1 17 0   n/a  NO 50  n/a 200
 * Liz  2 19 n/a 3    SI n/a 100 250
 * Eva  1 22 5   n/a  SI 70  n/a 220
 */

//import Cl_persona from "./Cl_persona.js";
import Cl_administrativo from "./Cl_administrativo.js";
import Cl_obrero from "./Cl_obrero.js";

let admin1 = new Cl_administrativo("Luis", 15, 1);
let obrero1 = new Cl_obrero("Ana", 20, 2);
let obrero2 = new Cl_obrero("Raul", 17, 0);
let admin2 = new Cl_administrativo("Liz", 19, 3);
let obrero3 = new Cl_obrero("Eva", 22, 5);

let salida = document.getElementById("salida");

salida.innerHTML = `
<table>
    <tr>
       <th>Nombre</th>
       <th>Tipo</th>
       <th>Edad</th>
       <th>cntHijos</th>
       <th>Nivel</th>
       <th>esMayorEdad()</th>
       <th>Bono()</th>
       <th>Incentivo()</th>
       <th>Sueldo()</th>
    </tr>
   ${admin1.mostrar()}
   ${obrero1.mostrar()}
   ${obrero2.mostrar()}
   ${admin2.mostrar()}
   ${obrero3.mostrar()}
</table>`;
