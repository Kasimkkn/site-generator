
export function capitalizeFirstLetter(val: string | number): string {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function addSpaceBetweenNumbersAndWords(input: string): string {
    return input.replace(/(\d)([a-zA-Z])|([a-zA-Z])(\d)/g, '$1$3 $2$4');
}

export const getCircularReplacer = (): ((key: string, value: any) => any) => {
    const seen = new WeakSet();
    return (key: string, value: any) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) return undefined;
            seen.add(value);
        }
        return value;
    };
};
