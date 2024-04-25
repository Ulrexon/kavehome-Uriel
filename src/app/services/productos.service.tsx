// productos.service.ts
import { Productos } from './productos.interface';

export async function obtenerProductos(): Promise<Productos[]> {
    try {
        const respuesta = await fetch('https://kavehome.com/nfeeds/es/es/templatebuilder/20240221');
        if (!respuesta.ok) {
            throw new Error('Error al obtener los datos');
        }
        const datos = await respuesta.json();
        alert(datos);
        return datos as Productos[];
    } catch (error) {
        console.error('Error:', error);
        return []; 
    }
}