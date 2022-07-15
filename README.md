## Week 10 - How to Create a Decentralized Twitter with Lens Protocol
[@artlu.lens](https://lenster.xyz/u/artlu.lens)

🥦 How to Build Decentralized Twitter with Lens 🔥

- Next.js w/ Apollo GraphQL client
- Fetch profiles, posts, and more
- Shoutouts to the MintKudos API, and Lit Protocol SDK

PoK NFTs minted to @TheRoadToWeb3 students who complete the challenge :)

## Challenges

1. ✅ deploy to the web at [Lens-AL](https://lens-al.vercel.app/) 🗸
2. ✅ use Lens API to query+display new information that was not covered in the tutorial
   1. ✅ add timestamp to each post, translating from server Zulu to localtime 🗸
   2. ✅ add posts count to each profile; add "like" "comments" "retweets" count to each post 🗸
   3. ✅ find+implement new endpoint from the [Lens API doc](https://docs.lens.xyz) [[src](https://github.com/aave/lens-api-examples)]
      1. ✅ show NFTs owned by this profile/address pair 🗸
      2. replace "recommendedProfiles" with "members of R2W3 community"
3. use Lit Protocol SDK to token-gate access to Lens protocol posts so that only MintKudos token holders can view them
4. use Lens API to do authentication and mutations for actions such as reacting, following, or creating new publications

## Roadmap

This repository will get frozen at the end of Week 10 for submission.  A fork will be created to develop the MVP (Minimum-Viable-Product).

1. navbar / breadcrumbs at top/bottom of page
2. show comments on posts
3. paging of API call results
4. replace Lens API call to get NFTs, with Alchemy NFT API call (slightly cleaner, simpler)

## Links
* The [Alchemy](https://www.alchemy.com/) [Road to Web3](https://docs.alchemy.com/alchemy/road-to-web3/welcome-to-the-road-to-web3) [Week 10: How to Create a Decentralized Twitter with Lens Protocol](https://docs.alchemy.com/alchemy/road-to-web3/weekly-learning-challenges/10.-how-to-create-a-decentralized-twitter-with-lens-protocol) blog post
* [Video TBA] with [@thatguyintech.lens](https://lenster.xyz/u/thatguyintech.lens) on the [Alchemy YouTube channel](https://www.youtube.com/channel/UCtvTdPZWUwW4whk9CLlCBug)
* Week 10 kick-off [tweet](https://twitter.com/thatguyintech/status/1547585019983499268) by [@thatguyintech](https://twitter.com/thatguyintech)
* Join the [Lenster](https://lenster.xyz) [Road To Web3](https://lenster.xyz/communities/0x25c4-0x0c) community

### Deploy

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The easiest way to deploy a Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Further details in the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
