// components/Nft.js
export default function Nft(props) {
  const nft = props.nft;

  // TODO: full parser for URI to handle different image types

  return (
    <div className="w-1/6 flex flex-col">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <img src={nft.originalContent.uri} />
          <div className="mt-2 text-xs text-slate-500 whitespace-pre-line">
            {nft.name}
          </div>
        </div>
      </div>
    </div>
  );
}