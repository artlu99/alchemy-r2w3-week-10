import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { lens_logo } from '../components/Lens-assets'

export function Header() {
  return (
    <header className="top-0 text-xs">
      <p className="float-right">
        <img className="inline" alt="Alchemy" src="https://www.gitbook.com/cdn-cgi/image/width=24,height=24,fit=contain,dpr=1.6500000953674316,format=auto/https%3A%2F%2F3169887760-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MB17w56kk7ZnRMWdqOL%252Favatar-1631043648701.png%3Fgeneration%3D1631043649203081%26alt%3Dmedia" height="14" width="14" />
        &nbsp;my original&nbsp; 
        <a href="https://docs.alchemy.com/alchemy/road-to-web3/weekly-learning-challenges/10.-how-to-create-a-decentralized-twitter-with-lens-protocol" target="_blank" rel="noopener noreferrer">Week 10</a>&nbsp;
        <a href="https://lens-al-git-20220717-artlu99.vercel.app/" target="_blank" rel="noopener noreferrer">project</a>
        &nbsp;on the&nbsp;
        <a href="https://www.alchemy.com/" target="_blank" rel="noopener noreferrer">Alchemy</a>&nbsp;
        <a href="https://docs.alchemy.com/alchemy/road-to-web3/welcome-to-the-road-to-web3" target="_blank" rel="noopener noreferrer">Road to Web3</a>
      </p>
      <p> &nbsp; </p>
      <p>Lens Protocol social network via the LensAPI</p>
      <p><span className="italic">plus</span> Kudos token-gated content</p>
      <p> &nbsp; </p>
      <p>try the Dark Mode</p>
      <p>~special content for RTW3 frens with Week 3 POKs~</p>
      <hr />
    </header>
  )
}

export function Nav() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => { setMounted(true) }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon className="w-5 h-5 text-yellow-500 inline" role="button" onClick={() => setTheme('light')} />
      )
    } else {
      return (
        <MoonIcon className="w-5 h-5 text-gray-900 inline" role="button" onClick={() => setTheme('dark')} />
      )
    }
  };

  return (
    <nav className="sticky top-0">
      <div className="text-center">
        <Link href="/">Home</Link> |&nbsp;
        <Link href="/posts/0x25c4">posts</Link> &nbsp;
        <Link href="/follows/0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c">follows</Link> &nbsp;
        <Link href="/comments/0x25c4-0x0e">comments</Link> &nbsp;
        <Link href="/wallet/0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c">wallet</Link>&nbsp;
        |&nbsp;<a href="https://www.lenster.xyz" alt="Lenster" target="_blank" rel="noopener noreferrer">👋</a>&nbsp;
        <a href="https://lens.xyz" alt="Lens Protocol" target="_blank" rel="noopener noreferrer">🌿</a>&nbsp;
        {renderThemeChanger()}
      </div>
      <div className="text-center"><Link href="/RTW3" alt="Road To Web3">🔥+🎉</Link></div>
      <hr />
      {lens_logo()}
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="sticky bottom-0">
      <hr />
      <p className="float-right">
        <a href="https://github.com/artlu99/alchemy-r2w3-week-10/" target="_blank" rel="noopener noreferrer">GitHub</a>  &nbsp;
        <a href="https://www.twitter.com/artlu99" target="_blank" rel="noopener noreferrer">@artlu99</a>
      </p>
      <div className="text-center text-sm mr-2 font-bold">
        Lens-AL
      </div>
    </footer>
  )
}