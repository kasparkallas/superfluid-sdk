import { type Config, defineConfig } from '@wagmi/cli'
import { erc20Abi, type Abi } from 'viem'
import { react, actions } from '@wagmi/cli/plugins'

// # Core contracts
import Host from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/superfluid/Superfluid.sol/Superfluid.json" with { type: "json" }
import ConstantFlowAgreementV1 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/ConstantFlowAgreementV1.sol/ConstantFlowAgreementV1.json" with { type: "json" }
import CFAv1Forwarder from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/CFAv1Forwarder.sol/CFAv1Forwarder.json" with { type: "json" }
import GeneralDistributionAgreementV1 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/gdav1/GeneralDistributionAgreementV1.sol/GeneralDistributionAgreementV1.json" with { type: "json" }
import GDAv1Forwarder from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/GDAv1Forwarder.sol/GDAv1Forwarder.json" with { type: "json" }
import SuperfluidPool from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/gdav1/SuperfluidPool.sol/SuperfluidPool.json" with { type: "json" }
import InstantDistributionAgreementV1 from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/agreements/InstantDistributionAgreementV1.sol/InstantDistributionAgreementV1.json" with { type: "json" }
import SuperToken from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/superfluid/SuperToken.sol/SuperToken.json" with { type: "json" }
import PureSuperToken from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/tokens/PureSuperToken.sol/PureSuperToken.json" with { type: "json" }
import SuperTokenFactory from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/superfluid/SuperTokenFactory.sol/SuperTokenFactory.json" with { type: "json" }
import NativeAssetSuperToken from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/interfaces/tokens/ISETH.sol/ISETH.json" with { type: "json" }
import Governance from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/gov/SuperfluidGovernanceII.sol/SuperfluidGovernanceII.json" with { type: "json" }
import TOGA from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/TOGA.sol/TOGA.json" with { type: "json" }
import BatchLiquidator from "@superfluid-finance/ethereum-contracts/build/hardhat/contracts/utils/BatchLiquidator.sol/BatchLiquidator.json" with { type: "json" }
// ---

// # Peripheral contracts
import AutoWrapStrategy from "./abis/AutoWrapStrategy.json" with { type: "json" }
import AutoWrapManager from "./abis/AutoWrapManager.json" with { type: "json" }
import FlowScheduler from "./abis/FlowScheduler.json" with { type: "json" }
import VestingSchedulerV1 from "./abis/VestingScheduler.json" with { type: "json" }
import VestingSchedulerV2 from "./abis/VestingSchedulerV2.json" with { type: "json" }
import VestingSchedulerV3 from "./abis/VestingSchedulerV3.json" with { type: "json" }
// ---

import superfluidMetadata from "@superfluid-finance/metadata"
import { optimismSepolia, optimism, gnosis, polygon, arbitrum, avalanche, bsc, mainnet, base } from 'viem/chains'

const type = process.env.TYPE

// # Superfluid error codes
const tokenErrors = uniqErrors(
  (erc20Abi as Abi)
    .concat(SuperToken.abi as Abi)
    .filter((x) => x.type === "error")
);

const cfaErrors = uniqErrors(
  (ConstantFlowAgreementV1.abi as Abi)
    .concat(tokenErrors)
    .filter((x) => x.type === "error")
);

const gdaErrors = uniqErrors(
  (GeneralDistributionAgreementV1.abi as Abi)
    .concat(SuperfluidPool.abi as Abi)
    .concat(tokenErrors)
    .filter((x) => x.type === "error")
);

const allErrors = uniqErrors(
  tokenErrors
    .concat(cfaErrors)
    .concat(gdaErrors)
    .concat(Host.abi as Abi)
    .concat(InstantDistributionAgreementV1.abi as Abi)
    .filter((x) => x.type === "error")
);
// ---

// # CLI config
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

