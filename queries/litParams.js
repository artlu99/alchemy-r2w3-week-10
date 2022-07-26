export const lit_chain = 'polygon';

// TokenId 611 is Week Two
export const accessControlConditions = [
    {
        chain: 'polygon',
        contractAddress: '0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6',
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

export const resourceId = {
    baseUrl: 'http://localhost:3000',
    path: '/R2W3',
    orgId: "Alchemy",
    role: "Road To Web3",
    extraData: ""
};