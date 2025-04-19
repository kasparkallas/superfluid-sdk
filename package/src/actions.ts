import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// cfa
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const cfaAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  {
    type: 'error',
    inputs: [{ name: '_code', internalType: 'uint256', type: 'uint256' }],
    name: 'APP_RULE',
  },
  { type: 'error', inputs: [], name: 'CFA_ACL_FLOW_RATE_ALLOWANCE_EXCEEDED' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_NEGATIVE_ALLOWANCE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_CREATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_FLOW_OPERATOR' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_UPDATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_CREATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_DELETE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_UPDATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_UNCLEAN_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_DEPOSIT_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_RATE_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_HOOK_OUT_OF_GAS' },
  { type: 'error', inputs: [], name: 'CFA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'CFA_INVALID_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'CFA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'CFA_NO_SELF_FLOW' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_RECEIVER' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_SENDER' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'flowOperator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'permissions',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'flowRateAllowance',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
    ],
    name: 'FlowOperatorUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'totalSenderFlowRate',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'totalReceiverFlowRate',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'FlowUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'flowOperator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'deposit',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FlowUpdatedExtension',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CFA_HOOK_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_MINIMUM_DEPOSIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAXIMUM_DEPOSIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAXIMUM_FLOW_RATE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'existingPermissions', internalType: 'uint8', type: 'uint8' },
      { name: 'permissionDelta', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'addPermissions',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'agreementType',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'authorizeFlowOperatorWithFullControl',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createFlowByOperator',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      {
        name: 'subtractedFlowRateAllowance',
        internalType: 'int96',
        type: 'int96',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'decreaseFlowRateAllowance',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissionsToRemove', internalType: 'uint8', type: 'uint8' },
      {
        name: 'subtractedFlowRateAllowance',
        internalType: 'int96',
        type: 'int96',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'decreaseFlowRateAllowanceWithPermissions',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteFlowByOperator',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowInfo',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
    ],
    name: 'getDepositRequiredForFlowRate',
    outputs: [{ name: 'deposit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlow',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getFlowByID',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowOperatorData',
    outputs: [
      { name: 'flowOperatorId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowRateAllowance', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperatorId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getFlowOperatorDataByID',
    outputs: [
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowRateAllowance', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMaximumFlowRateFromDeposit',
    outputs: [{ name: 'flowRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getNetFlow',
    outputs: [{ name: 'flowRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'addedFlowRateAllowance', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'increaseFlowRateAllowance',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissionsToAdd', internalType: 'uint8', type: 'uint8' },
      { name: 'addedFlowRateAllowance', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'increaseFlowRateAllowanceWithPermissions',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isPatricianPeriod',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPatricianPeriodNow',
    outputs: [
      {
        name: 'isCurrentlyPatricianPeriod',
        internalType: 'bool',
        type: 'bool',
      },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'time', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'dynamicBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'existingPermissions', internalType: 'uint8', type: 'uint8' },
      { name: 'permissionDelta', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'removePermissions',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'revokeFlowOperatorWithFullControl',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlowByOperator',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowRateAllowance', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlowOperatorPermissions',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const cfaAddress = {
  1: '0x2844c1BBdA121E9E43105630b9C8310e5c72744b',
  10: '0x204C6f131bb7F258b2Ea1593f5309911d8E458eD',
  56: '0x49c38108870e74Cb9420C0991a85D3edd6363F75',
  100: '0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D',
  137: '0x6EeE6060f715257b970700bc2656De21dEdF074C',
  8453: '0x19ba78B9cDB05A877718841c574325fdB53601bb',
  42161: '0x731FdBB12944973B500518aea61942381d7e240D',
  42220: '0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad',
  43113: '0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A',
  43114: '0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58',
  84532: '0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef',
  534351: '0xbc46B4Aa41c055578306820013d4B65fff42711E',
  534352: '0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c',
  11155111: '0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef',
  11155420: '0x8a3170AdbC67233196371226141736E4151e7C26',
  666666666: '0x82cc052d1b17aC554a22A88D5876B56c6b51e95c',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const cfaConfig = { address: cfaAddress, abi: cfaAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// cfaForwarder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const cfaForwarderAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CFA_FWD_INVALID_FLOW_RATE' },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowInfo',
    outputs: [
      { name: 'lastUpdated', internalType: 'uint256', type: 'uint256' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowrate',
    outputs: [{ name: 'flowrate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'getBufferAmountByFlowrate',
    outputs: [
      { name: 'bufferAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowInfo',
    outputs: [
      { name: 'lastUpdated', internalType: 'uint256', type: 'uint256' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowOperatorPermissions',
    outputs: [
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowrateAllowance', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowrate',
    outputs: [{ name: 'flowrate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'grantPermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'revokePermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'setFlowrate',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'setFlowrateFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowrateAllowance', internalType: 'int96', type: 'int96' },
    ],
    name: 'updateFlowOperatorPermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const cfaForwarderAddress = {
  1: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  10: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  56: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  100: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  137: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  8453: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  42161: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  42220: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  43113: '0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D',
  43114: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  84532: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  534351: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  534352: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  11155111: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  11155420: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  666666666: '0xcfA132E353cB4E398080B9700609bb008eceB125',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const cfaForwarderConfig = {
  address: cfaForwarderAddress,
  abi: cfaForwarderAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// gda
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const gdaAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superfluidPoolBeacon_',
        internalType: 'contract SuperfluidUpgradeableBeacon',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'GDA_ADMIN_CANNOT_BE_POOL' },
  { type: 'error', inputs: [], name: 'GDA_DISTRIBUTE_FOR_OTHERS_NOT_ALLOWED' },
  {
    type: 'error',
    inputs: [],
    name: 'GDA_DISTRIBUTE_FROM_ANY_ADDRESS_NOT_ALLOWED',
  },
  { type: 'error', inputs: [], name: 'GDA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'GDA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'GDA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'GDA_NOT_POOL_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_NO_NEGATIVE_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'GDA_NO_ZERO_ADDRESS_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_ONLY_SUPER_TOKEN_POOL' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'bufferDelta',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'newBufferAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'totalBufferAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BufferAdjusted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      {
        name: 'distributor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'oldFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'newDistributorToPoolFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'newTotalDistributionFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'adjustmentFlowRecipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'adjustmentFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'FlowDistributionUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      {
        name: 'distributor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'requestedAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'actualAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'InstantDistributionUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'connected', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'PoolConnectionUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'admin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SLOTS_BITMAP_LIBRARY_ADDRESS',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SUPERFLUID_POOL_DEPLOYER_ADDRESS',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'agreementType',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      {
        name: 'p',
        internalType: 'struct BasicParticle',
        type: 'tuple',
        components: [
          { name: '_settled_at', internalType: 'Time', type: 'uint32' },
          { name: '_flow_rate', internalType: 'FlowRate', type: 'int128' },
          { name: '_settled_value', internalType: 'Value', type: 'int256' },
        ],
      },
      { name: 't', internalType: 'Time', type: 'uint32' },
    ],
    name: 'appendIndexUpdateByPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claimAll',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'doConnect', internalType: 'bool', type: 'bool' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'connectPool',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'connectPool',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'admin', internalType: 'address', type: 'address' },
      {
        name: 'config',
        internalType: 'struct PoolConfig',
        type: 'tuple',
        components: [
          {
            name: 'transferabilityForUnitsOwner',
            internalType: 'bool',
            type: 'bool',
          },
          {
            name: 'distributionFromAnyAddress',
            internalType: 'bool',
            type: 'bool',
          },
        ],
      },
    ],
    name: 'createPool',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'disconnectPool',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distribute',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distributeFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'estimateDistributionActualAmount',
    outputs: [
      { name: 'actualAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
    ],
    name: 'estimateFlowDistributionActualFlowRate',
    outputs: [
      { name: 'actualFlowRate', internalType: 'int96', type: 'int96' },
      {
        name: 'totalDistributionFlowRate',
        internalType: 'int96',
        type: 'int96',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowInfo',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    name: 'getFlow',
    outputs: [
      { name: 'lastUpdated', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    name: 'getFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getNetFlow',
    outputs: [{ name: 'netFlowRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    name: 'getPoolAdjustmentFlowInfo',
    outputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'flowHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    name: 'getPoolAdjustmentFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'member', internalType: 'address', type: 'address' },
    ],
    name: 'isMemberConnected',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isPatricianPeriod',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPatricianPeriodNow',
    outputs: [
      {
        name: 'isCurrentlyPatricianPeriod',
        internalType: 'bool',
        type: 'bool',
      },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'claimRecipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'int256', type: 'int256' },
    ],
    name: 'poolSettleClaim',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'time', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'rtb', internalType: 'int256', type: 'int256' },
      { name: 'buf', internalType: 'uint256', type: 'uint256' },
      { name: 'owedBuffer', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'realtimeBalanceOfNow',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'buffer', internalType: 'uint256', type: 'uint256' },
      { name: 'owedBuffer', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'superfluidPoolBeacon',
    outputs: [
      {
        name: '',
        internalType: 'contract SuperfluidUpgradeableBeacon',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'newUnits', internalType: 'uint128', type: 'uint128' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateMemberUnits',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const gdaAddress = {
  1: '0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842',
  10: '0x68Ae17fa7a31b86F306c383277552fd4813b0d35',
  56: '0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2',
  100: '0xd7992D358A20478c82dDEd98B3D8A9da46e99b82',
  137: '0x961dd5A052741B49B6CBf6759591f9D8576fCFb0',
  8453: '0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa',
  42161: '0x1e299701792a2aF01408B122419d65Fd2dF0Ba02',
  42220: '0x308b7405272d11494716e30C6E972DbF6fb89555',
  43113: '0x51f571D934C59185f13d17301a36c07A2268B814',
  43114: '0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2',
  84532: '0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8',
  534351: '0x93fA9B627eE016990Fe5e654F923aaE8a480a75b',
  534352: '0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28',
  11155111: '0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9',
  11155420: '0xd453d38A001B47271488886532f1CCeAbf0c7eF3',
  666666666: '0x210a01ad187003603B2287F78579ec103Eb70D9B',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const gdaConfig = { address: gdaAddress, abi: gdaAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// gdaForwarder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const gdaForwarderAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claimAll',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'connectPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'admin', internalType: 'address', type: 'address' },
      {
        name: 'config',
        internalType: 'struct PoolConfig',
        type: 'tuple',
        components: [
          {
            name: 'transferabilityForUnitsOwner',
            internalType: 'bool',
            type: 'bool',
          },
          {
            name: 'distributionFromAnyAddress',
            internalType: 'bool',
            type: 'bool',
          },
        ],
      },
    ],
    name: 'createPool',
    outputs: [
      { name: 'success', internalType: 'bool', type: 'bool' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'disconnectPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distribute',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distributeFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'estimateDistributionActualAmount',
    outputs: [
      { name: 'actualAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
    ],
    name: 'estimateFlowDistributionActualFlowRate',
    outputs: [
      { name: 'actualFlowRate', internalType: 'int96', type: 'int96' },
      {
        name: 'totalDistributionFlowRate',
        internalType: 'int96',
        type: 'int96',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    name: 'getFlowDistributionFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getNetFlow',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    name: 'getPoolAdjustmentFlowInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    name: 'getPoolAdjustmentFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'member', internalType: 'address', type: 'address' },
    ],
    name: 'isMemberConnected',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'newUnits', internalType: 'uint128', type: 'uint128' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateMemberUnits',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const gdaForwarderAddress = {
  1: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  10: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  56: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  100: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  137: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  8453: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  42161: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  42220: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  43113: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  43114: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  84532: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  534351: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  534352: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  11155111: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  11155420: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  666666666: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const gdaForwarderConfig = {
  address: gdaForwarderAddress,
  abi: gdaForwarderAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// host
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const hostAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'nonUpgradable', internalType: 'bool', type: 'bool' },
      { name: 'appWhiteListingEnabled', internalType: 'bool', type: 'bool' },
      { name: 'callbackGasLimit', internalType: 'uint64', type: 'uint64' },
      {
        name: 'erc2771ForwarderAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: '_code', internalType: 'uint256', type: 'uint256' }],
    name: 'APP_RULE',
  },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_ALREADY_REGISTERED' },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_CALLBACK_IS_NOT_ACTION' },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_IS_NOT_REGISTERED' },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CALL_AGREEMENT_WITH_CTX_FROM_WRONG_ADDRESS',
  },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CALL_APP_ACTION_WITH_CTX_FROM_WRONG_ADDRESS',
  },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CANNOT_DOWNGRADE_TO_NON_UPGRADEABLE',
  },
  { type: 'error', inputs: [], name: 'HOST_INVALID_CONFIG_WORD' },
  { type: 'error', inputs: [], name: 'HOST_MAX_256_AGREEMENTS' },
  { type: 'error', inputs: [], name: 'HOST_MUST_BE_CONTRACT' },
  { type: 'error', inputs: [], name: 'HOST_NEED_MORE_GAS' },
  { type: 'error', inputs: [], name: 'HOST_NON_UPGRADEABLE' },
  { type: 'error', inputs: [], name: 'HOST_NON_ZERO_LENGTH_PLACEHOLDER_CTX' },
  { type: 'error', inputs: [], name: 'HOST_NOT_A_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_NO_APP_REGISTRATION_PERMISSION' },
  { type: 'error', inputs: [], name: 'HOST_ONLY_GOVERNANCE' },
  { type: 'error', inputs: [], name: 'HOST_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'HOST_RECEIVER_IS_NOT_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_SENDER_IS_NOT_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_SOURCE_APP_NEEDS_HIGHER_APP_LEVEL' },
  { type: 'error', inputs: [], name: 'HOST_SUPER_APP_ALREADY_REGISTERED' },
  { type: 'error', inputs: [], name: 'HOST_SUPER_APP_IS_JAILED' },
  { type: 'error', inputs: [], name: 'HOST_UNKNOWN_BATCH_CALL_OPERATION_TYPE' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementType',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'code',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AgreementClassRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementType',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'code',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AgreementClassUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'app',
        internalType: 'contract ISuperApp',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AppRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldGov',
        internalType: 'contract ISuperfluidGovernance',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newGov',
        internalType: 'contract ISuperfluidGovernance',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'GovernanceReplaced',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'app',
        internalType: 'contract ISuperApp',
        type: 'address',
        indexed: true,
      },
      {
        name: 'reason',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Jail',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beaconProxy',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newBeaconLogic',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolBeaconLogicUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newFactory',
        internalType: 'contract ISuperTokenFactory',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SuperTokenFactoryUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'code',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SuperTokenLogicUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'APP_WHITE_LISTING_ENABLED',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CALLBACK_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_APP_CALLBACK_LEVEL',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_NUM_AGREEMENTS',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NON_UPGRADABLE_DEPLOYMENT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SIMPLE_FORWARDER',
    outputs: [
      { name: '', internalType: 'contract SimpleForwarder', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'bitmap', internalType: 'uint256', type: 'uint256' },
      { name: 'agreementType', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'addToAgreementClassesBitmap',
    outputs: [{ name: 'newBitmap', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'targetApp',
        internalType: 'contract ISuperApp',
        type: 'address',
      },
    ],
    name: 'allowCompositeApp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
      { name: 'appCreditUsedDelta', internalType: 'int256', type: 'int256' },
    ],
    name: 'appCallbackPop',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'appCreditGranted', internalType: 'uint256', type: 'uint256' },
      { name: 'appCreditUsed', internalType: 'int256', type: 'int256' },
      {
        name: 'appCreditToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
    ],
    name: 'appCallbackPush',
    outputs: [{ name: 'appCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'operations',
        internalType: 'struct ISuperfluid.Operation[]',
        type: 'tuple[]',
        components: [
          { name: 'operationType', internalType: 'uint32', type: 'uint32' },
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'batchCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAgreement',
    outputs: [{ name: 'returnedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAgreementWithContext',
    outputs: [
      { name: 'newCtx', internalType: 'bytes', type: 'bytes' },
      { name: 'returnedData', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAppAction',
    outputs: [{ name: 'returnedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAppActionWithContext',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
      { name: 'isTermination', internalType: 'bool', type: 'bool' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAppAfterCallback',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
      { name: 'isTermination', internalType: 'bool', type: 'bool' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAppBeforeCallback',
    outputs: [{ name: 'cbdata', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'newAdmin', internalType: 'address', type: 'address' },
    ],
    name: 'changeSuperTokenAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
      { name: 'appCreditUsedMore', internalType: 'int256', type: 'int256' },
    ],
    name: 'ctxUseCredit',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'ctx', internalType: 'bytes', type: 'bytes' }],
    name: 'decodeCtx',
    outputs: [
      {
        name: 'context',
        internalType: 'struct ISuperfluid.Context',
        type: 'tuple',
        components: [
          { name: 'appCallbackLevel', internalType: 'uint8', type: 'uint8' },
          { name: 'callType', internalType: 'uint8', type: 'uint8' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'msgSender', internalType: 'address', type: 'address' },
          { name: 'agreementSelector', internalType: 'bytes4', type: 'bytes4' },
          { name: 'userData', internalType: 'bytes', type: 'bytes' },
          {
            name: 'appCreditGranted',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'appCreditWantedDeprecated',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'appCreditUsed', internalType: 'int256', type: 'int256' },
          { name: 'appAddress', internalType: 'address', type: 'address' },
          {
            name: 'appCreditToken',
            internalType: 'contract ISuperfluidToken',
            type: 'address',
          },
        ],
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'operations',
        internalType: 'struct ISuperfluid.Operation[]',
        type: 'tuple[]',
        components: [
          { name: 'operationType', internalType: 'uint32', type: 'uint32' },
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'forwardBatchCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementType', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getAgreementClass',
    outputs: [
      {
        name: 'agreementClass',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'appAddr', internalType: 'contract ISuperApp', type: 'address' },
    ],
    name: 'getAppCallbackLevel',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
    ],
    name: 'getAppManifest',
    outputs: [
      { name: 'isSuperApp', internalType: 'bool', type: 'bool' },
      { name: 'isJailed', internalType: 'bool', type: 'bool' },
      { name: 'noopMask', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getERC2771Forwarder',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getGovernance',
    outputs: [
      {
        name: '',
        internalType: 'contract ISuperfluidGovernance',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNow',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSuperTokenFactory',
    outputs: [
      {
        name: 'factory',
        internalType: 'contract ISuperTokenFactory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSuperTokenFactoryLogic',
    outputs: [{ name: 'logic', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'gov',
        internalType: 'contract ISuperfluidGovernance',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
    ],
    name: 'isAgreementClassListed',
    outputs: [{ name: 'yes', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementType', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'isAgreementTypeListed',
    outputs: [{ name: 'yes', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
    ],
    name: 'isApp',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
    ],
    name: 'isAppJailed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      {
        name: 'targetApp',
        internalType: 'contract ISuperApp',
        type: 'address',
      },
    ],
    name: 'isCompositeAppAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'ctx', internalType: 'bytes', type: 'bytes' }],
    name: 'isCtxValid',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'reason', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'jailApp',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'bitmap', internalType: 'uint256', type: 'uint256' }],
    name: 'mapAgreementClasses',
    outputs: [
      {
        name: 'agreementClasses',
        internalType: 'contract ISuperAgreement[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'agreementClassLogic',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
    ],
    name: 'registerAgreementClass',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'configWord', internalType: 'uint256', type: 'uint256' }],
    name: 'registerApp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'configWord', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerApp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'configWord', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerAppByFactory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'configWord', internalType: 'uint256', type: 'uint256' },
      { name: 'registrationKey', internalType: 'string', type: 'string' },
    ],
    name: 'registerAppWithKey',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'bitmap', internalType: 'uint256', type: 'uint256' },
      { name: 'agreementType', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeFromAgreementClassesBitmap',
    outputs: [{ name: 'newBitmap', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newGov',
        internalType: 'contract ISuperfluidGovernance',
        type: 'address',
      },
    ],
    name: 'replaceGovernance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'agreementClassLogic',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
    ],
    name: 'updateAgreementClass',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newLogic', internalType: 'address', type: 'address' }],
    name: 'updatePoolBeaconLogic',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newFactory',
        internalType: 'contract ISuperTokenFactory',
        type: 'address',
      },
    ],
    name: 'updateSuperTokenFactory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'newLogicOverride', internalType: 'address', type: 'address' },
    ],
    name: 'updateSuperTokenLogic',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'versionRecipient',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const hostAddress = {
  1: '0x4E583d9390082B65Bef884b629DFA426114CED6d',
  10: '0x567c4B141ED61923967cA25Ef4906C8781069a10',
  56: '0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E',
  100: '0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7',
  137: '0x3E14dC1b13c488a8d5D310918780c983bD5982E7',
  8453: '0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74',
  42161: '0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192',
  42220: '0xA4Ff07cF81C02CFD356184879D953970cA957585',
  43113: '0x85Fe79b998509B77BF10A8BD4001D58475D29386',
  43114: '0x60377C7016E4cdB03C87EF474896C11cB560752C',
  84532: '0x109412E3C84f0539b43d39dB691B08c90f58dC7c',
  534351: '0x42b05a6016B9eED232E13fd56a8F0725693DBF8e',
  534352: '0x0F86a21F6216c061B222c224e315d9FC34520bb7',
  11155111: '0x109412E3C84f0539b43d39dB691B08c90f58dC7c',
  11155420: '0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005',
  666666666: '0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const hostConfig = { address: hostAddress, abi: hostAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfa = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"CFA_HOOK_GAS_LIMIT"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaCfaHookGasLimit = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'CFA_HOOK_GAS_LIMIT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"DEFAULT_MINIMUM_DEPOSIT"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaDefaultMinimumDeposit = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'DEFAULT_MINIMUM_DEPOSIT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"MAXIMUM_DEPOSIT"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaMaximumDeposit = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'MAXIMUM_DEPOSIT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"MAXIMUM_FLOW_RATE"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaMaximumFlowRate = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'MAXIMUM_FLOW_RATE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"addPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaAddPermissions = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'addPermissions',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"agreementType"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaAgreementType = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'agreementType',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"getAccountFlowInfo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaGetAccountFlowInfo = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'getAccountFlowInfo',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"getCodeAddress"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaGetCodeAddress = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'getCodeAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"getDepositRequiredForFlowRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaGetDepositRequiredForFlowRate =
  /*#__PURE__*/ createReadContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'getDepositRequiredForFlowRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"getFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaGetFlow = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'getFlow',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"getFlowByID"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaGetFlowById = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'getFlowByID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"getFlowOperatorData"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaGetFlowOperatorData = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'getFlowOperatorData',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"getFlowOperatorDataByID"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaGetFlowOperatorDataById = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'getFlowOperatorDataByID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"getMaximumFlowRateFromDeposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaGetMaximumFlowRateFromDeposit =
  /*#__PURE__*/ createReadContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'getMaximumFlowRateFromDeposit',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"getNetFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaGetNetFlow = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'getNetFlow',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"isPatricianPeriod"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaIsPatricianPeriod = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'isPatricianPeriod',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"isPatricianPeriodNow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaIsPatricianPeriodNow = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'isPatricianPeriodNow',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaProxiableUuid = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'proxiableUUID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"realtimeBalanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaRealtimeBalanceOf = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'realtimeBalanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"removePermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const readCfaRemovePermissions = /*#__PURE__*/ createReadContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'removePermissions',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfa = /*#__PURE__*/ createWriteContract({
  abi: cfaAbi,
  address: cfaAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"authorizeFlowOperatorWithFullControl"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaAuthorizeFlowOperatorWithFullControl =
  /*#__PURE__*/ createWriteContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'authorizeFlowOperatorWithFullControl',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"castrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaCastrate = /*#__PURE__*/ createWriteContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'castrate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"createFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaCreateFlow = /*#__PURE__*/ createWriteContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'createFlow',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"createFlowByOperator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaCreateFlowByOperator = /*#__PURE__*/ createWriteContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'createFlowByOperator',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"decreaseFlowRateAllowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaDecreaseFlowRateAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'decreaseFlowRateAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"decreaseFlowRateAllowanceWithPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaDecreaseFlowRateAllowanceWithPermissions =
  /*#__PURE__*/ createWriteContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'decreaseFlowRateAllowanceWithPermissions',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"deleteFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaDeleteFlow = /*#__PURE__*/ createWriteContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'deleteFlow',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"deleteFlowByOperator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaDeleteFlowByOperator = /*#__PURE__*/ createWriteContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'deleteFlowByOperator',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"increaseFlowRateAllowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaIncreaseFlowRateAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'increaseFlowRateAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"increaseFlowRateAllowanceWithPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaIncreaseFlowRateAllowanceWithPermissions =
  /*#__PURE__*/ createWriteContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'increaseFlowRateAllowanceWithPermissions',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"revokeFlowOperatorWithFullControl"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaRevokeFlowOperatorWithFullControl =
  /*#__PURE__*/ createWriteContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'revokeFlowOperatorWithFullControl',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"updateCode"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaUpdateCode = /*#__PURE__*/ createWriteContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'updateCode',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"updateFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaUpdateFlow = /*#__PURE__*/ createWriteContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'updateFlow',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"updateFlowByOperator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaUpdateFlowByOperator = /*#__PURE__*/ createWriteContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'updateFlowByOperator',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const writeCfaUpdateFlowOperatorPermissions =
  /*#__PURE__*/ createWriteContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfa = /*#__PURE__*/ createSimulateContract({
  abi: cfaAbi,
  address: cfaAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"authorizeFlowOperatorWithFullControl"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaAuthorizeFlowOperatorWithFullControl =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'authorizeFlowOperatorWithFullControl',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"castrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaCastrate = /*#__PURE__*/ createSimulateContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'castrate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"createFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaCreateFlow = /*#__PURE__*/ createSimulateContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'createFlow',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"createFlowByOperator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaCreateFlowByOperator =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'createFlowByOperator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"decreaseFlowRateAllowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaDecreaseFlowRateAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'decreaseFlowRateAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"decreaseFlowRateAllowanceWithPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaDecreaseFlowRateAllowanceWithPermissions =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'decreaseFlowRateAllowanceWithPermissions',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"deleteFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaDeleteFlow = /*#__PURE__*/ createSimulateContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'deleteFlow',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"deleteFlowByOperator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaDeleteFlowByOperator =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'deleteFlowByOperator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"increaseFlowRateAllowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaIncreaseFlowRateAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'increaseFlowRateAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"increaseFlowRateAllowanceWithPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaIncreaseFlowRateAllowanceWithPermissions =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'increaseFlowRateAllowanceWithPermissions',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"revokeFlowOperatorWithFullControl"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaRevokeFlowOperatorWithFullControl =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'revokeFlowOperatorWithFullControl',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"updateCode"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaUpdateCode = /*#__PURE__*/ createSimulateContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'updateCode',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"updateFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaUpdateFlow = /*#__PURE__*/ createSimulateContract({
  abi: cfaAbi,
  address: cfaAddress,
  functionName: 'updateFlow',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"updateFlowByOperator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaUpdateFlowByOperator =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'updateFlowByOperator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaAbi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const simulateCfaUpdateFlowOperatorPermissions =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaAbi,
    address: cfaAddress,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link cfaAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const watchCfaEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: cfaAbi,
  address: cfaAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link cfaAbi}__ and `eventName` set to `"CodeUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const watchCfaCodeUpdatedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: cfaAbi,
  address: cfaAddress,
  eventName: 'CodeUpdated',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link cfaAbi}__ and `eventName` set to `"FlowOperatorUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const watchCfaFlowOperatorUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: cfaAbi,
    address: cfaAddress,
    eventName: 'FlowOperatorUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link cfaAbi}__ and `eventName` set to `"FlowUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const watchCfaFlowUpdatedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: cfaAbi,
  address: cfaAddress,
  eventName: 'FlowUpdated',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link cfaAbi}__ and `eventName` set to `"FlowUpdatedExtension"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const watchCfaFlowUpdatedExtensionEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: cfaAbi,
    address: cfaAddress,
    eventName: 'FlowUpdatedExtension',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link cfaAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const watchCfaInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: cfaAbi,
  address: cfaAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarder = /*#__PURE__*/ createReadContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getAccountFlowInfo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetAccountFlowInfo =
  /*#__PURE__*/ createReadContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'getAccountFlowInfo',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getAccountFlowrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetAccountFlowrate =
  /*#__PURE__*/ createReadContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'getAccountFlowrate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getBufferAmountByFlowrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetBufferAmountByFlowrate =
  /*#__PURE__*/ createReadContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'getBufferAmountByFlowrate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getFlowInfo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetFlowInfo = /*#__PURE__*/ createReadContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'getFlowInfo',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getFlowOperatorPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetFlowOperatorPermissions =
  /*#__PURE__*/ createReadContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'getFlowOperatorPermissions',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"getFlowrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const readCfaForwarderGetFlowrate = /*#__PURE__*/ createReadContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'getFlowrate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarder = /*#__PURE__*/ createWriteContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"createFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderCreateFlow = /*#__PURE__*/ createWriteContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'createFlow',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"deleteFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderDeleteFlow = /*#__PURE__*/ createWriteContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'deleteFlow',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"grantPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderGrantPermissions =
  /*#__PURE__*/ createWriteContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'grantPermissions',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"revokePermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderRevokePermissions =
  /*#__PURE__*/ createWriteContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'revokePermissions',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"setFlowrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderSetFlowrate = /*#__PURE__*/ createWriteContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'setFlowrate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"setFlowrateFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderSetFlowrateFrom =
  /*#__PURE__*/ createWriteContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'setFlowrateFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"updateFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderUpdateFlow = /*#__PURE__*/ createWriteContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
  functionName: 'updateFlow',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const writeCfaForwarderUpdateFlowOperatorPermissions =
  /*#__PURE__*/ createWriteContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarder = /*#__PURE__*/ createSimulateContract({
  abi: cfaForwarderAbi,
  address: cfaForwarderAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"createFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderCreateFlow =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'createFlow',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"deleteFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderDeleteFlow =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'deleteFlow',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"grantPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderGrantPermissions =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'grantPermissions',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"revokePermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderRevokePermissions =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'revokePermissions',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"setFlowrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderSetFlowrate =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'setFlowrate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"setFlowrateFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderSetFlowrateFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'setFlowrateFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"updateFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderUpdateFlow =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'updateFlow',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link cfaForwarderAbi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xcfA132E353cB4E398080B9700609bb008eceB125)
 */
export const simulateCfaForwarderUpdateFlowOperatorPermissions =
  /*#__PURE__*/ createSimulateContract({
    abi: cfaForwarderAbi,
    address: cfaForwarderAddress,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGda = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"SLOTS_BITMAP_LIBRARY_ADDRESS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaSlotsBitmapLibraryAddress =
  /*#__PURE__*/ createReadContract({
    abi: gdaAbi,
    address: gdaAddress,
    functionName: 'SLOTS_BITMAP_LIBRARY_ADDRESS',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"SUPERFLUID_POOL_DEPLOYER_ADDRESS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaSuperfluidPoolDeployerAddress =
  /*#__PURE__*/ createReadContract({
    abi: gdaAbi,
    address: gdaAddress,
    functionName: 'SUPERFLUID_POOL_DEPLOYER_ADDRESS',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"agreementType"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaAgreementType = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'agreementType',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"estimateDistributionActualAmount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaEstimateDistributionActualAmount =
  /*#__PURE__*/ createReadContract({
    abi: gdaAbi,
    address: gdaAddress,
    functionName: 'estimateDistributionActualAmount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"estimateFlowDistributionActualFlowRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaEstimateFlowDistributionActualFlowRate =
  /*#__PURE__*/ createReadContract({
    abi: gdaAbi,
    address: gdaAddress,
    functionName: 'estimateFlowDistributionActualFlowRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"getAccountFlowInfo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaGetAccountFlowInfo = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'getAccountFlowInfo',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"getCodeAddress"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaGetCodeAddress = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'getCodeAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"getFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaGetFlow = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'getFlow',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"getFlowRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaGetFlowRate = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'getFlowRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"getNetFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaGetNetFlow = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'getNetFlow',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"getPoolAdjustmentFlowInfo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaGetPoolAdjustmentFlowInfo =
  /*#__PURE__*/ createReadContract({
    abi: gdaAbi,
    address: gdaAddress,
    functionName: 'getPoolAdjustmentFlowInfo',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"getPoolAdjustmentFlowRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaGetPoolAdjustmentFlowRate =
  /*#__PURE__*/ createReadContract({
    abi: gdaAbi,
    address: gdaAddress,
    functionName: 'getPoolAdjustmentFlowRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"isMemberConnected"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaIsMemberConnected = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'isMemberConnected',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"isPatricianPeriod"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaIsPatricianPeriod = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'isPatricianPeriod',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"isPatricianPeriodNow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaIsPatricianPeriodNow = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'isPatricianPeriodNow',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"isPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaIsPool = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'isPool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaProxiableUuid = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'proxiableUUID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"realtimeBalanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaRealtimeBalanceOf = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'realtimeBalanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"realtimeBalanceOfNow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaRealtimeBalanceOfNow = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'realtimeBalanceOfNow',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"superfluidPoolBeacon"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const readGdaSuperfluidPoolBeacon = /*#__PURE__*/ createReadContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'superfluidPoolBeacon',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGda = /*#__PURE__*/ createWriteContract({
  abi: gdaAbi,
  address: gdaAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"appendIndexUpdateByPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGdaAppendIndexUpdateByPool =
  /*#__PURE__*/ createWriteContract({
    abi: gdaAbi,
    address: gdaAddress,
    functionName: 'appendIndexUpdateByPool',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"castrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGdaCastrate = /*#__PURE__*/ createWriteContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'castrate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"claimAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGdaClaimAll = /*#__PURE__*/ createWriteContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'claimAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"connectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGdaConnectPool = /*#__PURE__*/ createWriteContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'connectPool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"createPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGdaCreatePool = /*#__PURE__*/ createWriteContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'createPool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"disconnectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGdaDisconnectPool = /*#__PURE__*/ createWriteContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'disconnectPool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"distribute"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGdaDistribute = /*#__PURE__*/ createWriteContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'distribute',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"distributeFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGdaDistributeFlow = /*#__PURE__*/ createWriteContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'distributeFlow',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"poolSettleClaim"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGdaPoolSettleClaim = /*#__PURE__*/ createWriteContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'poolSettleClaim',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"updateCode"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGdaUpdateCode = /*#__PURE__*/ createWriteContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'updateCode',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"updateMemberUnits"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const writeGdaUpdateMemberUnits = /*#__PURE__*/ createWriteContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'updateMemberUnits',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGda = /*#__PURE__*/ createSimulateContract({
  abi: gdaAbi,
  address: gdaAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"appendIndexUpdateByPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGdaAppendIndexUpdateByPool =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaAbi,
    address: gdaAddress,
    functionName: 'appendIndexUpdateByPool',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"castrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGdaCastrate = /*#__PURE__*/ createSimulateContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'castrate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"claimAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGdaClaimAll = /*#__PURE__*/ createSimulateContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'claimAll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"connectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGdaConnectPool = /*#__PURE__*/ createSimulateContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'connectPool',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"createPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGdaCreatePool = /*#__PURE__*/ createSimulateContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'createPool',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"disconnectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGdaDisconnectPool = /*#__PURE__*/ createSimulateContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'disconnectPool',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"distribute"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGdaDistribute = /*#__PURE__*/ createSimulateContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'distribute',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"distributeFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGdaDistributeFlow = /*#__PURE__*/ createSimulateContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'distributeFlow',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"poolSettleClaim"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGdaPoolSettleClaim = /*#__PURE__*/ createSimulateContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'poolSettleClaim',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"updateCode"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGdaUpdateCode = /*#__PURE__*/ createSimulateContract({
  abi: gdaAbi,
  address: gdaAddress,
  functionName: 'updateCode',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaAbi}__ and `functionName` set to `"updateMemberUnits"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const simulateGdaUpdateMemberUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaAbi,
    address: gdaAddress,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const watchGdaEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: gdaAbi,
  address: gdaAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaAbi}__ and `eventName` set to `"BufferAdjusted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const watchGdaBufferAdjustedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: gdaAbi,
    address: gdaAddress,
    eventName: 'BufferAdjusted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaAbi}__ and `eventName` set to `"CodeUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const watchGdaCodeUpdatedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: gdaAbi,
  address: gdaAddress,
  eventName: 'CodeUpdated',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaAbi}__ and `eventName` set to `"FlowDistributionUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const watchGdaFlowDistributionUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: gdaAbi,
    address: gdaAddress,
    eventName: 'FlowDistributionUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const watchGdaInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: gdaAbi,
  address: gdaAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaAbi}__ and `eventName` set to `"InstantDistributionUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const watchGdaInstantDistributionUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: gdaAbi,
    address: gdaAddress,
    eventName: 'InstantDistributionUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaAbi}__ and `eventName` set to `"PoolConnectionUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const watchGdaPoolConnectionUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: gdaAbi,
    address: gdaAddress,
    eventName: 'PoolConnectionUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gdaAbi}__ and `eventName` set to `"PoolCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const watchGdaPoolCreatedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: gdaAbi,
  address: gdaAddress,
  eventName: 'PoolCreated',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarder = /*#__PURE__*/ createReadContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"estimateDistributionActualAmount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderEstimateDistributionActualAmount =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'estimateDistributionActualAmount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"estimateFlowDistributionActualFlowRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderEstimateFlowDistributionActualFlowRate =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'estimateFlowDistributionActualFlowRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"getFlowDistributionFlowRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderGetFlowDistributionFlowRate =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'getFlowDistributionFlowRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"getNetFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderGetNetFlow = /*#__PURE__*/ createReadContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'getNetFlow',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"getPoolAdjustmentFlowInfo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderGetPoolAdjustmentFlowInfo =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'getPoolAdjustmentFlowInfo',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"getPoolAdjustmentFlowRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderGetPoolAdjustmentFlowRate =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'getPoolAdjustmentFlowRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"isMemberConnected"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderIsMemberConnected =
  /*#__PURE__*/ createReadContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'isMemberConnected',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"isPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const readGdaForwarderIsPool = /*#__PURE__*/ createReadContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'isPool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarder = /*#__PURE__*/ createWriteContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"claimAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderClaimAll = /*#__PURE__*/ createWriteContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'claimAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"connectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderConnectPool = /*#__PURE__*/ createWriteContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'connectPool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"createPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderCreatePool = /*#__PURE__*/ createWriteContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'createPool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"disconnectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderDisconnectPool =
  /*#__PURE__*/ createWriteContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'disconnectPool',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"distribute"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderDistribute = /*#__PURE__*/ createWriteContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
  functionName: 'distribute',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"distributeFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderDistributeFlow =
  /*#__PURE__*/ createWriteContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'distributeFlow',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"updateMemberUnits"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const writeGdaForwarderUpdateMemberUnits =
  /*#__PURE__*/ createWriteContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarder = /*#__PURE__*/ createSimulateContract({
  abi: gdaForwarderAbi,
  address: gdaForwarderAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"claimAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderClaimAll =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'claimAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"connectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderConnectPool =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'connectPool',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"createPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderCreatePool =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"disconnectPool"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderDisconnectPool =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'disconnectPool',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"distribute"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderDistribute =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'distribute',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"distributeFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderDistributeFlow =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'distributeFlow',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gdaForwarderAbi}__ and `functionName` set to `"updateMemberUnits"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08)
 */
export const simulateGdaForwarderUpdateMemberUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: gdaForwarderAbi,
    address: gdaForwarderAddress,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHost = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"APP_WHITE_LISTING_ENABLED"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostAppWhiteListingEnabled = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'APP_WHITE_LISTING_ENABLED',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"CALLBACK_GAS_LIMIT"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostCallbackGasLimit = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'CALLBACK_GAS_LIMIT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"MAX_APP_CALLBACK_LEVEL"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostMaxAppCallbackLevel = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'MAX_APP_CALLBACK_LEVEL',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"MAX_NUM_AGREEMENTS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostMaxNumAgreements = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'MAX_NUM_AGREEMENTS',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"NON_UPGRADABLE_DEPLOYMENT"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostNonUpgradableDeployment = /*#__PURE__*/ createReadContract(
  {
    abi: hostAbi,
    address: hostAddress,
    functionName: 'NON_UPGRADABLE_DEPLOYMENT',
  },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"SIMPLE_FORWARDER"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostSimpleForwarder = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'SIMPLE_FORWARDER',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"addToAgreementClassesBitmap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostAddToAgreementClassesBitmap =
  /*#__PURE__*/ createReadContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'addToAgreementClassesBitmap',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"decodeCtx"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostDecodeCtx = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'decodeCtx',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"getAgreementClass"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostGetAgreementClass = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'getAgreementClass',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"getAppCallbackLevel"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostGetAppCallbackLevel = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'getAppCallbackLevel',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"getAppManifest"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostGetAppManifest = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'getAppManifest',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"getCodeAddress"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostGetCodeAddress = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'getCodeAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"getERC2771Forwarder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostGetErc2771Forwarder = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'getERC2771Forwarder',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"getGovernance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostGetGovernance = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'getGovernance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"getNow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostGetNow = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'getNow',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"getSuperTokenFactory"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostGetSuperTokenFactory = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'getSuperTokenFactory',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"getSuperTokenFactoryLogic"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostGetSuperTokenFactoryLogic =
  /*#__PURE__*/ createReadContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'getSuperTokenFactoryLogic',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"isAgreementClassListed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostIsAgreementClassListed = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'isAgreementClassListed',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"isAgreementTypeListed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostIsAgreementTypeListed = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'isAgreementTypeListed',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"isApp"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostIsApp = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'isApp',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"isAppJailed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostIsAppJailed = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'isAppJailed',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"isCompositeAppAllowed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostIsCompositeAppAllowed = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'isCompositeAppAllowed',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"isCtxValid"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostIsCtxValid = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'isCtxValid',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"isTrustedForwarder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostIsTrustedForwarder = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'isTrustedForwarder',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"mapAgreementClasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostMapAgreementClasses = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'mapAgreementClasses',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostProxiableUuid = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'proxiableUUID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"removeFromAgreementClassesBitmap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostRemoveFromAgreementClassesBitmap =
  /*#__PURE__*/ createReadContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'removeFromAgreementClassesBitmap',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"versionRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const readHostVersionRecipient = /*#__PURE__*/ createReadContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'versionRecipient',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHost = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"allowCompositeApp"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostAllowCompositeApp = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'allowCompositeApp',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"appCallbackPop"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostAppCallbackPop = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'appCallbackPop',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"appCallbackPush"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostAppCallbackPush = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'appCallbackPush',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"batchCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostBatchCall = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'batchCall',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAgreement"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostCallAgreement = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'callAgreement',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAgreementWithContext"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostCallAgreementWithContext =
  /*#__PURE__*/ createWriteContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'callAgreementWithContext',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAppAction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostCallAppAction = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'callAppAction',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAppActionWithContext"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostCallAppActionWithContext =
  /*#__PURE__*/ createWriteContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'callAppActionWithContext',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAppAfterCallback"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostCallAppAfterCallback = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'callAppAfterCallback',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAppBeforeCallback"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostCallAppBeforeCallback = /*#__PURE__*/ createWriteContract(
  { abi: hostAbi, address: hostAddress, functionName: 'callAppBeforeCallback' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"castrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostCastrate = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'castrate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"changeSuperTokenAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostChangeSuperTokenAdmin = /*#__PURE__*/ createWriteContract(
  { abi: hostAbi, address: hostAddress, functionName: 'changeSuperTokenAdmin' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"ctxUseCredit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostCtxUseCredit = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'ctxUseCredit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"forwardBatchCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostForwardBatchCall = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'forwardBatchCall',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostInitialize = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"jailApp"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostJailApp = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'jailApp',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"registerAgreementClass"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostRegisterAgreementClass =
  /*#__PURE__*/ createWriteContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'registerAgreementClass',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"registerApp"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostRegisterApp = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'registerApp',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"registerAppByFactory"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostRegisterAppByFactory = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'registerAppByFactory',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"registerAppWithKey"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostRegisterAppWithKey = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'registerAppWithKey',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"replaceGovernance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostReplaceGovernance = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'replaceGovernance',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"updateAgreementClass"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostUpdateAgreementClass = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'updateAgreementClass',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"updateCode"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostUpdateCode = /*#__PURE__*/ createWriteContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'updateCode',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"updatePoolBeaconLogic"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostUpdatePoolBeaconLogic = /*#__PURE__*/ createWriteContract(
  { abi: hostAbi, address: hostAddress, functionName: 'updatePoolBeaconLogic' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"updateSuperTokenFactory"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostUpdateSuperTokenFactory =
  /*#__PURE__*/ createWriteContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'updateSuperTokenFactory',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"updateSuperTokenLogic"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const writeHostUpdateSuperTokenLogic = /*#__PURE__*/ createWriteContract(
  { abi: hostAbi, address: hostAddress, functionName: 'updateSuperTokenLogic' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHost = /*#__PURE__*/ createSimulateContract({
  abi: hostAbi,
  address: hostAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"allowCompositeApp"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostAllowCompositeApp =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'allowCompositeApp',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"appCallbackPop"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostAppCallbackPop = /*#__PURE__*/ createSimulateContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'appCallbackPop',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"appCallbackPush"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostAppCallbackPush = /*#__PURE__*/ createSimulateContract(
  { abi: hostAbi, address: hostAddress, functionName: 'appCallbackPush' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"batchCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostBatchCall = /*#__PURE__*/ createSimulateContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'batchCall',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAgreement"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostCallAgreement = /*#__PURE__*/ createSimulateContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'callAgreement',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAgreementWithContext"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostCallAgreementWithContext =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'callAgreementWithContext',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAppAction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostCallAppAction = /*#__PURE__*/ createSimulateContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'callAppAction',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAppActionWithContext"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostCallAppActionWithContext =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'callAppActionWithContext',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAppAfterCallback"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostCallAppAfterCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'callAppAfterCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"callAppBeforeCallback"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostCallAppBeforeCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'callAppBeforeCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"castrate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostCastrate = /*#__PURE__*/ createSimulateContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'castrate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"changeSuperTokenAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostChangeSuperTokenAdmin =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'changeSuperTokenAdmin',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"ctxUseCredit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostCtxUseCredit = /*#__PURE__*/ createSimulateContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'ctxUseCredit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"forwardBatchCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostForwardBatchCall =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'forwardBatchCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostInitialize = /*#__PURE__*/ createSimulateContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"jailApp"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostJailApp = /*#__PURE__*/ createSimulateContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'jailApp',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"registerAgreementClass"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostRegisterAgreementClass =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'registerAgreementClass',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"registerApp"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostRegisterApp = /*#__PURE__*/ createSimulateContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'registerApp',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"registerAppByFactory"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostRegisterAppByFactory =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'registerAppByFactory',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"registerAppWithKey"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostRegisterAppWithKey =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'registerAppWithKey',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"replaceGovernance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostReplaceGovernance =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'replaceGovernance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"updateAgreementClass"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostUpdateAgreementClass =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'updateAgreementClass',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"updateCode"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostUpdateCode = /*#__PURE__*/ createSimulateContract({
  abi: hostAbi,
  address: hostAddress,
  functionName: 'updateCode',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"updatePoolBeaconLogic"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostUpdatePoolBeaconLogic =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'updatePoolBeaconLogic',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"updateSuperTokenFactory"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostUpdateSuperTokenFactory =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'updateSuperTokenFactory',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link hostAbi}__ and `functionName` set to `"updateSuperTokenLogic"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const simulateHostUpdateSuperTokenLogic =
  /*#__PURE__*/ createSimulateContract({
    abi: hostAbi,
    address: hostAddress,
    functionName: 'updateSuperTokenLogic',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link hostAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const watchHostEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: hostAbi,
  address: hostAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link hostAbi}__ and `eventName` set to `"AgreementClassRegistered"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const watchHostAgreementClassRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: hostAbi,
    address: hostAddress,
    eventName: 'AgreementClassRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link hostAbi}__ and `eventName` set to `"AgreementClassUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const watchHostAgreementClassUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: hostAbi,
    address: hostAddress,
    eventName: 'AgreementClassUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link hostAbi}__ and `eventName` set to `"AppRegistered"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const watchHostAppRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: hostAbi,
    address: hostAddress,
    eventName: 'AppRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link hostAbi}__ and `eventName` set to `"CodeUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const watchHostCodeUpdatedEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: hostAbi, address: hostAddress, eventName: 'CodeUpdated' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link hostAbi}__ and `eventName` set to `"GovernanceReplaced"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const watchHostGovernanceReplacedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: hostAbi,
    address: hostAddress,
    eventName: 'GovernanceReplaced',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link hostAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const watchHostInitializedEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: hostAbi, address: hostAddress, eventName: 'Initialized' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link hostAbi}__ and `eventName` set to `"Jail"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const watchHostJailEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: hostAbi,
  address: hostAddress,
  eventName: 'Jail',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link hostAbi}__ and `eventName` set to `"PoolBeaconLogicUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const watchHostPoolBeaconLogicUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: hostAbi,
    address: hostAddress,
    eventName: 'PoolBeaconLogicUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link hostAbi}__ and `eventName` set to `"SuperTokenFactoryUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const watchHostSuperTokenFactoryUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: hostAbi,
    address: hostAddress,
    eventName: 'SuperTokenFactoryUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link hostAbi}__ and `eventName` set to `"SuperTokenLogicUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const watchHostSuperTokenLogicUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: hostAbi,
    address: hostAddress,
    eventName: 'SuperTokenLogicUpdated',
  })
