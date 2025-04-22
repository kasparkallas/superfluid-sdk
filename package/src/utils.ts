// TODO: add documentation
export function calculateCurrentBalance({
    flowRate,
    balance,
    balanceTimestamp, // Unix timestamp
    currentTimestamp = new Date().getTime()
}: {
    flowRate: bigint,
    balance: bigint,
    balanceTimestamp: number,
    currentTimestamp?: number
}) {
    const timeElapsed = currentTimestamp - balanceTimestamp
    const amountFlowed = BigInt(timeElapsed) * flowRate
    return balance + amountFlowed
}
