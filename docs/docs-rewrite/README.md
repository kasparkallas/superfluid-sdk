# Superfluid SDK documentation

## Legend
- `#` is section
- `##` is page
- `###` is paragraph
- `-` A note or an idea

## Technology

- Fumadocs (https://fumadocs.dev/)
- TailwindCSS
- Next.js
- React
- Shadcn

## Style of writing

Straightforward and concise.

If you lack the detail and nuance about a particular topic, just describe it briefly without hallucinating additional info. Feel free to use placeholders as I will review everything and iterate on it.

## Table of Contents
```
# Introduction
	## Getting started
		### Requirements
		### Installation
			- npm, yarn, bun, pnpm
	## Superfluid Protocol
		- What is Superfluid?
		- Super Tokens
			- Note that the Native Asset Super Token and Wrapper Super Token ABIs are merged
		- Flows (CFA)
		- Distributions (GDA)
	## wagmi & viem
		- typesafe because of metaprogramming
		- Anatomy of an ABI
		- Anatomy of an action
		- Anatomy of a hook
	## Architecture (ABIs, actions, hooks)
		- How the SDK is structured?
			- 3 main import paths (ABIs, actions, hooks)
			- The sub import paths (root, advanced, automation)
				- The root imports are for essential imports that are relevant to new users.
		- Generated with wagmi-cli
	## Glossary
		- CFA
		- GDA
		- IDA
		- Host
		- Forwarder
		- TOGA
# Use-case guides
	## How to wrap/unwrap Super Tokens (i.e. upgrade/downgrade)
		- Note that Super Token functions always use 18 decimals
		- Wrapper Super Tokens
			- Talk about giving underlying token allowance to Superfluid Protocol
				- Mention underlying token decimals when giving the allowance
		- Native Asset Super Tokens (payable and upgradeByEth/downgradeByEth)
	## How to manage a CFA flow
		- Note that when talking about streams we refer to CFA flows.
		- Create a flow
			- Show both `setFlowrate` and `createFlow` versions
			- Use the utility for calculating the flowrate
		- Update a flow
		- Delete a flow
	## How to create a GDA pool and distribute
		- Create pool
		- Give units to pool members
	## How to connect to a GDA pool
		- ... as the pool member
	## How to do batch calls?
		- Explain Superfluid Protocol batch calls
		- Operation types
		- Example without helper
		- Example with helper (`prepareOperation`)
# API reference
## Essential
- SuperToken
- CfaForwarder
- GdaForwarder
- GdaPool
## Advanced
- Host
- CFA
- GDA
- IDA
- TOGA
	- Legacy, superseded by GDA
## Automation
- AutoWrap
	- Consists of 2 ABIs
- VestingScheduler
- FlowScheduler
		
```

### For later
```
# Framework guides
	## Hono (Actions)
	## Next.js (React hooks)
	## Vite and React (React hooks)
	## Vite and Vue (Actions)
```
## Code Examples

The code examples should use TypeScript Twoslash.

### Tabbed component for ABIs/actions/hooks for READS

ABI tab:
```ts
import { cfaForwarderAbi, cfaForwarderAddress } from "@superfluid-finance/sdk" // [!code focus]
import { readContract } from "viem" // [!code focus]

const chainId = 1 as const
const superTokenAddress = "0x0000000000000000000000000000000000000000" as const
const accountAddress = "0x0000000000000000000000000000000000000000" as const

function async main() {
	const accountFlowrate = await readContract({ // [!code focus]
	  abi: cfaForwarderAbi, // [!code focus]
	  address: cfaForwarderAddress[chainId], // [!code focus]
	  functionName: "getAccountFlowrate", // [!code focus]
	  args: [superTokenAddress, accountAddress] // [!code focus]
	}) // [!code focus]
	return accountFlowrate
}

main().then(console.log)
```

Actions tab:
```ts
import { readCfaForwarder } from "@superfluid-finance/sdk/actions" // [!code focus]
import { createConfig } from "@wagmi/core"
import { mainnet } from "viem/chains"

const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http()
  }
})

const superTokenAddress = "0x0000000000000000000000000000000000000000" as const
const accountAddress = "0x0000000000000000000000000000000000000000" as const

function async main() {
	const accountFlowrate = await readCfaForwarder(wagmiConfig, { // [!code focus]
	  chainId: chainId, // [!code focus]
	  functionName: "getAccountFlowrate", // [!code focus]
	  args: [superTokenAddress, accountAddress] // [!code focus]
	}) // [!code focus]
	return accountFlowrate
}

main().then(console.log)
```

Hooks tab:
```tsx
import { useReadCfaForwarder } from "@superfluid-finance/sdk/hooks" // [!code focus]

const chainId = 1 as const
const superTokenAddress = "0x0000000000000000000000000000000000000000" as const
const accountAddress = "0x0000000000000000000000000000000000000000" as const

function ReactComponent() {
	const { data: accountFlowrate } = useReadCfaForwarder(, { // [!code focus]
		chainId: chainId // [!code focus]
		functionName: "getAccountFlowrate", // [!code focus]
		args: [superTokenAddress, accountAddress] // [!code focus]
	}) // [!code focus]
	return (
		<div>{accountFlowrate}</div>
	)
}
```

### Tabbed component for ABIs/actions/hooks for WRITES

ABI tab:
```ts
import { cfaForwarderAbi, cfaForwarderAddress } from "@superfluid-finance/sdk" // [!code focus]
import { writeContract } from "viem" // [!code focus]
import { createWalletClient, formatEther } from "viem"
import { mainnet } from "viem/chains"
import { privateKeyToAccount } from 'viem/accounts'
import { calculateFlowratePerSecond } from "@superfluid-finance/sdk"

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`)
const walletClient = createWalletClient({
  account,
  chain: mainnet,
  transport: http()
})

