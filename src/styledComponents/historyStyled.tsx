import styled, { css } from "styled-components"
import { transitionTheme } from './mixins'


export const HistoryContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;    
    margin: auto;
    height: 150px;
    width: 80%;
    background: ${({theme}) => theme.history.bg};
    overflow-y: scroll;
    border-radius: 5% 5% 0 0;
    ${transitionTheme('background, transform')};

    @media (min-width: 850px) {
        top: 0;
        bottom: 0;    	
        height: 90%;
    	border-radius: 0;

		${props => props.historyToggle && css`
		    transform: translateX(50%);
		`}
  	}
`;

const ButtonItem = styled.button`
	cursor: pointer;
    width: 100%;
	padding: 5px;
    font:700 1.8rem 'Fira Code', monospace;
    word-break: break-word;
    border: none;
    border-bottom: 1px black dotted;
    ${transitionTheme('background, color')};

    @media (min-width: 850px) {
        padding: 5px 10px;
	}
`;


export const HistoryItem = styled(ButtonItem)`
	color: ${({theme}) => theme.history.fontColor};    
	text-align: left;
    background: transparent;

    &:hover{
    	background:${({theme}) => theme.history.hover.item};
    }
`;

export const ClearHistory = styled(ButtonItem)`
    color: #fff;
    text-align: center;
    background: ${({theme}) => theme.history.clearBtn};

    &:hover{
    	background:${({theme}) => theme.history.hover.clear};
    }
`;
