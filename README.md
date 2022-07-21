## Lens-AL [by @artlu.lens](https://lenster.xyz/u/artlu.lens)

A read-only / gated community, inspired by the [Alchemy](https://www.alchemy.com/) [Road to Web3](https://docs.alchemy.com/alchemy/road-to-web3/welcome-to-the-road-to-web3) [Week 10](https://docs.alchemy.com/alchemy/road-to-web3/weekly-learning-challenges/10.-how-to-create-a-decentralized-twitter-with-lens-protocol).

## A Decentralized Social Network with Lens Protocol 🌿

- Next.js w/ Apollo GraphQL client
- Lens Protocol via Lens API

## Roadmap / Major milestones

1. ✅ show NFTs owned by this profile/address pair 🗸
2. ✅ show each profile's Following profiles 🗸
      1. ✅ replace "recommendedProfiles" with "members of R2W3 community" based on Follows 🗸
3. ✅ show comments on posts 🗸
4. ✅ dark mode ([[src](https://blog.logrocket.com/dark-mode-in-react-an-in-depth-guide/)], with TailwindCSS [[src](https://nextjsdev.com/add-dark-mode-in-nextjs-app-using-tailwind-css-dark-mode/)]) 🗸
5. ✅ navbar at top/bottom of page (e.g., quick links to Lenster) 🗸
   1. dynamic breadcrumbs
6. Lit Protocol SDK to token-gate access for MintKudos token holders
7. show other (arbitrary) profile attributes set by dApps, such as the list of attributes

## Links
* Week 10 kick-off [tweet](https://twitter.com/thatguyintech/status/1547585019983499268) by [@thatguyintech](https://twitter.com/thatguyintech)
* Join the [Lenster](https://lenster.xyz) [Road To Web3](https://lenster.xyz/communities/0x25c4-0x0c) Lenster community
* [GraphiQL Bin](https://graphiqlbin.com/) for interactive query building, e.g., https://api.lens.dev/ endpoint h/t [@gabrieldg.lens (GdG)](https://lenster.xyz/u/gabrieldg.lens)
)

### Technical debt
1. ✅ read from file for global config variables (e.g., initial Follow address, page limits) 🗸
2. remove wallet addresses, let the webapp remember/figure out the profileId mapping
3. icons for navbar text links, should look roughly like Mozilla Pocket navbar
4. Apollo "ensure all objects of type MetadataOutput have an ID"
5. recurse-with-limits instead of tree-based navigation. comments-on-comments should appear correctly
6. paging of API call results
7. replace Lens API call to get NFTs, with Alchemy NFT API call (slightly cleaner, simpler)

### Deploy

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The easiest way to deploy a Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Further details in the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
