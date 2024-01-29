// buyerController.js
const uploadingModel = require('../models/upload'); // Replace with the actual path to your model

const shirtgetaioutfit = async (req, res) => {
    try {
        const { color } = req.params; // Access URL parameters

        console.log(color)

        // Define color combinations based on the provided shirt color
        let pantColor, watchColor, shoesColor, jewelsColor;

        switch (color) {
            case 'red':
                pantColor = 'black';
                watchColor = 'brown';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'blue':
                pantColor = 'black';
                watchColor = 'black';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'green':
                pantColor = 'black';
                watchColor = 'green';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'black':
                pantColor = 'brown';
                watchColor = 'black';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'brown':
                pantColor = 'black';
                watchColor = 'black';
                shoesColor = 'brown';
                jewelsColor = 'yellow';
                break;
            case 'yellow':
                pantColor = 'black';
                watchColor = 'brown';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'purple':
                pantColor = 'black';
                watchColor = 'black';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'pink':
                pantColor = 'blue';
                watchColor = 'brown';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'orange':
                pantColor = 'brown';
                watchColor = 'black';
                shoesColor = 'brown';
                jewelsColor = 'yellow';
                break;
            case 'gray':
                pantColor = 'black';
                watchColor = 'black';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            default:
                // Handle cases where shirt color is not recognized
                break;
        }
        // Query the database to find matching items

        console.log(pantColor,watchColor,shoesColor,jewelsColor)
        const [selectedPant, selectedWatch, selectedShoes, selectedJewels] = await Promise.all([
            uploadingModel.findOne({ itemcat: 'pants', colour: pantColor }),
            uploadingModel.findOne({ itemcat: 'watches', colour: watchColor }),
            uploadingModel.findOne({ itemcat: 'shoes', colour: shoesColor }),
            uploadingModel.findOne({ itemcat: 'jewelry', colour: jewelsColor }),
        ]);

        console.log(selectedPant,selectedJewels,selectedShoes,selectedWatch);



        res.render('getaioutfit', { item:{item:"pant"}, pant:selectedPant,watch:selectedWatch,shoe:selectedShoes,jewel:selectedJewels});
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


const pantgetaioutfit = async (req, res) => {
    try {
        const { color } = req.params; // Access URL parameters

        console.log(color)

        // Define color combinations based on the provided shirt color
        let pantColor, watchColor, shoesColor, jewelsColor;

        switch (color) {
            case 'red':
                shirtColor = 'black';
                watchColor = 'brown';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'blue':
                shirtColor = 'black';
                watchColor = 'black';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'green':
                shirtColor = 'black';
                watchColor = 'green';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'black':
                shirtColor = 'brown';
                watchColor = 'black';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'brown':
                shirtColor = 'black';
                watchColor = 'black';
                shoesColor = 'brown';
                jewelsColor = 'yellow';
                break;
            case 'yellow':
                shirtColor = 'black';
                watchColor = 'brown';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'purple':
                shirtColor = 'black';
                watchColor = 'black';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'pink':
                shirtColor = 'blue';
                watchColor = 'brown';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            case 'orange':
                shirtColor = 'brown';
                watchColor = 'black';
                shoesColor = 'brown';
                jewelsColor = 'yellow';
                break;
            case 'gray':
                shirtColor = 'black';
                watchColor = 'black';
                shoesColor = 'black';
                jewelsColor = 'yellow';
                break;
            default:
                // Handle cases where shirt color is not recognized
                break;
        }
        // Query the database to find matching items

        console.log(pantColor,watchColor,shoesColor,jewelsColor)
        const [selectedPant, selectedWatch, selectedShoes, selectedJewels] = await Promise.all([
            uploadingModel.findOne({ itemcat: 'pants', colour: pantColor }),
            uploadingModel.findOne({ itemcat: 'watches', colour: watchColor }),
            uploadingModel.findOne({ itemcat: 'shoes', colour: shoesColor }),
            uploadingModel.findOne({ itemcat: 'jewelry', colour: jewelsColor }),
        ]);

        console.log(selectedPant,selectedJewels,selectedShoes,selectedWatch);



        res.render('getaioutfit', { item:{item:"shirt"},pant:selectedPant,watch:selectedWatch,shoe:selectedShoes,jewel:selectedJewels});
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};



module.exports = {shirtgetaioutfit,pantgetaioutfit};
