const path = require('path');
const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        id: uuidv4(),
        username: 'Alice',
        comment: 'I love your website!'
    },
    {
        id: uuidv4(),
        username: 'Bob',
        comment: 'Great job.'
    },
    {
        id: uuidv4(),
        username: 'Charlie',
        comment: 'Nice work.'
    },
    {
        id: uuidv4(),
        username: 'David',
        comment: 'I love it.'
    },
    {
        id: uuidv4(),
        username: 'Eve',
        comment: 'Keep it up.'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/create', (req, res) => {
    res.render('comments/create');
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4()});
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
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