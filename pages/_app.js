// pages/_app.js

import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function Header() {
  return (
    <header className="top-0 bg-blue-600 text-slate-200 text-sm">
      <p className="text-xl float-right">Notes</p>
      <p><a href="https://www.alchemy.com/"><img className="float-left" src="https://www.gitbook.com/cdn-cgi/image/width=24,height=24,fit=contain,dpr=1.6500000953674316,format=auto/https%3A%2F%2F3169887760-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MB17w56kk7ZnRMWdqOL%252Favatar-1631043648701.png%3Fgeneration%3D1631043649203081%26alt%3Dmedia" height="18" width="18f" />
      Alchemy</a> <a href="https://docs.alchemy.com/alchemy/road-to-web3/welcome-to-the-road-to-web3">Road to Web3</a>
      </p>
      <p>Week 10: Decentralized Twitter with Lens Protocol</p>
      <p className="text-xs">[<a href="https://docs.alchemy.com/alchemy/road-to-web3/weekly-learning-challenges/10.-how-to-create-a-decentralized-twitter-with-lens-protocol">blog</a>] [<a href="https://www.youtube.com/channel/UCtvTdPZWUwW4whk9CLlCBug">video</a>]</p>
      <p className="underline">Challenges:</p>
      <ol className="list-decimal">
        <li>challenge 1</li>
        <li>challenge 2</li>
      </ol>
    </header>
  )
}

function Nav() {
  return (
    <nav className="sticky top-0 bg-slate-900 text-slate-200">breadcrumbs placeholder: 1 2 3</nav>
  )
}

function Footer() {
  return (
    <footer className="sticky bottom-0 text-xs bg-slate-900 text-slate-200">
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