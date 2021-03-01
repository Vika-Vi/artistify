const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const styleSchema = new Schema({
    name: {type: String, unique: true},
    color: {type: String, default: "#000"},
    wikiURL: String
});

const Style = mongoose.model('Style', styleSchema);

module.exports = Style;
