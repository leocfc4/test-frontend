/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro y reemplazar:

1. Todos los valores "undefined" en "usuarios" por un string vacío.

2. El nombre de cada "company" debe tener la primer letra en mayúscula.

3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula.

4. Las "companies" deben ordenarse por su total de "user" (orden decreciente).

5. Los "users" de cada "company" deben aparecer en orden alfabético.
*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const companies = createAll();

cleanConsole(1, companies);
console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

//Funcion qwue recibe por parametro el array companies para su formateo
// creacion de constante para exportar la funcion
const custom = {
    customCompanies: (companies) => {
        //recorrido de array companes
        companies.forEach((b)=>{     
            //recorrido de objeto users  
            b.users.map((c)=>{
            // validacion de campos undefined
                Object.keys(c).map((d) => c[d] = ( c[d] || !isNaN(c[d]) ? c[d] : ''));
                // ejecucion de capitalize para cambiar la primera letra del nombre de nombre y apellido a mayuscula
              
            })
            // ejecucion de capitalize para cambiar la primera letra del nombre de la empresa a mayuscula
            b.name = custom.capitalize(b.name);   
        })
        // retorno de array companies formateado
        return companies
    },
    // funcion para cambiar la primera letra de un string recibido a mayuscula
    capitalize: (text) => {
        return text[0].toUpperCase() + text.slice(1);
    }

}

//exportacion de lo que almacena la funcion customCompanies
// para visualizar la data en otro archivo
module.exports = custom;
console.log(custom.customCompanies(companies));
