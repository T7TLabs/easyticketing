import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const CreateEventPage = () => {
    const [eventData, setEventData] = useState({});

    const onChangeEventData = (fieldName, e) => {
        setEventData(prev => ({
            ...prev,
            [fieldName]: e.target.value,
        }));
    };

    const onCreateEvent = () => {
        console.log(eventData)
    };

    return (
        <>
            <h2>Create Event</h2>
            <Card>
                <form className="create-event-form">
                    <Input placeholder="Type event name" onChange={e => onChangeEventData("name", e)} />
                    <Input placeholder="Type ticket price in eth" onChange={e => onChangeEventData("ticketPrice", e)} />
                    <Input placeholder="Type max ticket sell price in eth" onChange={e => onChangeEventData("ticketSellPrice", e)} />
                    <Button variant="contained" onClick={onCreateEvent}>Create</Button>
                </form>
            </Card>
        </>
    );
};

export default CreateEventPage;
