// Use express's router to route all our API endpoints
const express = require('express');
const router = express.Router();

// Use the class we made in ./gally.js to call our method that will get the data from the api
const Gallery = require("./gallery");

// GET Request - statically get the data from the api
router.get("/gallery",  async (req, res) => {
    let gallery = new Gallery();
    
    // Fixing the params of zipcode and tempMetric for an example GET request
    let galleryData = await gallery.getGalleryData("dog");

    // Content that will be sent will be a prettified json
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(galleryData, null, 4));
});

// POST Request - dynamically get the weather data based on request body
router.post("/gallery",  async (req, res) => {
    const {searchTerm} = req.body;
    let gallery = new Gallery();
    
    // The params for zipCode and tempMetric are dynamic
    let galleryData = await gallery.getGalleryData(searchTerm);

    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(galleryData, null, 4));
});

module.exports = router;