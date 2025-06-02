# Context

This is a review of the first run of writing the documentation by Claude Code.

Claude started writing the docs based on the README.md in this folder.

Claude wrote a summary of its run in the CLAUDE FIRST RUN.md in this folder.

# Review

- The documentation for "TOGA" is messed up (`/docs/api/advanced/toga`). It's talking about Tradeable Cashflow Agreement but TOGA stands for Transparent Ongoing Governance Agreement instead. The ABI is different from the one used in that docs page.
- In some places, the ABI is inlined. It would be better to always import it from the SDK itself in the examples.
- The usage comments of `calculateFlowrate` are wrong. The `amountWei` input is in wei units. If you want to pass in ethers units then `formatEther` should be used from `viem`. Example: `amountWei: formatEther("100")`
- In "Common Batch Patterns", the usage of giving allowance of the underlying token in the batch call is wrong. That does not work! The reason is that the underlying token's allowance call looks at `msg.sender` but the batch calls go through the Superfluid Host, changing the `msg.sender`. It works inside the Superfluid Protocol and with SuperApps because a protocol context `ctx` is passed around that contains the actual `msg.sender`. There's also ERC-2771 support with trusted forwarders where the `msg.sender` is found from the calldata.
- Remove mentions of `Flow NFT`
- I think the "Events" can be removed from the API references. The main use-case is to glance and at possible contract read and contract write functionNames and their inputs and outputs.
- Under "Architecture" and "Code Generation", talking about the "generation process" is redundant.
- For that matter, "Type Safety Architecture" also seems redundant for a user-friendly documentation
- Under Glossary, mention that the batch calls how to go through the Host. 
    - For all the agreements, mention that calling functions directly on them will not work. All Super Token functions need to go through the Host. The function call needs to be encoded and invoked either through Host's `callAgreement` or `batchCall` or `forwardBatchCall` (might not need to mention the forward one).
        - This is an important point and should be apparent across the documentation through the vibes of pushing people to use the Forwarder contracts. That's why the forwarders are beginner-friendly -- they handle the encoding by calling `forwardBatchCall` (thanks to being a trusted forwarder) itself with the right agreement and data.