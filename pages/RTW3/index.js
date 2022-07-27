import { useState } from 'react'
import LitJsSdk from 'lit-js-sdk'
import { lit_chain, accessControlConditions, resourceId } from "../../queries/litParams.js"


export default function Home() {
    const [connected, setConnected] = useState()
    const [verifiedCredential, setVerifiedCredential] = useState()

    async function disconnect() {
        setConnected(false)
        setVerifiedCredential(false)
    }

    // this is an admin style function, not a normal user function
    async function saveSigningCondition() {
        const litNodeClient = new LitJsSdk.LitNodeClient({
            alertWhenUnauthorized: false,
            debug: false
        })
        await litNodeClient.connect()
        var authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: lit_chain })

        try {
            await litNodeClient.saveSigningCondition({
                accessControlConditions: accessControlConditions,
                chain: lit_chain,
                authSig: authSig,
                resourceId: resourceId,
                permanent: false
            })
            console.log("Lit: successfuly saved accessControlConditions + resourceId")
        } catch (err) {
            console.log(err)
        }
    }

    async function retrieveJWT() {
        const litNodeClient = new LitJsSdk.LitNodeClient({
            alertWhenUnauthorized: false,
            debug: false
        })
        await litNodeClient.connect()
        var authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: lit_chain })

        setConnected(true)

        try {
            const jwt = await litNodeClient.getSignedToken({
                accessControlConditions: accessControlConditions,
                chain: lit_chain,
                authSig: authSig,
                resourceId: resourceId
            })

            const { verified, header, payload } = LitJsSdk.verifyJwt({ jwt })

            // verify payload as good practice
            if (!verified ||
                payload.baseUrl !== resourceId.baseUrl ||
                payload.chain !== lit_chain ||
                payload.path !== resourceId.path ||
                payload.orgId !== resourceId.orgId ||
                payload.role !== resourceId.role ||
                payload.extraData !== resourceId.extraData
            ) {
                console.log("JWT payload values do not match expected")
                setVerifiedCredential(false)
            } else {
                setVerifiedCredential(true)
            }
        } catch (err) {
            console.log(err)
            setVerifiedCredential(false)
        }
    }

    if (connected) {
        if (verifiedCredential) {
            return (
                <div className="flex min-h-screen justify-center">
                    <div className="p-8 text-center">
                        <div>
                            <h1 className="font-bold">Welcome, fren!</h1>
                            <h2 className="m-2">Some AMAZING <a href="https://twitter.com/LensProtocol" target="_blank" rel="noopener noreferrer">@LensProtocol</a> projects, built by Road To Web3 builders 👏🏼</h2>
                            <div className="text-xs">12:05 PM · Jul 22, 2022·Twitter Web App</div>
                            <a href="https://twitter.com/TheRoadToWeb3/status/1550331060650512385" target="_blank" rel="noopener noreferrer">@TheRoadToWeb3</a>
                        </div>
                        <div className="flex flex-col p-2 items-center">

                            <div className="p-2 w-full">
                                <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                    <div className="md:flex">
                                        <div className="shrink-0">
                                            <a href="https://twitter.com/TheRoadToWeb3/status/1550331065927090179" target="_blank" rel="noopener noreferrer">
                                                <img height="100" width="100" alt="Vivek" src="https://pbs.twimg.com/media/FYPclZrXkAANJGq?format=jpg&name=4096x4096" />
                                            </a>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="block mt-1 text-sm leading-tight font-medium text-black dark:text-white">
                                                @theviveksuthar
                                            </div>
                                            <div>
                                                <a href="https://road-to-lens-ashy.vercel.app" target="_blank" rel="noopener noreferrer">road-to-lens-ashy.vercel.app</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                    <div className="md:flex">
                                        <div className="shrink-0">
                                            <a href="https://twitter.com/TheRoadToWeb3/status/1550331071216193536" target="_blank" rel="noopener noreferrer">
                                                <img height="100" width="100" alt="Kidrew" src="https://pbs.twimg.com/media/FYPc1SlXoAEtYfB?format=jpg&name=large" />
                                            </a>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="block mt-1 text-sm leading-tight font-medium text-black dark:text-white">
                                                @KillianeMenand
                                            </div>
                                            <div>
                                                <a href="https://lens-social-media.killiane-menand.com" target="_blank" rel="noopener noreferrer">lens-social-media.killiane-menand.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                    <div className="md:flex">
                                        <div className="shrink-0">
                                            <a href="https://twitter.com/TheRoadToWeb3/status/1550331075561414656" target="_blank" rel="noopener noreferrer">
                                                <img height="100" width="100" alt="GdG" src="https://pbs.twimg.com/media/FYPeCY6XEAEqQbz?format=jpg&name=medium" />
                                            </a>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="block mt-1 text-sm leading-tight font-medium text-black dark:text-white">
                                                @gabrieldegiuli
                                            </div>
                                            <div>
                                                <a href="https://github.com/gabriel-dg/RTW3-W10-Road-to-Lens" target="_blank" rel="noopener noreferrer">github.com/gabriel-dg/RTW3-W10-Road-to-Lens</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                    <div className="md:flex">
                                        <div className="shrink-0">
                                            <a href="https://twitter.com/TheRoadToWeb3/status/1550331080519081984" target="_blank" rel="noopener noreferrer">
                                                <img height="100" width="100" alt="Hachikoi" src="https://pbs.twimg.com/media/FYPeaInXkAU0yPk?format=jpg&name=4096x4096" />
                                            </a>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="block mt-1 text-sm leading-tight font-medium text-black dark:text-white">
                                                @8koi2
                                            </div>
                                            <div>
                                                <a href="https://social-theta.vercel.app/profile/0x25c4" target="_blank" rel="noopener noreferrer">social-theta.vercel.app</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                    <div className="md:flex">
                                        <div className="shrink-0">
                                            <a href="https://twitter.com/TheRoadToWeb3/status/1550331085527154688" target="_blank" rel="noopener noreferrer">
                                                <img height="100" width="100" alt="LesC" src="https://pbs.twimg.com/media/FYPfLFvX0AEK-Qh?format=jpg&name=large" />
                                            </a>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="block mt-1 text-sm leading-tight font-medium text-black dark:text-white">
                                                @lescarbonaro
                                            </div>
                                            <div>
                                                <a href="https://rtw3-road-to-lens.vercel.app/profile/0x1127" target="_blank" rel="noopener noreferrer">rtw3-road-to-lens.vercel.app</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                    <div className="md:flex">
                                        <div className="shrink-0">
                                            <a href="https://twitter.com/TheRoadToWeb3/status/1550331096067448832" target="_blank" rel="noopener noreferrer">
                                                <img height="100" width="100" alt="Michael Bivens" src="https://pbs.twimg.com/media/FYPgsWPWIAE_fRF?format=jpg&name=large" />
                                            </a>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="block mt-1 text-sm leading-tight font-medium text-black dark:text-white">
                                                @MSBivens_
                                            </div>
                                            <div>
                                                <a href="https://road-to-lens-virid.vercel.app" target="_blank" rel="noopener noreferrer">road-to-lens-virid.vercel.app</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                    <div className="md:flex">
                                        <div className="shrink-0">
                                            <a href="https://twitter.com/TheRoadToWeb3/status/1550405145044721664" target="_blank" rel="noopener noreferrer">
                                                <img height="100" width="100" alt="ADIL" src="https://pbs.twimg.com/media/FX8S8GNUEAAtsfO?format=jpg&name=medium" />
                                            </a>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="block mt-1 text-sm leading-tight font-medium text-black dark:text-white">
                                                @kazani351
                                            </div>
                                            <div>
                                                <a href="">&nbsp;</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-600 dark:bg-slate-800">
                                <img src="/emojibest_com_Orangoutang_003.gif" alt="thumbs up" height="200" width="200" />
                            </div>

                            <div className="p-2">
                                <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                    <div className="md:flex">
                                        <div className="shrink-0">
                                            <img height="100" width="100" alt="elonmusk" src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg" />
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="block mt-1 text-sm leading-tight font-medium text-black dark:text-white">
                                                @elonmusk
                                            </div>
                                            <div>
                                                <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">Mars & Cars, Chips & Dips</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2">
                                <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                    <div className="md:flex">
                                        <div className="shrink-0">
                                            <img height="100" width="100" alt="eIonmusk-fake" src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg" />
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="block mt-1 text-sm leading-tight font-medium text-black dark:text-white">
                                                @eIonmusk
                                            </div>
                                            <div>
                                                <a href="https://twitter.com/eIonmusk" target="_blank" rel="noopener noreferrer">suspended fake account</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-8">
                            <button type="button" onClick={disconnect} className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                Disconnect
                            </button>
                        </div>
                    </div>
                </div >
            )
        } else {
            return (
                <div className="flex min-h-screen justify-center">
                    <div className="p-8 text-center">
                        <div>
                            <h1 className="font-bold">GM</h1>
                            Please sign with a wallet which holds a Week 3 PoK.
                        </div>
                        <div className="p-8">
                            <button type="button" onClick={disconnect} className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                Disconnect
                            </button>
                        </div>
                    </div >
                </div >
            )
        }
    } else {
        return (
            <div className="flex min-h-screen justify-center">
                <div className="p-8 text-center">
                    <button className="hidden" onClick={saveSigningCondition}>Save Signing Condition|</button>
                    <div className="text-xs">(please use a wallet that holds a MintKudos🎉 Alchemy Road To Web3 Week3 PoK)</div>
                    <div className="p-8">
                        <button type="button" onClick={retrieveJWT} className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                            <svg className="w-8 h-8" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg">
                                <path d="m29 10.2c-.7-.4-1.6-.4-2.4 0l-5.6 3.3-3.8 2.1-5.5 3.3c-.7.4-1.6.4-2.4 0l-4.3-2.6c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0l4.3 2.6c.7.4 1.2 1.2 1.2 2.1v3.3l3.8-2.2v-3.4c0-.8-.4-1.6-1.2-2.1l-8-4.7c-.7-.4-1.6-.4-2.4 0l-8.2 4.8c-.8.4-1.2 1.2-1.2 2v9.4c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l5.5-3.2 3.8-2.2 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1l-4.2 2.5c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1v-3.2l-3.8 2.2v3.3c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l8.1-4.7c.7-.4 1.2-1.2 1.2-2.1v-9.5c0-.8-.4-1.6-1.2-2.1z" fill="#8247e5" fillRule="nonzero" transform="matrix(7.04961 0 0 7.04961 145 81.9191)" />
                            </svg>
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}