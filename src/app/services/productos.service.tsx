import { Productos } from './productos.interface';

export async function obtenerProductos(): Promise<Productos[]> {
    try {
        const fechaActual = new Date();
        const año = fechaActual.getFullYear();
        const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
        const día = fechaActual.getDate().toString().padStart(2, '0');

        const url = `https://kavehome.com/nfeeds/es/es/templatebuilder/${año}${mes}${día}`;

        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error('Error al obtener los datos');
        }
        const datos = await respuesta.json();

        const productos: Productos[] = datos.results.map((item: Productos) => {
            return {
                productSku: item.productSku,
                productName: item.productName,
                productImageUrl: item.productImageUrl,
                productPrice: item.productPrice,
                productCollection: item.productCollection,
                productCategoryHierarchy: item.productCategoryHierarchy
            };
        });

        return productos;
    } catch (error) {
        console.error('Error:', error);
        return []; 
    }
}
