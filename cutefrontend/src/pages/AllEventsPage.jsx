import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const AllEventsPage = () => {
    const [allEvents, setAllEvents] = useState(["ethPrague", "ethGlobal", "chainlink hack"]);

    return (
        <>
            <h2>All Events</h2>
            <div className="events-container">
                {allEvents.map(event => <Card>
                    <CardContent>
                        <b>{event}</b>
                        <p>Ticket price: 0.01ETH</p>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained">Buy ticket</Button>
                    </CardActions>
                </Card>)}
            </div>
        </>
    );
};

export default AllEventsPage;
