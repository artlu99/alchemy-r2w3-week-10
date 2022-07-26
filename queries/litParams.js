export const lit_chain = 'polygon';

// TokenId 611 is Week Two
export const accessControlConditions = [
    {
        contractAddress: '0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6',
        chain: lit_chain,
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
    baseUrl: 'https://lens-al.vercel.app/',
    path: '/RTW3',
    orgId: "Alchemy",
    role: "Road To Web3",
    extraData: "🌿+🔥+🎉"
};