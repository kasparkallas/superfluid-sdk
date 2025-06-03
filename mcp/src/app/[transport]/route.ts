import { createMcpHandler } from "@vercel/mcp-adapter";
import { 
  createListSuperfluidContractsTool,
  createGetSuperfluidContractAbiTool
} from "./(tools)/abi-tools";
import {
  createListSuperfluidMetadataNetworksTool,
  createGetSuperfluidNetworkMetadataTool
} from "./(tools)/metadata-tools";
import {
  createGetSuperfluidTokenTool,
  createFindSuperfluidTokensTool
} from "./(tools)/tokenlist-tools";
import {
  createGetSuperfluidResourcesTool
} from "./(tools)/resources-tools";

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
    
    // Resources tools
    createGetSuperfluidResourcesTool(server);
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
