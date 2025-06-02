import { createMcpHandler } from "@vercel/mcp-adapter";
import { 
  createListSuperfluidContractsTool,
  createGetSuperfluidContractAbiTool
} from "../abi-tools";
import {
  createListSuperfluidMetadataNetworksTool,
  createGetSuperfluidNetworkMetadataTool
} from "../metadata-tools";
import {
  createGetSuperfluidTokenTool,
  createFindSuperfluidTokensTool
} from "../tokenlist-tools";

const handler = createMcpHandler(
  (server) => {
    // ABI tools
    createListSuperfluidContractsTool(server);
    createGetSuperfluidContractAbiTool(server);
    
    // Metadata tools
    createListSuperfluidMetadataNetworksTool(server);
    createGetSuperfluidNetworkMetadataTool(server);
    
    // Token list tools
    createGetSuperfluidTokenTool(server);
    createFindSuperfluidTokensTool(server);
  },
  {
    capabilities: {
      tools: {},
    },
  },
  {
    redisUrl: process.env.REDIS_URL,
    basePath: "",
    sseEndpoint: "/sse",
    streamableHttpEndpoint: "/mcp",
    verboseLogs: true,
    maxDuration: 60,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
