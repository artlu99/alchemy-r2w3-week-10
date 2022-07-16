// pages/_app.js

import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function Header() {
  return (
    <header className="top-0 bg-blue-600 text-slate-200 text-sm">
      <p><a href="https://www.alchemy.com/"><img className="float-left" src="https://www.gitbook.com/cdn-cgi/image/width=24,height=24,fit=contain,dpr=1.6500000953674316,format=auto/https%3A%2F%2F3169887760-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MB17w56kk7ZnRMWdqOL%252Favatar-1631043648701.png%3Fgeneration%3D1631043649203081%26alt%3Dmedia" height="18" width="18f" />
        Alchemy</a> <a href="https://docs.alchemy.com/alchemy/road-to-web3/welcome-to-the-road-to-web3">Road to Web3</a>
      </p>
      <p>Week 10: Decentralized Twitter with Lens Protocol</p>
      <p className="text-xl float-right">Notes</p>
      <p className="text-xs">[<a href="https://docs.alchemy.com/alchemy/road-to-web3/weekly-learning-challenges/10.-how-to-create-a-decentralized-twitter-with-lens-protocol">blog</a>] [<a href="https://www.youtube.com/channel/UCtvTdPZWUwW4whk9CLlCBug">video</a>]</p>
      <p> &nbsp; </p>
      <p className="text-sm float-right">posts: click posts count</p>
      <p className="underline">Challenges:</p>
      <p className="text-sm float-right">NFTs: click wallet address</p>
      <ol>
        <li>- [UX] show timestamp on each post</li>
        <p className="text-sm float-right">frens: click following count</p>
        <li>- [UX] reformat profile # followers, following, posts count</li>
        <li>- [UX] reformat posts # collects, mirrors, comments count</li>
        <li>- [new Lens API call] wallet address becomes link to show NFTs (future: use Alchemy API not Lens API)</li>
        <li>- [new Lens API call] following count becomes link to show Following (work in progress)</li>
      </ol>
      <hr />
    </header>
  )
}

function Nav() {
  return (
    <nav className="sticky top-0 bg-blue-600 text-slate-200">
      <div className="text-xs">(placeholder)</div>
      <div className="text-blue-600">breadcrumbs : 1 2 3</div>
      <hr />
    </nav>
  )
}

function Footer() {
  return (
    <footer className="sticky bottom-0 text-xs bg-blue-600 text-slate-200">
      <hr />
      <p className="float-right"> <a href="https://www.twitter.com/artlu99">@artlu99</a></p>
      <p><a href="https://github.com/artlu99/alchemy-r2w3-week-10">GitHub</a></p>
    </footer>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp