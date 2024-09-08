const Category = require("../config/schema/category"); // Asegúrate de tener la ruta correcta a tu modelo
const Item = require("../config/schema/items"); // Ajusta la ruta según tu estructura

const getAllCategories = async () => {
  try {
    console.log("entra a serv")
    // Utiliza `populate` para obtener también los ítems relacionados con la categoría si es necesario
    const categories = await Category.find();
    return categories;
  } catch (error) {
    console.log("entra a catg")
    console.error("Error al obtener las categorías:", error);
    throw error;
  }
};

const createCategory = async (categoryData) => {
    console.log("al service entro??")
    const { name, image } = categoryData;

    const newCategory = new Category({
        name,
        image,
    });

    await newCategory.save();
    return newCategory;
};

const findCategoryById = async (categoryId) => {
    try {
        const category = await Category.findById(categoryId);
        return category;
    } catch (error) {
        throw new Error('Error al buscar la categoría: ' + error.message);
    }
};

module.exports = {
  getAllCategories,
  findCategoryById,
  createCategory,
};
