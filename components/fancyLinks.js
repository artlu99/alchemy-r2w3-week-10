export const shorten_Ether_address = (full_address) => {
    return `${full_address.substring(0, 5)}...${full_address.substring(full_address.length - 4)}`
}