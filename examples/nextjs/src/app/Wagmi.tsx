"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http, createConfig, WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'

export const config = createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: http()
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
