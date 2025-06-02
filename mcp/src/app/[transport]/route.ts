import { createMcpHandler } from "@vercel/mcp-adapter";
import { 
  createListSuperfluidContractsTool,
  createGetSuperfluidContractAbiTool
} from "../abi-tools";

const handler = createMcpHandler(
  (server) => {
    // Tool to list available contract names
    createListSuperfluidContractsTool(server);
    createGetSuperfluidContractAbiTool(server);
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
