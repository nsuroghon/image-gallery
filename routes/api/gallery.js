const axios = require("axios");

// Configuring the path to read the environment variable file, .env, to get the weather api key
require('dotenv').config('../.env');

const apiKey = process.env.PIXABAY_API_KEY

class Gallery {

    /**
     * Gets the images data based on the search term
     *
     * @param {string} seachTerm
     * @return {JSON} The data response
     */
    getGalleryData = async (searchTerm) => {

        /**
         * Use get api for "By ZIP code" (https://openweathermap.org/current#zip)
         * - The "us" query stands for "United States
         * - "process.env.WEATHER_KEY" is the api key that we get from the .env file
         * - "units" query can be either imperial (Fahrenheit) or metric (Celsius)
         */
        
        const pixabayApiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&pretty=true`

        // let url = `${baseUrl}?zip=${zipCode},us&appid=${process.env.WEATHER_KEY}&units=${tempMetric}`;

        // Awaitable call to get the information from the weather api and then return the data.
        // TODO: Add error handling for this call
        return (await axios(pixabayApiUrl)).data;
    }
}

module.exports = Gallery;