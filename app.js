require('colors');
const { inquirerMenu } = require('./helper/inquirer');
const { pausa } = require('./helper/pausa');
// const Tareas = require('./models/tareas');


const main = async () => {
    
    console.log('hola mundo');

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({opt})
        // const tareas = new Tareas();
        // const tarea = new Tarea('comprar comida');

        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);


        await pausa();

    } while ( opt !== '0' );

}

main ();