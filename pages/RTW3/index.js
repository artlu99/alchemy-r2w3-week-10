import { useState, useContext } from 'react'
import LitJsSdk from 'lit-js-sdk'
import { lit_chain, accessControlConditions, resourceId } from "../../queries/litParams.js";


export default function Home() {
    const [connected, setConnected] = useState();
    const [verifiedCredential, setVerifiedCredential] = useState();

    async function disconnect() {
        setConnected(false);
        setVerifiedCredential(false);
    }

    // this is an admin style function, not a normal user function
    async function saveSigningCondition() {
        const litNodeClient = new LitJsSdk.LitNodeClient({
            alertWhenUnauthorized: false,
            debug: false
        })
        await litNodeClient.connect()
        var authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: lit_chain });

        try {
            await litNodeClient.saveSigningCondition({
                accessControlConditions: accessControlConditions,
                chain: lit_chain,
                authSig: authSig,
                resourceId: resourceId,
                permanent: false
            })
            console.log("Lit: successfuly saved accessControlConditions + resourceId");
        } catch (err) {
            console.log(err);
        }
    }

    async function retrieveJWT() {
        const litNodeClient = new LitJsSdk.LitNodeClient({
            alertWhenUnauthorized: false,
            debug: false
        })
        await litNodeClient.connect()
        var authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: lit_chain });

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
                        <div className="font-bold"><h1>Welcome, fren!</h1></div>
                        <div className="p-8">
                            <button type="button" onClick={disconnect} className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                Disconnect
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex min-h-screen justify-center">
                    <div className="p-8 text-center">
                        <div className="font-bold"><h1>Gm, please sign with a wallet which holds a Week 3 PoK.</h1></div>
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
                            <svg className="w-4 h-4 mr-2 -ml-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}