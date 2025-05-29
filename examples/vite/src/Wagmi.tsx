"use client"

import { superfluidMainnets, superfluidMainnetTransports, superfluidTestnets, superfluidTestnetTransports } from 'sdk/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, WagmiProvider } from 'wagmi'
import { fallback, http } from 'viem';
import { arbitrum, avalanche, base, bsc, celo, degen, gnosis, mainnet, optimism, polygon } from 'viem/chains';

const chains = [
    base,
	arbitrum,
	avalanche,
	bsc,
	celo,
	degen,
	gnosis,
	mainnet,
	optimism,
	polygon,
	scroll
] as const;

const transports = {
    [mainnet.id]: fallback([
        http(),
    ])
} as const;

const config = createConfig({
    chains: superfluidMainnets,
    transports: superfluidMainnetTransports
})

// const config = createConfig({
//     chains: [...superfluidMainnets, ...superfluidTestnets],
//     transports: {
//         ...superfluidMainnetTransports,
//         ...superfluidTestnetTransports
//     }
// })

declare module 'wagmi' {
    interface Register {
        config: typeof config
    }
}

const queryClient = new QueryClient();

export function Wagmi(props: {
    children: React.ReactNode
}) {
    const { children } = props;

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}
