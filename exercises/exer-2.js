/* INSTRUCCIONES:

Crear una función que reciba los parámetros la variable "companies" y un booleano "hasCar":

1. Para cada "company" debe conservar solo "users" cuyo valor de atributo "car" es igual al parámetro del booleano "hasCar".

2. El atributo "usersLength" deben indicar el total de "users" correspondientes al parámetro "hasCar".

*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

cleanConsole(2, companies);
console.log('%c ---- RES 2 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

console.log(customCompanies(companies, true));

// Funcion que recibe el array companies como parametro y un parametro booleano adicional 
function customCompanies(companies, hasCar) {
    //recorribo de companies
    companies.forEach((b)=>{
        //recorrido del objeto users
        b.users.map((c)=>{
            // se iguala el valor del cambo car del ibjeto user al valor
            // que se recibe del parametro hasCar
            c.car = hasCar;
        })
    })
    //retorno de nuevo array 
    return companies
}