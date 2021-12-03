const inquirer = require('inquirer');

const pausa = async () => {
    const input = await inquirer.prompt([
        {
            type: 'input',
            name: 'opcion',
            message: `Presiona ${'ENTER'.green} para continuar`,
        }
    ])
}

module.exports = {
    pausa
}