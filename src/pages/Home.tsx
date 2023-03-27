import { useContext } from '../context/calculatorContext'
import { useKeypress } from '../hooks/useKeypress'
import { useToggleTheme } from '../hooks/useToggleTheme'
import { Operators } from '../models/calculator'
import {
	Container,
	Calculator,
	EqualsButton,
	Preview,
	Operator,
	Display,
	OtherBtn,
	NumberBtn,
	HistoryIcon,
	ToggleHistory,
	ScreenContainer,
	ConfigBtn,
	ThemeToggle,
	DarkIcon,
	LightIcon
} from '../styledComponents/homeStyled'
import Themes from '../Theme/Themes'
import { ThemeProvider } from 'styled-components'
import History from '../components/History'
import DynamicFont from '../components/DynamicFont'


export default function Home() {
	const {
		result, 
		prevResult, 
		operators, 
		digits, 
		dispatch,
		historyOpen,
		toggleHistory,
		preview, 
		setPreview,
		number, 
		setNumber		
	} = useContext();
	

	let {toggleTheme, theme} = useToggleTheme()

	const handleDelBtn = ():void => {
		if (result !== null || number || !['+', '/', '*'].includes(preview.slice(-1))){
			setNumber(number => number.slice(0, -1))
			setPreview(preview => preview.slice(0, -1))
		}
	}

	const handleClearBtn = ():void => {	
		dispatch({type: 'CLEAR_ALL'})
		setNumber('')
		setPreview('')		
	}



	const handleNumber = (num: string):void => {
		if (number.length < 12) {
			if (result !== null && !['+', '-', '/', '*'].includes(preview.slice(-1))) handleClearBtn()
			if (prevResult !== null) dispatch({type:'CLEAR_RESULTS'})

			if (
				(number[0] === '0' && num === '0' && number.length<2)
				||
				(number.includes('.') && num == '.')
			) return

			else if(!number.length && num === '.'){
				setNumber('0.')
				setPreview(preview => preview.concat('0.'))
			}
			else if(number === '0' && num !== '.'){
				setNumber(num)
				setPreview(preview => preview.concat(num))
			}		
			else {	
				setNumber(number => number.concat(num))
				setPreview(preview => preview.concat(num))
			}
		}
	}


	const handleOperator = (op:Operators):void => {
		if (result !== null){ 
			setPreview(result.toString())
		}

		if(preview.slice(-1) !== '-' && preview) {
			if (number && number!=='-'){ 
				dispatch({ type: 'ADD_DIGIT', payload: Number(number)})
			}
		
			if (['+', '/', '*'].includes(preview.slice(-1))) {
				setPreview(preview => preview.substring(0, preview.length - 1).concat(op))
				dispatch({ type: 'ADD_OPERATORS', payload: op})
				return				
			} else {
				setPreview(preview => preview.concat(` ${op} `))
			}

			let operatorsInPreview = preview.match(/[^-\s]\s(\+|-|\*|\/)\s/g)  
			
			if (operatorsInPreview && operatorsInPreview.length >= 1) {
				dispatch({type: 'GET_RESULT'})
			}
			
			dispatch({ type: 'ADD_OPERATORS', payload: op})
			setNumber('')	
		}	
	}

	const handleNegative = ():void => {
		setNumber('-')
		setPreview(preview.concat('-'))
	}

	const handleMinusOperator = ():void => {
		if (number !== '-') {
			(['-', '+', '/', '*'].includes(preview.slice(-1)) || !preview) ? handleNegative() : handleOperator('-')
		}
	}

	const handleResult = ():void => {
		if (result !== null && digits.length > 1){ 
			let res = [result, digits[1]]
			dispatch({type:'CLEAR_ALL'})
			dispatch({type:'ADD_DIGIT', payload: res[0]})		
			dispatch({type:'ADD_DIGIT', payload: res[1]})
			dispatch({type:'GET_RESULT', payload: true})
			setPreview(`${res.join(` ${operators} `)}`)
			dispatch({type:'ADD_HISTORY'})	
		} 
		else if(digits.length === 1 && number){
			dispatch({type: 'ADD_DIGIT', payload: Number(number)})		
			dispatch({type: 'GET_RESULT', payload: true})		
			setNumber('')	
			dispatch({type: 'ADD_HISTORY', payload: preview})	
		}			
	}



	useKeypress(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'], (e) => {
		handleNumber(e.key)		
	});

	useKeypress('Backspace', () => {
		handleDelBtn()			
	});

	useKeypress(['+', '*', '/'], (e) => {
	    handleOperator(e.key as Operators)
	});

	useKeypress('-', () => {
		handleMinusOperator()
	});

	useKeypress('Enter', () => {
	    handleResult()
	});

	useKeypress('Delete', () => {
	    handleClearBtn()
	});



	return (
	    <ThemeProvider theme={Themes[theme]}>
			<Container>
				<div>
					<History/>
					<Calculator historyToggle={historyOpen}>
						<ScreenContainer>
							<Preview>{preview ? preview : '0'}</Preview>
							<Display>
								<DynamicFont 
									content={`${
										prevResult !== null ? prevResult 
										: result !== null? result 
										: number ? number 
										: '0'
									}`}
									style={{transformOrigin: 'left center'}}
								/>
							</Display>	
						</ScreenContainer>

						<OtherBtn onClick={handleDelBtn}>DEL</OtherBtn>
						<OtherBtn onClick={handleClearBtn}>AC</OtherBtn>
						<ConfigBtn>
							<ToggleHistory onClick={toggleHistory}><HistoryIcon/></ToggleHistory>
							<ThemeToggle onClick={toggleTheme}>{theme === 'dark' ? <DarkIcon/> : <LightIcon/>}</ThemeToggle>
						</ConfigBtn>
						<Operator onClick={()=>handleOperator('+')}>+</Operator>

						<NumberBtn onClick={()=>handleNumber('1')}>1</NumberBtn>
						<NumberBtn onClick={()=>handleNumber('2')}>2</NumberBtn>
						<NumberBtn onClick={()=>handleNumber('3')}>3</NumberBtn>
						<Operator onClick={handleMinusOperator}>-</Operator>


						<NumberBtn onClick={()=>handleNumber('4')}>4</NumberBtn>
						<NumberBtn onClick={()=>handleNumber('5')}>5</NumberBtn>
						<NumberBtn onClick={()=>handleNumber('6')}>6</NumberBtn>
						<Operator onClick={()=>handleOperator('*')}>x</Operator>
						

						<NumberBtn onClick={()=>handleNumber('7')}>7</NumberBtn>
						<NumberBtn onClick={()=>handleNumber('8')}>8</NumberBtn>
						<NumberBtn onClick={()=>handleNumber('9')}>9</NumberBtn>
						<Operator onClick={()=>handleOperator('/')}>/</Operator>
						
						<NumberBtn bottomLeft onClick={()=>handleNumber('0')}>0</NumberBtn>
						<NumberBtn onClick={()=>handleNumber('.')}>.</NumberBtn>
						<EqualsButton onClick={handleResult}>=</EqualsButton>
					</Calculator>				
				</div>
			</Container> 
	    </ThemeProvider>
	)
}