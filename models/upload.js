const mongoose = require('mongoose');

const uplodingschema = mongoose.Schema({
    usermail: {
        type: String,
        require: true // Use require instead of require
    },
    itemdesc: {
        type: String,
        require: true // Use require instead of require
    },
    created: {
        type: Date,
        default: Date.now
    },
    colour: {
        type: String,
        require: true // Use require instead of require
    },
    itemcat: {
        type: String,
        require: true // Use require instead of require
    },
    itemimg: {
        data: String,
        contenttype: String,
    }
});

const uploadingmodel = mongoose.model('upload', uplodingschema);

module.exports = uploadingmodel;
