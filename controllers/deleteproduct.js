
const Product = require('../models/upload');


// Define a route for the "Update Product" page
const  deleteproduct = async (req, res) => {
  const productId = req.params.id;
  // Fetch the product from the database by its ID
  await Product.findByIdAndDelete(productId)

  res.redirect('/userdashboard');
};



module.exports = {deleteproduct};
