// buyerController.js
const uploadingModel = require('../models/upload'); // Replace with the actual path to your model

const buyer = async (req, res) => {
    try {
        const { category } = req.params; // Access URL parameters

        console.log(category)


        // Find products within the specified category and within the 5km range
        const products = await uploadingModel.find({
            itemcat: category, 
        });

        const productsWithUpdatedImage = products.map((product) => {
            const temp = "/uploads/" + product.itemimg.data;
            return { ...product, itemimg: temp };
        });
        
        console.log(productsWithUpdatedImage);
        res.render('Aiselect', { product: productsWithUpdatedImage });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = buyer;
