const express = require('express');

const speakerRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
    const { speakersService } = params;
    router.get('/', async (req, res) => {

        // if (!req.session.visitcount) {
        //     req.session.visitcount = 0;
        // }
        // req.session.visitcount += 1;
        // console.log(`Number of visits: ${req.session.visitcount}`);

        const artwork = await speakersService.getAllArtwork();
        const topSpeakers = await speakersService.getList();
        res.render('layout', { pageTitle: 'Welcome', template: 'index', topSpeakers, artwork });
    });

    router.use('/speakers', speakerRoute(params));
    router.use('/feedback', feedbackRoute(params));

    return router;
}


