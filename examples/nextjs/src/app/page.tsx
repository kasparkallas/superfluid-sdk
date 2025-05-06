"use client"

import { useReadCfaMaximumFlowRate } from "sdk/wagmi"
import { mainnet } from "wagmi/chains";

export default function Home() {
    const { data, isLoading, isError } = useReadCfaMaximumFlowRate({
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
    );
}
