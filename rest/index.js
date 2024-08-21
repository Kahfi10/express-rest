const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'Alice',
        comment: 'I love your website!'
    },
    {
        username: 'Bob',
        comment: 'Great job.'
    },
    {
        username: 'Charlie',
        comment: 'Nice work.'
    },
    {
        username: 'David',
        comment: 'I love it.'
    },
    {
        username: 'Eve',
        comment: 'Keep it up.'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

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