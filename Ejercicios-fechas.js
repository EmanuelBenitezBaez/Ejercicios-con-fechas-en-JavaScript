/*Crea un archivo llamado fechas.js que contenga las siguientes líneas
*/

//- La fecha de hoy
const fechaHoy= new Date();
console.log(fechaHoy);
//- La fecha de tu nacimiento
const fechaNacimiento=new Date(1989,03,01,10,23,50);
console.log(fechaNacimiento);
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(fechaHoy===fechaNacimiento);
const hoyEsMasTarde=fechaHoy.getTime()> fechaNacimiento.getTime();
console.log(hoyEsMasTarde);
//- Una variable que contenga el día de tu nacimiento
const diaNacimiento=fechaNacimiento.getDate();
console.log(diaNacimiento);
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento= fechaNacimiento.getMonth();
console.log(mesNacimiento+1);
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const añoNacimiento= fechaNacimiento.getFullYear();
console.log(añoNacimiento);