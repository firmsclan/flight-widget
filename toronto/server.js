const PORT = 8000
const cors =require('cors');
const express =require('express');
const axios  = require("axios").default;
const app = express();
require('dotenv').config();
app.use(cors());
app.get('flights', (req,res)=>{
    const options = {
        method:'GET',
        url:'https://toronto-pearson-airport.p.rapidapi.com/arrivals/carousel/9',
        headers:{
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host':process.env.RAPID_API_HOST,
        }
    };
    axios.request(options).then(function(response){
        console.log(response.data);
    }).catch(function(error){
        console.error(error);
    })    
});
app.listen(PORT, () => console.log(`running on PORT ${PORT}`))