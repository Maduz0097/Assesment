const express = require('express');
const { google } = require('googleapis');
const app = express();


const credentials = {
    client_id: '222050374544-blflofp3hsuivfqi1809oefmchatlueh.apps.googleusercontent.com',
    client_secret: 'wEScKhqG-1AlVeOm6u-86pLd',
    redirect_uri: 'http://localhost:3000/oauth2callback'
};

const oAuth2Client = new google.auth.OAuth2(
    credentials.client_id,
    credentials.client_secret,
    credentials.redirect_uri
);

app.get('/authorization-url', (req, res) => {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/calendar.readonly']
    });

    res.json({ authorizationUrl: authUrl });
});

app.get('/oauth2callback', async (req, res) => {
    const { code } = req?.query;
    console.log(code)
    try {
        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);
        res.redirect('/calendar/busy-intervals');
    } catch (error) {
        console.error('Error exchanging authorization code:', error);
        res.status(500).send('Error exchanging authorization code');
    }
});


const calendar = google.calendar({
    version: 'v3',
    auth: oAuth2Client
});


app.get('/calendar/busy-intervals', async (req, res) => {
    // console.log(req.query)

    const calendarId = 'aymperera@gmail.com';
    const startTime = '2020-06-01T00:00:00.000Z';
    const endTime = '2023-06-10T00:00:00.000Z';

    try {
            const response = await calendar.events.list({
                calendarId,
                timeMin: startTime,
                timeMax: endTime,
                singleEvents: true,
                orderBy: 'startTime'
            });

            const busyIntervals = response?.data?.items?.map(event => {
                const start = event?.start?.dateTime || event?.start?.date;
                const end = event?.end?.dateTime || event?.end?.date;
            return { start, end };
        });

        res.json(busyIntervals);
    } catch (error) {
        console.error('Error retrieving busy intervals:', error);
        res.status(500).send('Error retrieving busy intervals');
    }
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
