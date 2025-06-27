function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
function addSpaceBetweenNumbersAndWords(input) {
    return input.replace(/(\d)([a-zA-Z])|([a-zA-Z])(\d)/g, '$1$3 $2$4');
}
export { capitalizeFirstLetter, addSpaceBetweenNumbersAndWords };

export const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) return undefined;
            seen.add(value);
        }
        return value;
    };
};
