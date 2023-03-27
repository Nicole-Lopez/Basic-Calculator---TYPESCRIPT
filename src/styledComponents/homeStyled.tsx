import styled, { css } from "styled-components"
import { Moon, Sun, History } from '@styled-icons/octicons'
import { transitionTheme } from './mixins'

export const Container = styled.div`
    height: 80vh;
    padding: 10vh 0;
    overflow: auto;
    background-color: ${({theme}) => theme.bgContainer };
	${transitionTheme('background-color')};

	&>div:first-child{
 		width: fit-content; 
 		margin: auto; 
 		position: relative;
	}
`;

export const Calculator = styled.div`
	position: relative;
	display: grid;
	grid-template-columns:repeat(4, 1fr);
	grid-template-rows: repeat(7, 1fr);	    
	width: clamp(290px, 65vw, 400px);
    height: clamp(500px, 95vw, 700px);
	margin: 0 auto;
	transition: transform .4s ease-in-out;

	${props => props.historyToggle && css`
		transform: translateY(150px);
		
		@media (min-width: 850px) {
		    transform: translateX(-50%);
		}
	`}
`;

export const ScreenContainer = styled.div`
	grid-column: 1 / 5;
	grid-row: 1/3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	padding: 20px 15px 5px 20px;
	background-color: ${({theme}) => theme.display.bg};
	font-family: 'Fira Code', monospace;	
	border-radius: 30px 30px 0 0;
	${transitionTheme('background-color')};
`;


export const Preview = styled.p`
    display: flex;
    flex-direction: row-reverse;
    overflow: auto;
    padding-bottom: 2px;
	text-align: right;
	color:${({theme}) => theme.display.prevColor}; 
	font-size: 2.4rem; 
	font-weight:700;
    white-space: nowrap;
  	${transitionTheme('color')};
`;
 
export const Display = styled.div`
    overflow: hidden;

    p{
		color:${({theme}) => theme.display.color}; 
		font-size: 4.5rem; 
		font-weight:500;    	
		text-align: right;
		${transitionTheme('color')};	
    }
`;


const ButtonCalculator = styled.button`
	color: ${({theme}) => theme.buttonGeneralStyles.fontColor};	
	font-family: 'Fira Code', monospace;
	border: solid 1px ${({theme}) => theme.buttonGeneralStyles.borderColor};	
	${transitionTheme('color, border')};

	&:hover{
		background: ${({theme}) => theme.buttonGeneralStyles.hover.bg};	
	}
`;

export const OtherBtn = styled(ButtonCalculator)`
	font-weight: 900;
	font-size: 2.5rem;
	background-color: ${({theme}) => theme.bgOtherButtons};
`;

export const Operator = styled(ButtonCalculator)`
	font-size: 3rem;
	background-color: ${({theme}) => theme.bgOperator};
`;

export const NumberBtn = styled(ButtonCalculator)`
	font-size: 2.5rem;
	background-color: ${({theme}) => theme.bgNumber};

	${props => props.bottomLeft && css`
		border-bottom-left-radius: 20px;
	`}
`;

export const EqualsButton = styled(ButtonCalculator)`
	grid-column: 3/5;		
	color:${({theme}) => theme.equalsButton.fontColor};
	font-size: 5rem;
	background-color: ${({theme}) => theme.equalsButton.bg};
	border-bottom-right-radius: 20px;
`;



export const ConfigBtn = styled.div`
	position: relative;
	background-color: ${({theme}) => theme.bgOtherButtons};
	border: solid 1px ${({theme}) => theme.buttonGeneralStyles.borderColor};	
	${transitionTheme('border')};
	
	&:after {
   		content: "";
    	display: block;
   		height: 100%;
	    clip-path: polygon(100% 2%, 100% 0%, 0% 100%, 2% 100%);
		background-color: ${({theme}) => theme.buttonGeneralStyles.borderColor};
  	}
`;

const iconInBtnCalculator = css`
	height: 42%;
`;


export const HistoryIcon = styled(History)`
	${iconInBtnCalculator}
`
export const DarkIcon = styled(Moon)`
	${iconInBtnCalculator}
`
export const LightIcon = styled(Sun)`
	${iconInBtnCalculator}
`

const diagonalSplitButton = styled(ButtonCalculator)`
	position: absolute;
	height: 100%;
    width: 100%;
    background: transparent;
    border:none;
    padding: 10%;
	display: flex;
`;


export const ToggleHistory = styled(diagonalSplitButton)`
	top:0;
	clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
`

export const ThemeToggle = styled(diagonalSplitButton)`
	right:0;
	clip-path: polygon(100% 100%, 100% 0%, 0% 100%);
	align-items: flex-end;
    justify-content: flex-end;
`


