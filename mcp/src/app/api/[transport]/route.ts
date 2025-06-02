import { createMcpHandler } from "@vercel/mcp-adapter";
import { type Abi } from "viem";
import { z } from "zod";
import {
  // Main ABIs
  cfaForwarderAbi,
  gdaForwarderAbi,
  gdaPoolAbi,
  superTokenAbi,
} from "sdk";

import {
  // Protocol ABIs
  batchLiquidatorAbi,
  cfaAbi,
  gdaAbi,
  governanceAbi,
  hostAbi,
  idaAbi,
  superTokenFactoryAbi,
  togaAbi
} from "sdk/protocol";

import {
  // Automation ABIs
  autoWrapManagerAbi,
  autoWrapStrategyAbi,
  flowSchedulerAbi,
  legacyVestingSchedulerV1Abi,
  legacyVestingSchedulerV2Abi,
  vestingSchedulerV3Abi,
} from "sdk/automation";

type ContractInfo = {
  abi: Abi;
  tags: string[];
};

const contractAbis = {
  // Main contracts
  cfaForwarder: {
    abi: cfaForwarderAbi,
    tags: ["CFA", "CFAv1Forwarder", "forwarder", "streams"]
  },
  gdaForwarder: {
    abi: gdaForwarderAbi,
    tags: ["GDA", "GDAv1Forwarder", "distribution", "forwarder", "pools"]
  },
  gdaPool: {
    abi: gdaPoolAbi,
    tags: ["GDA", "SuperfluidPool", "pool", "distribution", "members"]
  },
  superToken: {
    abi: superTokenAbi,
    tags: ["erc20", "real-time balance", "Wrapper Super Token", "Native Asset Super Token", "Pure Super Token"]
  },
  // Protocol contracts
  batchLiquidator: {
    abi: batchLiquidatorAbi,
    tags: ["liquidation", "batch", "sentinel"]
  },
  cfa: {
    abi: cfaAbi,
    tags: ["CFA", "ConstantFlowAgreementV1", "agreement", "core"]
  },
  gda: {
    abi: gdaAbi,
    tags: ["GDA", "GeneralDistributionAgreementV1", "distribution", "agreement", "core"]
  },
  governance: {
    abi: governanceAbi,
    tags: ["governance", "GovernanceII", "upgrades", "admin"]
  },
  host: {
    abi: hostAbi,
    tags: ["host", "core", "superfluid", "registry"]
  },
  ida: {
    abi: idaAbi,
    tags: ["IDA", "InstantDistributionAgreementV1", "agreement", "legacy"]
  },
  superTokenFactory: {
    abi: superTokenFactoryAbi,
    tags: ["factory", "token", "deployment"]
  },
  toga: {
    abi: togaAbi,
    tags: ["TOGA", "patrician", "liquidation"]
  },
  // Automation contracts
  autoWrapManager: {
    abi: autoWrapManagerAbi,
    tags: ["automation", "wrap", "manager", "auto-wrap"]
  },
  autoWrapStrategy: {
    abi: autoWrapStrategyAbi,
    tags: ["automation", "wrap", "strategy", "auto-wrap"]
  },
  flowScheduler: {
    abi: flowSchedulerAbi,
    tags: ["automation", "scheduler", "flow", "schedule", "streams"]
  },
  legacyVestingSchedulerV1: {
    abi: legacyVestingSchedulerV1Abi,
    tags: ["automation", "vesting", "scheduler", "v1", "legacy"]
  },
  legacyVestingSchedulerV2: {
    abi: legacyVestingSchedulerV2Abi,
    tags: ["automation", "vesting", "scheduler", "v2", "legacy"]
  },
  vestingSchedulerV3: {
    abi: vestingSchedulerV3Abi,
    tags: ["automation", "vesting", "scheduler", "v3", "current"]
  },
} as const satisfies Record<string, ContractInfo>;

type ContractName = keyof typeof contractAbis;

const contractNames = Object.keys(contractAbis) as [ContractName, ...ContractName[]];

const handler = createMcpHandler(
  (server) => {
    // Tool to list available contract names
    server.tool(
      "list-superfluid-contracts",
      "List all available Superfluid contract names that can be used to fetch ABIs",
      async () => {
        const contracts = Object.entries(contractAbis).map(([name, info]) => ({
          name,
          tags: info.tags
        }));
        
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(contracts, null, 2)
            }
          ]
        };
      }
    );
    server.tool(
        "get-superfluid-contract-abi",
        "Get the ABI for a specific Superfluid Protocol contract by name",
        {
            contractName: z.enum(contractNames)
        },
        async (args) => {
            const contractInfo = contractAbis[args.contractName];
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(contractInfo.abi, null, 2)
                    }
                ]
            };
        }
    );
  },
  {
    capabilities: {
      tools: {},
    },
  },
  {
    redisUrl: process.env.REDIS_URL,
    basePath: "/api",
    sseEndpoint: "/sse",
    streamableHttpEndpoint: "/mcp",
    verboseLogs: true,
    maxDuration: 60,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
