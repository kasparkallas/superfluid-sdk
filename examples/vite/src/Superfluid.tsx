"use client"

import { useReadCfaV1MaximumFlowRate } from "sdk/wagmi"
import { mainnet } from "wagmi/chains"

export function Superfluid() {
    const { data, isLoading, isError } = useReadCfaV1MaximumFlowRate({
        chainId: mainnet.id
    })

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading</p>}
            {data && (
                <div>
                    <h3>CFA Maximum Flow Rate:</h3>
                    <p>{data.toString()}</p>
                </div>
            )}
        </div>
    )
}
