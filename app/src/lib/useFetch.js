import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = '969972683793-nsa3jka36crpu6atno9m8ukbhjl0favt.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDkk7AXK59mGwyAe3cTB4gwiXus4YerUQE';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

const useFetch = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        gapi.load('client:auth2', initClient);
    }, []);

    const initClient = () => {
        window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(() => {
            window.gapi.auth2.getAuthInstance().signIn().then(() => {
                loadCalendarEvents();
            })
        })
    };

    // const handleAuthChange = (isSignedIn) => {
    //     if (isSignedIn) {
    //         console.log("Signed in");
    //         loadCalendarEvents();
    //     } else {
    //         window.gapi.auth2.getAuthInstance().signIn();
    //     }
    // };

    const loadCalendarEvents = () => {
        const now = new Date();
        const threeDaysAgo = new Date(now - 3 * 24 * 60 * 60 * 1000)
        window.gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': threeDaysAgo.toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 15,
            'orderBy': 'startTime'
        }).then((response) => {
            const items = response.items;
            const formattedEvents = items.map((item) => {
                return {
                    title: item.summary,
                    start: item.start.dateTime || item.start.date,
                    end: item.end.dateTime || item.end.date,
                };
            });
            console.log(formattedEvents)
            setEvents(formattedEvents);
        });
    };

    return events
};

export default useFetch;