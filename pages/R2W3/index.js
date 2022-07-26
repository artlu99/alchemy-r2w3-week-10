import { useState, useContext } from 'react'
import LitJsSdk from 'lit-js-sdk'
import { lit_chain, accessControlConditions, resourceId } from "../../queries/litParams.js";


export default function Home() {
    const [connected, setConnected] = useState()

    async function disconnect() {
        setConnected(false);
    }

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
                setConnected(false)
            } else {
                setConnected(true)
            }
        } catch (err) {
            console.log("accessControlConditions:", accessControlConditions)
            console.log("resourceId:", resourceId)
            console.log('error: ', err)
        }
    }

    if (connected) {
        return (
            <div className="flex min-h-screen">
                <div className="p-8 text-center">
                    <div className="font-bold"><h1>Hey now, you have made it through the gate!</h1></div>
                    <button onClick={disconnect}>Disconnect</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex min-h-screen">
                <div className="p-8 text-center">
                    <button className="hidden" onClick={saveSigningCondition}>Save Signing Condition|</button>
                    <button onClick={retrieveJWT}>Retrieve JWT</button>
                </div>
            </div>

        )
    }
}