const chainId = mainnet.id
const superTokenAddress = "0x0000000000000000000000000000000000000000" as const
const receiverAddress = "0x0000000000000000000000000000000000000000" as const
const flowrate = calculateFlowratePerSecond({
	amountWei: formatEther("1"),
	timeUnit: "week"
})

function async main() {
	const transactionHash = await walletClient.writeContract({ // [!code focus]
	  abi: cfaForwarderAbi, // [!code focus]
	  address: cfaForwarderAddress[chainId], // [!code focus]
	  functionName: "setFlowrate", // [!code focus]
	  args: [superTokenAddress, receiverAddress, flowrate] // [!code focus]
	}) // [!code focus]
	return transactionHash
}

main().then(console.log)
```

Actions tab:
```ts
import { writeCfaForwarder } from "@superfluid-finance/sdk/actions" // [!code focus]
import { createWalletClient, formatEther } from "viem"
import { createConfig } from "@wagmi/core"
import { mainnet } from "viem/chains"
import { privateKeyToAccount } from 'viem/accounts'
import { calculateFlowratePerSecond } from "@superfluid-finance/sdk"

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`)
const wagmiConfig = createConfig({
  chains: [mainnet],
  client({ chain }) {
    return createWalletClient({
      account,
      chain,
      transport: http(),
    })
  },
})

const chainId = mainnet.id
const superTokenAddress = "0x0000000000000000000000000000000000000000" as const
const receiverAddress = "0x0000000000000000000000000000000000000000" as const
const flowrate = calculateFlowratePerSecond({
	amountWei: formatEther("1"),
	timeUnit: "week"
})

function async main() {
	const transactionHash = await writeCfaForwarder(wagmiConfig, { // [!code focus]
	  chainId: chainId, // [!code focus]
	  functionName: "setFlowrate", // [!code focus]
	  args: [superTokenAddress, receiverAddress, flowrate] // [!code focus]
	}) // [!code focus]
	return transactionHash
}

main().then(console.log)
```

Hooks tab:
```tsx
import { useWriteCfaForwarder } from "@superfluid-finance/sdk/hooks" // [!code focus]

const chainId = 1 as const
const superTokenAddress = "0x0000000000000000000000000000000000000000" as const
const accountAddress = "0x0000000000000000000000000000000000000000" as const
const flowrate = calculateFlowratePerSecond({
	amountWei: formatEther("1"),
	timeUnit: "week"
})

function ReactComponent() {
	const { data: transactionHash } = useWriteCfaForwarder({ // [!code focus]
		chainId: chainId // [!code focus]
		functionName: "setFlowrate", // [!code focus]
		args: [superTokenAddress, accountAddress, flowrate] // [!code focus]
	}) // [!code focus]
	return (
		<div>{transactionHash}</div>
	)
}
```