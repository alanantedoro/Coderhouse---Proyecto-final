import config from '../config.js'

import mongoContainer from '../contenedores/mongoContainer.js'

import Product from '../models/product.js'

class productosApi extends mongoContainer {
    constructor() {
        super(Product);
    }

    async save(producto) {
        try {
            const response = this.create(producto);

            return response;
        } catch (error) {
            throw {
                ...error,
                description: 'Ocurrio un error al guardar el producto'
            };
        }
    }
}

export default productosApi