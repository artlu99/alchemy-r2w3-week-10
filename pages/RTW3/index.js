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
                <div className="flex min-h-screen">
                    <div className="p-8 text-center">
                        <div className="font-bold"><h1>Welcome, fren!</h1></div>
                        <button onClick={disconnect}>Disconnect</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex min-h-screen">
                    <div className="p-8 text-center">
                        <div className="font-bold"><h1>Gm, please sign with a wallet which holds a Week 3 PoK.</h1></div>
                        <button onClick={disconnect}>Disconnect</button>
                    </div>
                </div>

            )
        }
    } else {
        return (
            <div className="flex min-h-screen">
                <div className="p-8 text-center">
                    <button className="hidden" onClick={saveSigningCondition}>Save Signing Condition|</button>
                    <button onClick={retrieveJWT}>Sign in</button>
                    <div className="text-xs">(please use a wallet that holds a MintKudos🎉 Alchemy Road To Web3 Week3 PoK)</div>
                </div>
            </div>
        )
    }
}