const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res) => {
        res.render('pages/index', { pageTitle: 'Welcome' });
    });
    return router;
}

// app.get('/speakers', (req, res) => {
//     res.sendFile(path.join(__dirname, './static/speakers.html'));
// });
