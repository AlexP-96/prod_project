type Mods = Record<string, string | boolean>;

export function cls(cls: string, mods: Mods, ...classes: string[]): string {
    return [
        cls,
        ...classes,
        ...Object.entries(mods).filter(([key, value]) => Boolean(value)).map(([key, value]) => key)
    ].join(' ');
};