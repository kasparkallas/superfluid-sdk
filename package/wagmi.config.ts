import { type Config, defineConfig } from '@wagmi/cli'
import { react, actions } from '@wagmi/cli/plugins'

import Superfluid from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/superfluid/Superfluid.sol/Superfluid.json" with { type: "json" }

import ConstantFlowAgreementV1 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/ConstantFlowAgreementV1.sol/ConstantFlowAgreementV1.json" with { type: "json" }
import CFAv1Forwarder from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/CFAv1Forwarder.sol/CFAv1Forwarder.json" with { type: "json" }
import GeneralDistributionAgreementV1 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/gdav1/GeneralDistributionAgreementV1.sol/GeneralDistributionAgreementV1.json" with { type: "json" }
import GDAv1Forwarder from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/GDAv1Forwarder.sol/GDAv1Forwarder.json" with { type: "json" }
import InstantDistributionAgreementV1 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/InstantDistributionAgreementV1.sol/InstantDistributionAgreementV1.json" with { type: "json" }
import SuperToken from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/superfluid/SuperToken.sol/SuperToken.json" with { type: "json" }
import PureSuperToken from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/tokens/PureSuperToken.sol/PureSuperToken.json" with { type: "json" }
import SuperTokenFactory from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/superfluid/SuperTokenFactory.sol/SuperTokenFactory.json" with { type: "json" }
import NativeAssetSuperToken from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/interfaces/tokens/ISETH.sol/ISETH.json" with { type: "json" }
import Governance from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/gov/SuperfluidGovernanceII.sol/SuperfluidGovernanceII.json" with { type: "json" }
import TOGA from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/TOGA.sol/TOGA.json" with { type: "json" }
import BatchLiquidator from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/BatchLiquidator.sol/BatchLiquidator.json" with { type: "json" }

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
        actions({
            overridePackageName: "@wagmi/core"
        })
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
    },
    {
      abi: InstantDistributionAgreementV1.abi as any,
      name: "ida",
      address: getAddressesFromMetadata(network => network.contractsV1.idaV1)
    },
    {
      abi: SuperToken.abi as any,
      name: "superToken"
    },
    {
      abi: PureSuperToken.abi as any,
      name: "pureSuperToken"
    },
    {
      abi: NativeAssetSuperToken.abi as any,
      name: "nativeAssetSuperToken"
    },
    {
      abi: SuperTokenFactory.abi as any,
      name: "superTokenFactory",
      address: getAddressesFromMetadata(network => network.contractsV1.superTokenFactory)
    },
    {
      abi: Governance.abi as any,
      name: "governance",
      address: getAddressesFromMetadata(network => network.contractsV1.governance)
    },
    {
      abi: TOGA.abi as any,
      name: "toga",
      address: getAddressesFromMetadata(network => network.contractsV1.toga)
    },
    {
      abi: BatchLiquidator.abi as any,
      name: "batchLiquidator",
      address: getAddressesFromMetadata(network => network.contractsV1.superfluidLoader)
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
