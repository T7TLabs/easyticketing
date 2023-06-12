import EventABI from '../abis/contracts/Event.sol/Event.json';
import BaseABI from '../abis/contracts/Base.sol/Base.json';
import AssetsMonitoringABI from '../abis/contracts/AssetsMonitoring.sol/AssetsMonitoring.json';

export const supportedNetworks = [{
    80001: "Mumbai",
}];

export const contracts = {
    addresses: {
        event: {
            80001: "",
        },
        base: {
            80001: "",
        },
        assetsMonitoring: {
            80001: "",
        },
    },
    abis: {
        event: EventABI.abi,
        base: BaseABI.abi,
        assetsMonitoring: AssetsMonitoringABI.abi,
    },
};
