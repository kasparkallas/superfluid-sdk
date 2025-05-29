import { createConfig } from "@wagmi/core"
import { readCfa } from "sdk/actions"

import { app } from './app.js' // Does this have to be .js?
import { superfluidMainnets, superfluidMainnetTransports } from 'sdk/config'

const config = createConfig({
    chains: [...superfluidMainnets],
    transports: {
        ...superfluidMainnetTransports
    }
})

app.get('/actions', async (c) => {
  const maximumFlowRate = await readCfa(config, {
      chainId: 1,
      functionName: "MAXIMUM_FLOW_RATE"
  })
  return c.text(maximumFlowRate.toString())
})

export const __esModule = true;
