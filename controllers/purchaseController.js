const Purchase = require("../models/purchaseModels");
const Product = require("../models/productModels");

const purchaseProduct = async (req, res) => {
  try {
    const { productId, id, price, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json({
      message: `User ${id} purchased a product of price ${
        price * quantity
      }  successfully!`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { purchaseProduct };
