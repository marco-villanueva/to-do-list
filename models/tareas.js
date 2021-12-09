const Tarea = require('./tarea');
require('colors');

class Tareas {
    _listado = {}

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }


    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {
        tareas.map(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log('-------------------------------'.white)
        this.listadoArr.map((tarea, index) => {
            const numero = index + 1;
            const numeral = tarea.completadoEn
                ? `${numero}`.green
                : `${numero}`.red;
            const estado = tarea.completadoEn
                ? 'COMPLETADA'.green
                : 'PENDIENTE'.red;
            console.log(`${numeral}. ${tarea.desc} :: ${estado}`);
        });
        console.log('-------------------------------'.white)
    }

    listarPendientesCompletadas(completadas = true) {
        const tareasFiltradas = this.listadoArr.filter(tarea => (
            completadas
                ? tarea.completadoEn !== null
                : tarea.completadoEn === null
        )
        );
        console.log('-------------------------------'.white)
        tareasFiltradas.map((tarea, index) => {
            const numero = index + 1;
            const numeral = tarea.completadoEn
                ? `${numero}`.green
                : `${numero}`.red;
            const estado = tarea.completadoEn
                ? 'COMPLETADA'.green + `: ${tarea.completadoEn}`.green
                : 'PENDIENTE'.red;
            console.log(`${numeral}. ${tarea.desc} :: ${estado}`);
        });
        console.log('-------------------------------'.white)
    }

    toggleCompletadas( ids = []) {
        ids.forEach( id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;