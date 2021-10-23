/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro:

1. Agrupar todos los "users" de todas las "companies" en una sola tabla.

2. Cada "user" debe tener un nuevo atributo "company" que tenga como valor el nombre de la "company".

3. Los "users" deben ordenarse de acuerdo con su edad (de mayor a menor).
*/
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

// funcion que recibe como parametro el array companies para hacer 
//el recorrido de los usuarios de cada companie y enviarlos a un nuevo array 
// solo de usuarios
function customUser(companies) {
    // variable para almacenar nuevo array de usuarios
    var listCUstomUSer = [];
    // recorrer array companies
    companies.forEach((b)=>{
        // recorrer objeto users de companies
        b.users.map((c)=>{
             // push al nuevo array y se adiciona un nuevo campo 
            // para almacenar en valor de la companie a la cual pertenece 
            // el user
            listCUstomUSer.push({
                age: c.age,
                car: c.car,
                firstName: c.firstName,
                lastName: c.lastName,
                id: c.id,
                company: b.name
              });
        })
    })
    //orden de mayor a menor por edad para el nuevo array de users
    listCUstomUSer.sort((a, b) => b.age - a.age)
    // retorno de nuevo array para usuarios formateado
    console.log(listCUstomUSer);
 
    
  }

  customUser(companies);
cleanConsole(4, companies);
console.log('%c ---- RES 4 --- ', 'background: #bada55; color: #222', 'Put here your method: ');
