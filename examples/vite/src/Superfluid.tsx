"use client"

import { useReadCfaCfaHookGasLimit } from "sdk/wagmi"
import { mainnet } from "wagmi/chains"

export function Superfluid() {
    const { data, isLoading, isError } = useReadCfaCfaHookGasLimit({
        chainId: mainnet.id
    })

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading</p>}
            {data && (
                <div>
                    <h3>CFA Hook Gas Limit</h3>
                    <p>Gas Limit: {data.toString()}</p>
                </div>
            )}
        </div>
    )
}
