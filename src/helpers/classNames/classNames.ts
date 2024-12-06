type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [cls, Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([key]) => key), ...additional].join(' ')
}

classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])