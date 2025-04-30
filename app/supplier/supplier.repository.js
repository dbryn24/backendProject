const Supplier = require("./supplier.model");

const findAll = async () => {
  return await Supplier.find();
};

const findById = async (id) => {
  return await Supplier.findById(id);
};

module.exports = {
  findAll,
  findById,
};
