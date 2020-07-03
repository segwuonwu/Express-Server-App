const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

const routes = require('./routes/index');

const app = express();

const port = 3000;

app.set('trust proxy', 1);

app.use(
    cookieSession({
        name: 'session',
        keys: ['hduh289ynchu390k', 'whhwpqnn27ty3rvb']
    })
)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

app.use(express.static(path.join(__dirname, './static')));

app.use(('/', routes({
    feedbackService,
    speakersService,
})))

app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});