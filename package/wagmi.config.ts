import { type Config, defineConfig } from '@wagmi/cli'
import { react, actions } from '@wagmi/cli/plugins'

import Superfluid from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/superfluid/Superfluid.sol/Superfluid.json" with { type: "json" }

import ConstantFlowAgreementV1 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/ConstantFlowAgreementV1.sol/ConstantFlowAgreementV1.json" with { type: "json" }
import CFAv1Forwarder from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/CFAv1Forwarder.sol/CFAv1Forwarder.json" with { type: "json" }
import GeneralDistributionAgreementV1 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/gdav1/GeneralDistributionAgreementV1.sol/GeneralDistributionAgreementV1.json" with { type: "json" }
import GDAv1Forwarder from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/GDAv1Forwarder.sol/GDAv1Forwarder.json" with { type: "json" }

import superfluidMetadata from "@superfluid-finance/metadata"

const type = process.env.TYPE

const out = function (): string {
  switch (type) {
    case "abi":
      return "src/abi.ts"
    case "wagmi":
      return "src/wagmi.ts"
    case "actions":
      return "src/actions.ts"
    default:
      throw new Error(`Invalid type [${type}], use "wagmi" or "viem".`)
  }
}()

const plugins = function(): Plugins {
  switch (type) {
    case "abi":
      return []
    case "wagmi":
      return [
        react()
      ]
    case "actions":
      return [
        actions()
      ]
    default:
      throw new Error(`Invalid type [${type}], use "wagmi" or "viem".`)
  }
}()

export default defineConfig({
  out,
  plugins,
  contracts: [
    {
      abi: Superfluid.abi as any,
      name: "host",
      address: getAddressesFromMetadata(network => network.contractsV1.host)
    },
    {
      abi: ConstantFlowAgreementV1.abi as any,
      name: "cfa",
      address: getAddressesFromMetadata(network => network.contractsV1.cfaV1)
    },
    {
      abi: CFAv1Forwarder.abi as any,
      name: "cfaForwarder",
      address: getAddressesFromMetadata(network => network.contractsV1.cfaV1Forwarder)
    },
    {
      abi: GeneralDistributionAgreementV1.abi as any,
      name: "gda",
      address: getAddressesFromMetadata(network => network.contractsV1.gdaV1)
    },
    {
      abi: GDAv1Forwarder.abi as any,
      name: "gdaForwarder",
      address: getAddressesFromMetadata(network => network.contractsV1.gdaV1Forwarder)
    }
  ]
})

// # Types
type Address = `0x${string}`
type Addressish = Address | string

type NetworkMetadata = typeof superfluidMetadata.networks[number]

type Plugins = Config["plugins"]
// ---

// # Utils
function getAddressesFromMetadata(selector: (network: NetworkMetadata) => Addressish | undefined) {
  return superfluidMetadata.networks.reduce((obj, network) => {
    const address = selector(network)
    if (address) {
      obj[network.chainId] = address as Address
    }
    return obj
  }, {} as Record<number, Address>)
}
// ---
