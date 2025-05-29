# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Superfluid SDK monorepo that provides TypeScript/JavaScript bindings for interacting with the Superfluid protocol. The SDK is generated using wagmi-cli and includes ABIs, React hooks, and actions for both protocol and automation contracts.

## Project Structure

- `/package/` - Main SDK package with generated bindings
- `/docs/` - Documentation site built with Fumadocs/Next.js  
- `/examples/` - Framework examples (Hono, Next.js, Vite, Vue)

## Commands

### Development
```bash
# Install dependencies (using pnpm)
pnpm install

# Build entire project
pnpm build

# Build SDK only
pnpm build:sdk

# Build examples only
pnpm build:examples

# Type checking (runs in all packages)
pnpm typecheck

# Run tests
cd package && pnpm test

# Generate SDK bindings (must be run from package directory)
cd package && pnpm generate
```

### Documentation
```bash
cd docs
pnpm dev     # Start development server on http://localhost:3000
pnpm build   # Build documentation site
```

## Architecture

The SDK uses wagmi-cli to generate three types of exports from Superfluid contract ABIs:

1. **ABIs** (`/abi`, `/abi/protocol`, `/abi/automation`) - Raw contract ABIs with enhanced error types
2. **Wagmi hooks** (`/wagmi`, `/wagmi/protocol`, `/wagmi/automation`) - React hooks for contract interactions
3. **Actions** (`/actions`, `/actions/protocol`, `/actions/automation`) - Core functions for non-React usage

### Code Generation

The `wagmi.config.ts` file orchestrates code generation based on environment variables:
- `TYPE=abi|wagmi|actions` - Determines output type
- `CATEGORY=protocol|automation` - Determines contract category (no category means "main" category)

Generated files follow a consistent naming pattern where contract names are transformed (e.g., `CFAv1Forwarder` → `cfaForwarder`).

### Testing

Tests use Vitest and require a `PRIVATE_KEY` environment variable. The main test file (`batchcall.test.ts`) demonstrates the Superfluid batch call functionality with various operation types.

## Key Dependencies

- `viem` & `wagmi` - Core Ethereum libraries (peer dependencies)
- `@superfluid-finance/ethereum-contracts` - Contract ABIs source
- `@superfluid-finance/metadata` - Network addresses and metadata
- `@wagmi/cli` - Code generation tool

## Notes for LLMs

It's not worth trying to read any of the `generated.ts` files because they contain a lot of generated content. The same goes for `index.ts` files under the `/package/abi/*` path.

Check `package.json` for `exports` under the `/package` folder to get a grasp of the SDK structure. Note the `config` module is currently a little buggy so treat it like it's not there when it comes to the documentation.