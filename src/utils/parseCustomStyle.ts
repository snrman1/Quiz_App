import { parseCamelToKebab } from "./parseCamelToKebab";

export function parseCustomStyle(style: React.CSSProperties | undefined): string {
    if (!style) return "";
    return Object.entries(style)
        .map(entry => `${parseCamelToKebab(entry[0])}: ${entry[1]};`)
        .join("\n");
}
