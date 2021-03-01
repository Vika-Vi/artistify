// mongoose set up
require("../../config/mongo.js");
require("../../config/cloudinary.js");
// const data = require('./data/hackers.json');
const Artists = require('../../model/Artist.js');
const Labels = require('../../model/Label.js');
const Styles = require('../../model/Style.js');

// ------------- Data ---------------------------

const artist = [
{
    name: "foo2",
    isBand: true,
    description: "this is also a band"
}
]

const label = [
{
    name: "Label foo",
    city: "Paris",
    country: "France",
    street: "Foo Street",
    streetNumber: 20,
    zipcode: "20AFoo",
}
]

const style = [
    {
        name: "foo style",
        color: "blue",
        wikiURL: "https://en.wikipedia.org/wiki/Chinoiserie"

    }
    ]

// ------------- Artists ---------------------------

// Import of the data from './data.json'

function createArtist(artists) {
Artists.insertMany(artists)
.then((artists) => {artists.forEach(artist => console.log(artist.name))})
.catch(error => {console.error('Error connecting to the database', error);})
}


function deleteAllArtists() {
Artists.deleteMany().then(()=> console.log("succesfully deleted"))
}

function deleteOneArtists(name, val) {
Artists.deleteOne({name: val}).then(()=> console.log("succesfully deleted one")) 
}



// ----------------- Labels ---------------------------


function createLabels(labels) {
    Labels.insertMany(labels)
    .then((labels) => {labels.forEach(label => console.log(label.name))})
    .catch(error => {console.error('Error connecting to the database', error);})
    }
 
function deleteAllLabels() {
Labels.deleteMany().then(()=> console.log("succesfully deleted"))
}

function deleteOneLabels(name, val) {
Labels.deleteOne({name: val}).then(()=> console.log("succesfully deleted one")) 
}
        


// ----------------- Styles ---------------------------


function createStyles(styles) {
Styles.insertMany(styles)
.then((styles) => {styles.forEach(style => console.log(style.name))})
.catch(error => {console.error('Error connecting to the database', error);})
}

function deleteAllStyles() {
Styles.deleteMany().then(()=> console.log("succesfully deleted"))
}

function deleteOneStyles(name, val) {
Styles.deleteOne({name: val}).then(()=> console.log("succesfully deleted one")) 
}
        



// ----------------- functions --------------------------- 

// createStyles(artist)
// createLabels(label)
// createStyles(style)

// deleteAllArtists()
// deleteAllLabels()
// deleteAllStyles()