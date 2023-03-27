import { Dispatch, SetStateAction } from 'react'
import { createContext } from './create-context'
import { CalculatorState } from '../models/calculator'
import { CalculatorAction } from './calculatorReducer'

interface Context extends CalculatorState {
	dispatch: Dispatch<CalculatorAction>;
	historyOpen: boolean;
	toggleHistory: () => void;
	preview: string;
	setPreview: Dispatch<SetStateAction<string>>;
	number: string;
	setNumber: Dispatch<SetStateAction<string>>;
}

export const [useContext, Provider] = createContext<Context>();
