type Component = (props: JSX.Props) => JSX.Children;

export function jsx(tag: string | Component, props: JSX.Props): string;
