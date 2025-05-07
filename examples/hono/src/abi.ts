import { cfaV1Abi, cfaV1Address } from "sdk"
import { createPublicClient } from 'viem'
import { mainnet } from 'viem/chains'

import { app } from './app.js' // Does this have to be .js?
import { superfluidMainnetTransports } from "sdk/config"

const publicClient = createPublicClient({
  chain: mainnet,
  transport: superfluidMainnetTransports[mainnet.id]
})

app.get('/abi', async (c) => {
  const maximumFlowRate = await publicClient.readContract({
    address: cfaV1Address[mainnet.id],
    abi: cfaV1Abi,
    functionName: "MAXIMUM_FLOW_RATE"
  })
  return c.text(maximumFlowRate.toString())
})

export const __esModule = true;
