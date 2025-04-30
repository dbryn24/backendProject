const { findAll, findById } = require("./supplier.repository");

const getAllSuppliers = async () => {
  return await findAll();
};

const getSupplierById = async (id) => {
  const supplier = await findById(id);
  if (!supplier) {
    throw new Error("Supplier tidak ditemukan");
  }
  return supplier;
};

module.exports = {
  getAllSuppliers,
  getSupplierById,
};
