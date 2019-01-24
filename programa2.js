const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
        console.log(data);
    });
    
}).on("error", (err) => {
    console.log("Error: "+ err.message);
});