const plugins = function (): Plugins {
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
      abi: uniqErrors(
        (Host.abi as Abi)
          .concat(allErrors)
      ),
      name: "host",
      address: getAddressesFromMetadata(network => network.contractsV1.host)
    },
    {
      abi: ConstantFlowAgreementV1.abi as Abi,
      name: "cfa",
      address: getAddressesFromMetadata(network => network.contractsV1.cfaV1)
    },
    {
      abi: uniqErrors(
        (CFAv1Forwarder.abi as Abi)
          .concat(cfaErrors)
      ),
      name: "cfaForwarder",
      address: getAddressesFromMetadata(network => network.contractsV1.cfaV1Forwarder)
    },
    {
      abi: GeneralDistributionAgreementV1.abi as Abi,
      name: "gda",
      address: getAddressesFromMetadata(network => network.contractsV1.gdaV1)
    },
    {
      abi: uniqErrors(
        (GDAv1Forwarder.abi as Abi)
          .concat(gdaErrors)
      ),
      name: "gdaForwarder",
      address: getAddressesFromMetadata(network => network.contractsV1.gdaV1Forwarder)
    },
    {
      abi: SuperfluidPool.abi as Abi,
      name: "gdaPool"
    },
    {
      abi: InstantDistributionAgreementV1.abi as Abi,
      name: "ida",
      address: getAddressesFromMetadata(network => network.contractsV1.idaV1)
    },
    {
      abi: Governance.abi as Abi,
      name: "governance",
      address: getAddressesFromMetadata(network => network.contractsV1.governance)
    },
    {
      abi: TOGA.abi as Abi,
      name: "toga",
      address: getAddressesFromMetadata(network => network.contractsV1.toga)
    },
    {
      abi: SuperTokenFactory.abi as Abi,
      name: "superTokenFactory",
      address: getAddressesFromMetadata(network => network.contractsV1.superTokenFactory)
    },
    {
      abi: BatchLiquidator.abi as Abi,
      name: "batchLiquidator",
      address: getAddressesFromMetadata(network => network.contractsV1.superfluidLoader)
    },
    {
      abi: SuperToken.abi as Abi,
      name: "superToken"
    },
    {
      abi: PureSuperToken.abi as Abi,
      name: "pureSuperToken"
    },
    {
      abi: NativeAssetSuperToken.abi as Abi,
      name: "nativeAssetSuperToken"
    },
    {
      abi: AutoWrapStrategy as Abi,
      name: "autoWrapStrategy",
      address: getAddressesFromMetadata(network => network.contractsV1.autowrap?.wrapStrategy)
    },
    {
      abi: AutoWrapManager as Abi,
      name: "autoWrapManager",
      address: getAddressesFromMetadata(network => network.contractsV1.autowrap?.manager)
    },
    {
      abi: FlowScheduler as Abi,
      name: "flowScheduler",
      address: getAddressesFromMetadata(network => network.contractsV1.flowScheduler)
    },
    {
      abi: VestingSchedulerV1 as Abi,
      name: "vestingSchedulerV1",
      address: getAddressesFromMetadata(network => network.contractsV1.vestingScheduler)
    },
    {
      abi: VestingSchedulerV2 as Abi,
      name: "vestingSchedulerV2",
      address: getAddressesFromMetadata(network => network.contractsV1.vestingSchedulerV2)
    },
    {
      abi: VestingSchedulerV3 as Abi,
      name: "vestingSchedulerV3",
      // TODO: change to metadata when published
      address: {
        [optimismSepolia.id]: "0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C",
        [optimism.id]: "0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4",
        [gnosis.id]: "0x625F04c9B91ECdfbeb7021271749212388F12c11",
        [polygon.id]: "0x488913833474bbD9B11f844FdC2f0897FAc0Ca43",
        [arbitrum.id]: "0xc3069bDE869912E3d9B965F35D7764Fc92BccE67",
        [avalanche.id]: "0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf",
        [bsc.id]: "0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3",
        [mainnet.id]: "0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C",
        [base.id]: "0x6Bf35A170056eDf9aEba159dce4a640cfCef9312"
      }
    }
  ]
})
// ---

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

function uniqErrors(abi: Abi): Abi {
  return abi.filter((item, index, self) => {
    if (item.type !== "error") {
      return true;
    }
    return index === self.findIndex(e => e.type === "error" && e.name === item.name);
  }) as Abi;
}
// ---