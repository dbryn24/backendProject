const express = require("express");
const router = express.Router();
const { getAllSuppliers, getSupplierById } = require("./supplier.service");

router.get("/suppliers", async (req, res) => {
  try {
    const suppliers = await getAllSuppliers();
    res.json({
      status: "success",
      message: "List of suppliers",
      data: suppliers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/suppliers/:id", async (req, res) => {
  try {
    const supplier = await getSupplierById(req.params.id);
    res.json({
      status: "success",
      message: "Supplier details",
      data: supplier,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
