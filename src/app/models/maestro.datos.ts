import { Grupo } from './grupo.model';
import { Sector } from './sector.model';


// Se crea una constante que contendrá los GRUPOS posibles
export const GRUPOS: Array<Grupo> = [
    {
        id: 1,
        nombre: 'Familia',
        descripcion: ''
    },
    {
        id: 2,
        nombre: 'Amigos',
        descripcion: ''
    },
    {
        id: 3,
        nombre: 'Negocios',
        descripcion: ''
    },
    {
        id: 4,
        nombre: 'Trabajo',
        descripcion: ''
    },
    {
        id: 5,
        nombre: 'Otros',
        descripcion: ''
    }
];

// Se crea una constante que contendrá los SECTORES posibles
export const SECTORES: Array<Sector> = [
    {
        id: 1,
        nombre: 'Técnico',
        descripcion: ''
    },
    {
        id: 2,
        nombre: 'Creativo',
        descripcion: ''
    },
    {
        id: 3,
        nombre: 'Comercial',
        descripcion: ''
    },
    {
        id: 4,
        nombre: 'Otros',
        descripcion: ''
    }
];


// Lo normal sería que se hiciera una llamada al APIREST para obtener la información
