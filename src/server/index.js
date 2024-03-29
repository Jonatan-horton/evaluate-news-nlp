const dotenv = require('dotenv');
dotenv.config();

var path = require('path')

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');


const mockAPIResponse = require('./mockAPI.js')
const apiKey = process.env.API_KEY;
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";

const app = express()

app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile(path.resolve('dist/index.html'))
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post("/article", async(req, res) => {
    const apiData = await fetch(`${baseUrl}${apiKey}&lang=auto&url=${req.body.formUrl}`, {
        method: 'POST'
    });

    try {
        const data = await apiData.json();
        res.send(data);
    } catch (err) {
        console.log("error", err);
    }
});
