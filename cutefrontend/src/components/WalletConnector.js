import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import api from '../services/ApiService';

const WalletConnector = () => {
    const [wallet, setWallet] = useState(localStorage.getItem("wallet"));

    useEffect(() => {
        api.setWeb3Provider();
    }, []);

    const connect = async () => {
        const address = await api.connectWallet();

        if (address) {
            localStorage.setItem("wallet", address);
        }

        setWallet(address);
    };

    return <div className="wallet-connector">
        {wallet ? <b>{wallet}</b> : <Button onClick={connect}>Connect wallet</Button>}
    </div>;
};

export default WalletConnector;
