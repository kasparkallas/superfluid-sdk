import { z } from "zod";
import metadata from "@superfluid-finance/metadata";
import { McpServer } from "@/types";

export const createListSuperfluidMetadataNetworksTool = (server: McpServer) => {
  server.tool(
    "list-superfluid-metadata-networks",
    "List all available Superfluid networks with optional testnet filtering",
    {
      includeTestnets: z.boolean().optional()
    },
    async (args: { includeTestnets?: boolean }) => {
      const includeTestnets = args.includeTestnets ?? true;
      const networks = includeTestnets ? metadata.networks : metadata.mainnets;
      
      const networkList = networks.map(network => ({
        chainId: network.chainId,
        canonicalName: network.name,
        displayName: network.humanReadableName,
        isTestnet: network.isTestnet
      }));
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(networkList, null, 2)
          }
        ]
      };
    }
  );
};

export const createGetSuperfluidNetworkMetadataTool = (server: McpServer) => {
  server.tool(
    "get-superfluid-network-metadata",
    "Get full metadata for specific Superfluid network(s) by chain ID",
    {
      chainIds: z.array(z.number().int().positive()).min(1)
    },
    async (args: { chainIds: number[] }) => {
      const metadataResults: Record<number, any> = {};
      
      for (const chainId of args.chainIds) {
        const network = metadata.getNetworkByChainId(chainId);
        if (network) {
          metadataResults[chainId] = network;
        } else {
          metadataResults[chainId] = null;
        }
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(metadataResults, null, 2)
          }
        ]
      };
    }
  );
};