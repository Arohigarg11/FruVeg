const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    unique: true,
    required: [true, "product_id is required"],
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  new_price: {
    type: Number,
    required: [true, "new_price is required"],
  },
  old_price: {
    type: Number,
    required: [true, "old_price is required"],
  },
  product_qty: {
    type: Number,
    required: [true, "product_qty is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  sub_category: {
    type: String,
    unique: true,
    required: [true, "sub_category is required"],
  },
});
const ProductCollection = mongoose.model("products", ProductSchema);
module.exports = ProductCollection;