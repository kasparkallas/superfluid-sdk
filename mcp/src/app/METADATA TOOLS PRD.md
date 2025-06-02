# Superfluid Metadata MCP tools PRD

## Context

Superfluid Protocol has a metadata package `@superfluid-finance/metadata`. It contains the metadata of Superfluid Protocol deployments across various networks.

I want to create an MCP endpoint that's able to quickly fetch a particular network data from the package. It's quite simple in general, just a retrieval mechanism.

### Technical

Metadata type:
```ts
interface AutowrapAddresses {
    readonly manager: string;
    readonly wrapStrategy: string;
}
interface ContractAddresses {
    readonly resolver: string;
    readonly host: string;
    readonly governance?: string;
    readonly cfaV1: string;
    readonly cfaV1Forwarder: string;
    readonly idaV1: string;
    readonly gdaV1?: string;
    readonly gdaV1Forwarder?: string;
    readonly superTokenFactory: string;
    readonly superfluidLoader: string;
    readonly toga?: string;
    readonly vestingScheduler?: string;
    readonly vestingSchedulerV2?: string;
    readonly vestingSchedulerV3?: string;
    readonly flowScheduler?: string;
    readonly batchLiquidator?: string;
    readonly superSpreader?: string;
    readonly autowrap?: AutowrapAddresses;
    readonly existentialNFTCloneFactory: string;
    readonly macroForwarder?: string;
}
interface SubgraphData {
    readonly name: string;
    readonly cliName?: string;
    readonly hostedEndpoint?: string;
    readonly satsumaEndpoint?: string;
}
export interface NetworkMetaData {
    readonly name: string; // Superfluid canonical network name
    readonly isDeprecated: boolean;
    readonly isTestnet: boolean;
    readonly networkId: number;
    readonly chainId: number;
    readonly sfId: number; // Superfluid canonical network id
    readonly shortName: string;
    readonly uppercaseName: string;
    readonly humanReadableName: string;
    readonly nativeTokenSymbol: string;
    readonly nativeTokenWrapper: string;
    readonly contractsV1: ContractAddresses;
    readonly startBlockV1: number;
    readonly logsQueryRange: number;
    readonly explorer: string;
    readonly subgraphV1: SubgraphData;
    readonly publicRPCs?: string[];
    readonly coinGeckoId?: string;
    readonly trustedForwarders?: string[]; // list of additional trusted forwarders
    readonly subgraphVesting?: { name: string, hostedEndpoint: string }
    readonly subgraphFlowScheduler?: { name: string, hostedEndpoint: string }
    readonly subgraphAutoWrap?: { name: string, hostedEndpoint: string },
}
declare const _default: NetworkMetaData[];
export default _default;
```

Metadata function exports:
```ts
declare const _default: {
    networks: import("./list.js").NetworkMetaData[];
    mainnets: import("./list.js").NetworkMetaData[];
    testnets: import("./list.js").NetworkMetaData[];
    getNetworkByChainId: (
        chainId: number
    ) => import("./list.js").NetworkMetaData | undefined;
    getNetworkByName: (
        name: string
    ) => import("./list.js").NetworkMetaData | undefined;
    getNetworkByShortName: (
        shortName: string
    ) => import("./list.js").NetworkMetaData | undefined;
};

export default _default;
```

## Requirements

Create 2 endpoints:
- "list-superfluid-metadata-networks"
- "get-superfluid-network-metadata"

### list-superfluid-metadata-networks

Have boolean input parameter: `includeTestnets`

In the return type, return an array of objects with:
- chainId
- network's canonical name (`name` in metadata)(name the field `canonicalName`)
- network's human readable name (name the field `displayName`)
- isTestnet

### get-superfluid-network-metadata

Have input parameter: `chainIds`

Use Zod to validate that valid Chain ID is passed in.

The return type is the full metadata object from the metadata package.