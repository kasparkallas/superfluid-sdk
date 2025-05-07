import { arbitrum, avalanche, avalancheFuji, base, baseSepolia, bsc, celo, degen, gnosis, mainnet, optimism, optimismSepolia, polygon, scroll, scrollSepolia, sepolia } from "viem/chains";
import { http, type Transport, fallback } from "viem";

export const superfluidMainnets: readonly [
	typeof base,
	typeof arbitrum,
	typeof avalanche,
	typeof bsc,
	typeof celo,
	typeof degen,
	typeof gnosis,
	typeof mainnet,
	typeof optimism,
	typeof polygon,
	typeof scroll
] = [
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
]

type MainnetChainId = typeof superfluidMainnets[number]['id'];

export const superfluidTestnets: readonly [
    typeof baseSepolia,
    typeof avalancheFuji,
    typeof optimismSepolia,
    typeof scrollSepolia,
    typeof sepolia
] = [
    baseSepolia,
    avalancheFuji,
    optimismSepolia,
    scrollSepolia,
    sepolia
]

type TestnetChainId = typeof superfluidTestnets[number]['id'];

export const superfluidMainnetTransports: Record<MainnetChainId, Transport> = {
    [base.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/base-mainnet")
    ]),
    [arbitrum.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/arbitrum-one")
    ]),
    [avalanche.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/avalanche-c")
    ]),
    [bsc.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/bsc-mainnet")
    ]),
    [celo.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/celo-mainnet")
    ]),
    [degen.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/degenchain")
    ]),
    [gnosis.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/xdai-mainnet")
    ]),
    [mainnet.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/eth-mainnet")
    ]),
    [optimism.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/optimism-mainnet")
    ]),
    [polygon.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/polygon-mainnet")
    ]),
    [scroll.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/scroll-mainnet")
    ])
};

export const superfluidTestnetTransports: Record<TestnetChainId, Transport> = {
    [baseSepolia.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/base-sepolia")
    ]),
    [avalancheFuji.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/avalanche-fuji")
    ]),
    [optimismSepolia.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/optimism-sepolia")
    ]),
    [scrollSepolia.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/scroll-sepolia")
    ]),
    [sepolia.id]: fallback([
        http(),
        http("https://rpc-endpoints.superfluid.dev/eth-sepolia")
    ])
};
