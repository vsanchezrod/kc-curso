
// Creación de una clase (Modelo de datos) - Se ha de ajustar al contenido del formulario

// Importación de Interfaces
import { Grupo } from './grupo.model';
import { Sector } from './sector.model';
import { Aficion } from './aficion.model';

// Imprescidible exportar la clase para poderla usar
export class Contacto {

    name: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    grupo: Grupo;
    sector: Sector;
    aficiones: Array<Aficion>;

    constructor() {

        // Los arrays si que es necesario inicializarlos
        this.aficiones = [];
    }
}
