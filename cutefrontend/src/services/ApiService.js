import Web3 from "web3";

import { supportedNetworks, contracts } from "../constants/mappings";

class ApiService {
    walletAddr;

    async connectWallet() {
        if (window.web3) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            window.ethereum.on('chainChanged', (chainId) => {
                console.log(chainId)
            });
            
            this.walletAddr = accounts[0];

            return accounts[0];
        }
    }

    setWeb3Provider() {
        if (window.ethereum && !window.web3) {
            window.web3 = new Web3(Web3.givenProvider);
        }
    }

    getContract(name) {
        const contractOf = new window.web3.Contract(contracts.abis[name], contracts.addresses[name]);

        try {

        } catch (err) {

        }
    }

    createEvent(eventData) {

    }

    buyEventTicket() {

    }

    getBestTokenToPayWith() {

    }
}

const api = new ApiService();

export default api;
