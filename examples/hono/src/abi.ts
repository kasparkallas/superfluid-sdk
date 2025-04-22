import { cfaAbi, cfaAddress } from "sdk"
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

import { app } from './app.js' // Does this have to be .js?

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
})

app.get('/abi', async (c) => {
  const maximumDeposit = await publicClient.readContract({
    address: cfaAddress[mainnet.id],
    abi: cfaAbi,
    functionName: "CFA_HOOK_GAS_LIMIT"
  })
  return c.text(maximumDeposit.toString())
})

export const __esModule = true;
