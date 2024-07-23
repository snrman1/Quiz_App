export function parseCamelToKebab(camel: string): string {
    return camel
        .split(/(?=[A-Z])/) // splits the string by uppercase letters without discarding the character where the split occurs
        .map(token => token.toLowerCase())
        .join("-");
}
