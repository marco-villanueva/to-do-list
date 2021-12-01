require('colors');
const { mostrarMenu, pausa } = require('./helper/messages');


const main = async () => {
    
    console.clear();
    console.log('hola mundo');

    mostrarMenu();

    pausa();

}

main ();