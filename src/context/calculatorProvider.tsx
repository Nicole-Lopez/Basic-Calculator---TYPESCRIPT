import { useReducer, useState } from 'react'
import calculatorReducer, { initialState } from './calculatorReducer'
import { Provider } from './calculatorContext'
import { useToggleBoolean } from '../hooks/useToggleBoolean'

interface props {
	children: JSX.Element | JSX.Element[]
}

export default function CalculatorContextProvider({children}: props) {
	const [historyOpen, toggleHistory] = useToggleBoolean(false)
  	const [preview, setPreview] = useState<string>('')
	const [number, setNumber] = useState<string>('')


	const [calculatorState, dispatch] = useReducer(calculatorReducer, initialState)

	let value = {
		historyOpen,
		toggleHistory,
		preview,
		setPreview,
		number, 
		setNumber
	}

	return (
		<Provider value={{...calculatorState, dispatch, ...value}}>
			{children}
		</Provider>
	)
}