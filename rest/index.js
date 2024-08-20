const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/order', (req, res) => {
    res.send('Get Order API');
});

app.post('/order', (req, res) => {
    const {item, qty } = req.body
    res.send('Item: ' + item + ' Quantity: ' + qty);
});

app.listen(8080, () => {
    console.log('Server started on: http://localhost:8080');
})