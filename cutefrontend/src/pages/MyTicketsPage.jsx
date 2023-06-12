import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MyTicketsPage = () => {
    const [myTickets, setMyTickets] = useState(["ethPrague"]);

    return (
        <>
            <h2>My Tickets</h2>
            <div className="my-tickets-container">
                {myTickets.map(ticket => <Card>
                    <CardContent>
                        <b>{ticket}</b>
                        <p>Date: DD/MM/YYYY</p>
                    </CardContent>
                </Card>)}
            </div>
        </>
    );
};

export default MyTicketsPage;
