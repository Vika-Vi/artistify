const express = require("express");
const router = express.Router();
const ArtistModel = require("./../model/artist")

/* GET artist page. */
router.get("/", (req, res) => {
    ArtistModel.find()
    .then((dbRes) => {
        res.render("dashboard/artists.hbs",{artists:dbRes})
    }).catch((dbError)=> { 
        console.error(dbError);
    })
});

router.get("/create",(req, res) => {
        res.render("dashboard/artistCreate.hbs");
});


router.get("/update/:id",(req, res) => {
    ArtistModel.findById(req.params.id)
    .then((dbRes) => {
        res.render("dashboard/artistUpdate.hbs",{artists:dbRes});
    }).catch((dbError)=> { 
        console.error(dbError);
    })

});

router.get("/delete/:id",(req, res) => {
    ArtistModel.findByIdAndDelete(req.params.id)
    .then((dbRes) => { 
        res.redirect("/dashboard/artists",{artists:dbRes});
    }).catch((dbError)=> {
        console.error(dbError)
    })
    
});

/* POST artist page. */

router.post("/",(req, res) => {
    // res.render("/dashboard/artists");
    const { name, isBand, description, picture} = req.body;
    ArtistModel.create({
        name, isBand : isBand === "on", description, picture
    }).then((dbRes)=> {
        res.render("/dashboard/artists.hbs");
    }).catch((dbError)=>{
        console.error(dbError);
    })
});

router.post("/:id",(req, res) => {
    const { name, isBand, description, picture} = req.body;
    ArtistModel.findByIdAndUpdate(req.params.id,{
        name, isBand : isBand === "on", description, picture
    }).then((dbRes)=> {
        res.render("/dashboard/artists.hbs");
    }).catch((dbError)=>{
        console.error(dbError);
    })
});

module.exports = router;
