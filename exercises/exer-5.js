/*
INSTRUCCIONES:

1. Use la función creada en el ejemplo 4 para crear una nueva función tomando como parámetro
   la variable "companies" y devolver un nuevo objeto con los siguientes atributos:

    'size' => total de "users"
    'average' => edad promedio de "users"
    'hasCar' => total de "users" propietarios de un carro
    'averageWithCar' => edad promedio de los "users" con un carro
 */
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

cleanConsole(5, companies);
console.log('%c ---- RES 5 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

// funcion que recibe como parametro el array companies para  
// generar un nuevo array de datos resultantes del recorrido
function customUser(companies) {
   // variable para almacenar nuevo array de usuarios
   var listCUstomData = [];
   // variable para usarla como contador de usuarios
   var countUser = 0;
   // variable para promedio de edad
   var aveAge = 0;
   // variable para total de users con carro
   var totalUSerCar = 0;
   // variable para edad promedio de usuarios con carros
   var averageWithCar = 0;
   // recorrer array companies
   companies.forEach((b)=>{
       // recorrer objeto users de companies
       b.users.map((c)=>{
         countUser = countUser + 1; 
         aveAge = aveAge + c.age;
         if (c.car ) {
            averageWithCar = averageWithCar + c.age;
            totalUSerCar = totalUSerCar + 1;
         }
  
       })
   })
   // calculop de promedio de edad
   aveAge = aveAge / countUser;
   averageWithCar = averageWithCar / totalUSerCar;
    // push a nuevo array de resumen de datos
   listCUstomData.push({
      size: countUser,
      average: aveAge.toFixed(2),
      hasCar: totalUSerCar,
      averageWithCar: averageWithCar.toFixed(2) 
    });
   // retorno de nuevo array de resumen da datos
   console.log(listCUstomData);

   
 }

 customUser(companies);
