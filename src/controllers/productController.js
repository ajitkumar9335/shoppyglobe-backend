const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const { name, description, price, image, stock } = req.body;

  if (!name || !price)
    return res.status(400).json({ msg: "Name & Price are required" });

  const product = await Product.create({
    name,
    description,
    price,
    image,
    stock,
  });

  res.status(201).json({ msg: "Product created successfully", product });
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};
