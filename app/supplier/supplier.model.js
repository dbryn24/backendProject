const { Schema, model } = require("mongoose");

const supplierSchema = new Schema({
  namaProduk: { type: String, required: true },
  namaSupplier: { type: String, required: true },
});

module.exports = model("Supplier", supplierSchema);
