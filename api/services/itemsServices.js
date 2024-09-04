const Item = require("../config/schema/items"); // Ajusta la ruta según tu estructura
const Category = require("../config/schema/category"); // Ajusta la ruta según tu estructura
const { findCategoryById } = require("../services/categoryServices");

//Funcion para obtener todos los platos

const getAllItems = async () => {
    console.log()
  try {
    const items = await Item.find();
    return items;
  } catch (error) {
    console.error("Error al obtener los platos:", error);
    throw error;
  }
};

const createItem = async (itemData) => {
    console.log("zzzzzz",itemData)
  const { name, description, price, image, categoryId } = itemData;
  const category = await findCategoryById(categoryId);
  if (!category) {
    console.log("zzzzzz",category)
    throw new Error("La categoría no existe.");
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
  getAllItems,
};
