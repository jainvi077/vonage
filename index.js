const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook/status', (req, res) => {
   console.log('Received Vonage status webhook:');
    
    // Log all headers
    console.log('Headers:');
    Object.entries(req.headers).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });

    // Log the body
    console.log('Body:', req.body);

    res.send('OK');
});

app.get('/', (req, res) => {
    res.send('Webhook listener is running.');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
