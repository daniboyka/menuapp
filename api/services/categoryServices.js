const Category = require('../config/schema/category'); // Asegúrate de tener la ruta correcta a tu modelo

const getAllCategories = async () => {
    try {
        // Utiliza `populate` para obtener también los ítems relacionados con la categoría si es necesario
        const categories = await Category.find().populate('items');
        return categories;
    } catch (error) {
        console.error('Error al obtener las categorías:', error);
        throw error;
    }
}

module.exports = {
    getAllCategories,
};