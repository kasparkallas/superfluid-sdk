# Superfluid Token List MCP Tool

## Context

Superfluid Protocol has Super Tokens that are "listed" by the team. This is what the token list is for -- it includes those tokens. Some Super Tokens have an underlying token which is wrapped into the Super Token. The token list also includes underlying tokens for Super Tokens which have one.

There are 3 types of Super Tokens: "Native Asset Super Token", "Pure Super Token" and "Wrapper Super Token".

You probably just want to use `extendedSuperTokenList` export.

### Technical

All the token addresses in the metadata are lowercased.

The main export form `@superfluid-finance/tokenlist` package:
```ts
import type { TokenInfo as OriginalTokenInfo, TokenList, Version, Tags } from "@uniswap/token-lists";
import tokenListJSON from "./public/superfluid.tokenlist.json" assert { type: "json" };
import extendedTokenListJSON from "./public/superfluid.extended.tokenlist.json" assert { type: "json" };

export type { TokenList, Version, Tags }; // Re-export @uniswap/token-lists' main consumer types.

export type SuperTokenExtensions = {
  readonly extensions: {
    readonly superTokenInfo:
      | {
          readonly type: "Pure" | "Native Asset";
        }
      | {
          readonly type: "Wrapper";
          readonly underlyingTokenAddress: `0x${string}`;
        };
  };
};

export interface TokenInfo extends Omit<OriginalTokenInfo, "address"> {
  readonly address: `0x${string}`;
}

export type SuperTokenInfo = TokenInfo & SuperTokenExtensions;
type UnderlyingTokenInfo = TokenInfo;

export type SuperTokenList = Omit<TokenList, "tokens"> & {
  readonly tokens: (SuperTokenInfo & UnderlyingTokenInfo)[];
};

export const extendedSuperTokenList = extendedTokenListJSON as SuperTokenList;

const superTokenList = tokenListJSON as SuperTokenList;

export const fetchLatestSuperTokenList = async (): Promise<SuperTokenList> => {
  const data = await fetchTokenList("https://tokenlist.superfluid.org/superfluid.tokenlist.json", {
    fallbackTokenList: superTokenList
  });
  return data;
};

export const fetchLatestExtendedSuperTokenList = async (): Promise<SuperTokenList> => {
  const data = await fetchTokenList("https://tokenlist.superfluid.org/superfluid.extended.tokenlist.json", {
    fallbackTokenList: extendedSuperTokenList
  });
  return data;
};

export default superTokenList;

const inMemoryCache = new Map();

async function fetchTokenList(url: string, options: {
  timeout?: number;
  cacheTTL?: number;
  fallbackTokenList: SuperTokenList;
}): Promise<SuperTokenList> {
  const {
    timeout = 3000,
    fallbackTokenList
  } = options;

  // Check cache
  if (inMemoryCache.has(url)) {
    return inMemoryCache.get(url).data;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow'
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Cache the successful response
    inMemoryCache.set(url, { data, timestamp: Date.now() });
    
    return data as SuperTokenList;
  } catch (error: unknown) {
    console.error('Error fetching tokenlist:', error);
    console.warn('Using fallback token list.');
    return fallbackTokenList;
  }
}
```

These are the types from `@uniswap/token-lists`:
```ts
type ExtensionValue = string | number | boolean | null | undefined;

export interface TokenInfo {
  readonly chainId: number;
  readonly address: string;
  readonly name: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly logoURI?: string;
  readonly tags?: string[];
  readonly extensions?: {
    readonly [key: string]:
      | {
          [key: string]:
            | {
                [key: string]: ExtensionValue;
              }
            | ExtensionValue;
        }
      | ExtensionValue;
  };
}

export interface Version {
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
}

export interface Tags {
  readonly [tagId: string]: {
    readonly name: string;
    readonly description: string;
  };
}

export interface TokenList {
  readonly name: string;
  readonly timestamp: string;
  readonly version: Version;
  readonly tokens: TokenInfo[];
  readonly tokenMap?: {
    readonly [key: string]: TokenInfo;
  };
  readonly keywords?: string[];
  readonly tags?: Tags;
  readonly logoURI?: string;
}
```

## Requirements

Create 2 endpoints:
- "get-superfluid-token"
- "find-superfluid-tokens"

The underlying token should always be returned with the Super Token when the Super Token was requested.

### `get-superfluid-token`

It should have input of `tokenAddress` and `chainId`.

### `find-superfluid-tokens`

It should have optional input of `chainIds`. And the other input should be `searchTerm`. The search term should be used to find from symbol and fuzzy find from the token name.

For fuzzy search, use Fuse.js.