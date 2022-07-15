import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import fetchNFTQuery from "../../queries/fetchNFTQuery.js";
import Profile from "../../components/Profile.js";
import Nft from "../../components/Nft.js";

export default function WalletPage() {
  const router = useRouter();
  const { addy } = router.query;

  console.log("fetching NFTs for", addy);
  const { loading, error, data } = useQuery(fetchNFTQuery, {
    variables: {
      request: {
        ownerAddress: addy,
        chainIds: [1], // 1:ethereum, 137:polygon, 42:kovan, 80001:mumbai
        limit: 5
      },
    },
  });

  if (loading) return "Loading..";
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <div className="flex flex-col p-8 items-center">
      {data.nfts.items.map((nft, idx) => {
        return <Nft key={idx} nft={nft}/>;
      })}
    </div>
  );
}