export const shorten_Ether_address = (full_address) => {
    return `${full_address.substring(0, 5)}...${full_address.substring(full_address.length - 4)}`
}

const addy_to_clip = (txt = "", short_txt = "") => {
    return function () {
        navigator.clipboard.writeText(txt);
        console.log(`copied ${short_txt} to clipboard`);
    }
}

export const Etherscan_copy_link = ({ full_address }) => {
    const address_display = shorten_Ether_address(full_address)

    return (
        <div className="d-flex cursor-pointer hover:italic">
            <a target={"_blank"} rel="noreferrer" href={`https://etherscan.io/${full_address}`}>{address_display} </a>
            <i className="fa fa-copy" onClick={addy_to_clip(`${full_address}`, `${address_display}`)}></i>
        </div>
    )
}