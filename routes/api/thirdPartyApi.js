const { default: axios } = require("axios");
const router = require("express").Router();

const pixabayApiUrl = "https://pixabay.com/api/?key=22126125-95b100b3f165139e739090fac&q=&image_type=photo&pretty=true"
// remove term 
// "https://pixabay.com/api/?key=22126125-95b100b3f165139e739090fac&q=${term}&image_type=photo&pretty=true"

// const getImages = (url,cb) => {
//     axios({
//         method: 'GET',
//         url: pixabayApiUrl,
//     })
//     .then( result => {
//         console.log(result)
//     });
//     cb(result)
//     .catch (err => {
//         console.log(err);
//         cb([])
//     })
// }

// var API_KEY = 'YOUR_API_KEY';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });

module.export = router;