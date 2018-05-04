import Web3EthContract from "web3-eth-contract";
export default new Web3EthContract(
    [
        {
            constant: false,
            inputs: [
                {
                    name: "x",
                    type: "uint256"
                }
            ],
            name: "set",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            constant: true,
            inputs: [],
            name: "get",
            outputs: [
                {
                    name: "",
                    type: "uint256"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        }
    ]
);
