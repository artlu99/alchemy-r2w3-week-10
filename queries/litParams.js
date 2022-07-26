export const lit_chain = 'polygon';

// TokenId 611 is Week Two
// Lit RPC calls are currently failing
// https://lit-share-modal-v3-playground.netlify.app/ reports '611' is invalid 
// in red: ERC1155 token id is invalid
export const accessControlConditionsKudos = [
    {
        chain: 'polygon',
        contractAddress: '0x74F77E0E4F3E3eFfBD55fd1F85C00C921D7Af160',
        method: 'balanceOf',
        parameters: [
            ':userAddress',
            '611'
        ],
        returnValueTest: {
            comparator: '>',
            value: '0'
        },
        standardContractType: 'ERC1155'
    }
];

export const accessControlConditions = [
    {
        "contractAddress": "",
        "standardContractType": "",
        "chain": "polygon",
        "method": "",
        "parameters": [
            ":userAddress"
        ],
        "returnValueTest": {
            "comparator": "=",
            "value": "0x1E384a6884fBE0b75978c6589f4C909079aeB359"
        }
    }
]

export const resourceId = {
    baseUrl: 'http://localhost:3000',
    path: '/R2W3',
    orgId: "Alchemy",
    role: "Road To Web3",
    extraData: ""
};