const Cart = require("../models/cartModels");

const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json({ carts, count: carts?.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToCart = async (req, res) => {
  const { userId } = req.user; // Assume userId is extracted from JWT
  const { productId, quantity, price } = req.body;

  try {
    // Check if the cart exists for the user
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // If no cart exists, create a new cart
      cart = new Cart({
        userId,
        items: [{ productId, quantity }],
        totalAmount: price, // You can calculate the total based on product prices
      });
    } else {
      // If cart exists, update the product quantity or add a new item
      const itemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (itemIndex > -1) {
        // If product already exists in the cart, update the quantity
        cart.items[itemIndex].quantity += quantity;
        cart.totalAmount = price;
      } else {
        // If product doesn't exist, add it to the cart
        cart.items.push({ productId, quantity });
        cart.totalAmount = price;
      }
    }

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: "Cart updated successfully", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  const { userId } = req.user; // Extract from token
  console.log(
    req.query,
    "req==================================================="
  );

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addToCart, getCart, getCarts };
