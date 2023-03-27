import Home from './pages/Home'
import CalculatorContextProvider from './context/calculatorProvider'

function App() {
	return (
		<div className="App">
			<CalculatorContextProvider>
				<Home/>    	
			</CalculatorContextProvider>
		</div>
	)
}

export default App