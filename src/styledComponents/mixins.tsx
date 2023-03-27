export const transitionTheme = (transitionProperties: string) => `
	transition-duration: .3s;
    transition-timing-function: ease-in-out;
    transition-property: ${transitionProperties};
`;
