import { createContext as createContextReact, useContext as useContextReact } from "react";

export function createContext<T extends {} | null>() {
	const context = createContextReact<T | undefined>(undefined);

	const useContext = () => {
		const c = useContextReact(context);
		if (c === undefined)
			throw new Error("useContext must be inside a Provider with a value");
		return c;
	};
	return [useContext, context.Provider] as const;
}