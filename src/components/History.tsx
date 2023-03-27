import { useContext } from '../context/calculatorContext';
import { useKeypress } from '../hooks/useKeypress';
import { 
	HistoryContainer,
	HistoryItem, 
	ClearHistory 
} from '../styledComponents/historyStyled';

export default function History() {
	const {dispatch, history, historyOpen, setPreview, setNumber} = useContext();

	const handleHistory = (e:string):void => {
		let aux = e.split(' ')		

		setPreview(aux.slice(0, -2).join(' '))
		setNumber(aux[aux.length - 1])
		dispatch({type:'CLEAR_ALL'})	
	}

	const clearHistory = () => dispatch({type: 'CLEAR_HISTORY'})

	return (
		<HistoryContainer historyToggle={historyOpen}>
			<ClearHistory onClick={clearHistory}>Clear history</ClearHistory>

			{history.map((item, index) => {
				return (
					<HistoryItem 
						key={`${item}123+${index}`} 
						onClick={() => handleHistory(item)}
					>
						{item}
					</HistoryItem>
				)
			})}			
		</HistoryContainer>
	)
}