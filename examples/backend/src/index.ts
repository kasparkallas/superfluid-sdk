import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cfaAbi, cfaAddress } from "sdk/actions"
import { createPublicClient, http } from 'viem'
import { mainnet } from '@wagmi/core/chains'

const app = new Hono()

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
})

// const config = createConfig({
//   chains: [mainnet],
//   transports: {
//     [mainnet.id]: http()
//   },
// })

app.get('/', async (c) => {
  const maximumDeposit = await publicClient.readContract({
    address: cfaAddress[mainnet.id],
    abi: cfaAbi,
    functionName: "CFA_HOOK_GAS_LIMIT"
  })
  // const maximumDeposit = await readCfaMaximumDeposit(config, { chainId: mainnet.id })
  return c.text(maximumDeposit.toString())
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
