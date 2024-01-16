export const prcnt = (num: number | undefined, total: number | undefined): number => {
    if (!num || !total) return (0);
    let result = Number(((num / total) * 100).toFixed(2));
    return result;
}