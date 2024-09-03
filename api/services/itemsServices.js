const Item = require('../config/schema/items'); // Ajusta la ruta según tu estructura
const Category = require('../config/schema/category'); // Ajusta la ruta según tu estructura
const findCategoryById  = require('../services/categoryServices/findCategoryById')

const createItem = async (itemData) => {
    const { name, description, price, image, categoryId } = itemData;

    // Función para crear un nuevo ítem y asociarlo a una categoría
    // Validar si la categoría existe
    const category = await findCategoryById(categoryId);
    if (!category) {
        throw new Error('La categoría no existe.');
    }

    // Crear el nuevo ítem
    const newItem = new Item({
        name,
        description,
        price,
        image,
        category: categoryId,
    });

    // Guardar el ítem en la base de datos
    await newItem.save();

    // Asociar el ítem con la categoría y guardarla
    category.items.push(newItem._id);
    await category.save();

    return newItem;
};

module.exports = {
    createItem,    
};
