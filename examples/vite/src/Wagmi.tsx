"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http, createConfig, WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'

const config = createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: http()
    },
})

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
