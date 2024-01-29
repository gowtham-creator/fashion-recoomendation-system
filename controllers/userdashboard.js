// Import necessary modules and models
const Product = require('../models/upload'); // Import your Product model


// Define the sellerdashboard controller
const userdashboard = async (req, res) => {
    try {
        // Get the user's email from the session
        const userEmail = req.session.usermail;

        console.log(userEmail)

        // Query the database for products associated with the user's email
        const userProducts = await Product.find({ usermail: userEmail });


        // Render the sellerdashboard.ejs template with the userProducts data
        res.render('userdashboard', { products: userProducts});
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Export the sellerdashboard controller
module.exports = userdashboard;
