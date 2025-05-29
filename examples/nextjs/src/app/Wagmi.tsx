"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, WagmiProvider } from 'wagmi'
import { superfluidMainnets, superfluidTestnets, superfluidMainnetTransports, superfluidTestnetTransports } from 'sdk/config'
import { Chain } from 'viem/chains';

export const config = createConfig({
    chains: [...superfluidMainnets, ...superfluidTestnets] as [Chain, ...Chain[]],
    transports: {
        ...superfluidMainnetTransports,
        ...superfluidTestnetTransports
    },
})

export const queryClient = new QueryClient()

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
