"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, WagmiProvider } from 'wagmi'
import { superfluidMainnets, superfluidMainnetTransports, superfluidTestnets } from 'sdk/config'

const config = createConfig({
    chains: [...superfluidMainnets, ...superfluidTestnets],
    transports: {
        ...superfluidMainnetTransports,
        ...allDefaultTestnetTransports
    }
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
