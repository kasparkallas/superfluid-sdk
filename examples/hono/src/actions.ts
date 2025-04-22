import { mainnet } from '@wagmi/core/chains'
import { createConfig, http } from "@wagmi/core"
import { readCfaCfaHookGasLimit } from "sdk/actions"

import { app } from './app.js' // Does this have to be .js?

const config = createConfig({
    chains: [mainnet] as any, // Is any really necessary? It might be if not enough chains are configured.
    transports: {
        [mainnet.id]: http()
    }
})

app.get('/actions', async (c) => {
  const maximumDeposit = await readCfaCfaHookGasLimit(config, {
      chainId: 1
  })
  return c.text(maximumDeposit.toString())
})

export const __esModule = true;
