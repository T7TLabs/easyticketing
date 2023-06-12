import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllEventsPage from './pages/AllEventsPage';
import CreateEventPage from './pages/CreateEventPage';
import MyTicketsPage from './pages/MyTicketsPage';
import WalletConnector from './components/WalletConnector';

import Container from '@mui/material/Container';

const routes = [{
    path: '/event', 
    element: <CreateEventPage />,
}, {
    path: '/my-tickets', 
    element: <MyTicketsPage />,
}, {
    path: '/', 
    element: <AllEventsPage />,
}];

const router = createBrowserRouter(routes);

const App = () => {
    return (
        <Container>
            <WalletConnector />
            <RouterProvider router={router} />
        </Container>
    );
};

export default App;
