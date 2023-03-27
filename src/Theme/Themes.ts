const LightTheme = {
	bgContainer: '#e4e5f1',
	display: {
		bg: '#FFF',
		color: '#000',
		prevColor: '#2dc4b6',
	},
	bgOperator: '#c1eeea',
	bgNumber: '#fdfdfd',
	bgOtherButtons: '#fdfdfd',
	fontColor: '#000',
	buttonGeneralStyles: {
		borderColor: '#eaeaea',
		fontColor: '#000',
		hover: {
			bg:'linear-gradient(0deg, rgba(255,240,223,1) 0%, rgba(255,216,117,1) 50%, rgba(255,240,223,1) 100%)'
		}	
	},
	equalsButton: {
		fontColor: '#fff',
		bg: '#27a89c'
	},
	history: {
		bg: '#f5f5f5',
		fontColor: '#000',
		clearBtn: '#3A98B9',
		hover: {
			item: '#dbdbdb',
			clear: '#3488a6'
		}
	}
}


const DarkTheme = {
	bgContainer: '#2d2d2d',
	display: {
		bg: '#010808',
		color: '#fff',
		prevColor: '#2dc4b6',
	},
	bgOperator: '#0e4b4f',
	bgNumber: '#08151a',
	bgOtherButtons: '#071415',
	fontColor: '#FFF',
	buttonGeneralStyles: {
		borderColor: '#040d0f',
		fontColor: '#FFF',
		hover: {
			bg:'linear-gradient(0deg, rgba(26,68,84,1) 0%, rgba(14,37,45,1) 50%, rgba(26,68,84,1) 100%)'
		}
	},
	equalsButton: {
		fontColor: '#fff',
		bg: '#27a89c'
	},	
	history: {
		bg: '#04293a',
		fontColor: '#FFF',
		clearBtn: '#50577A',
		hover: {
			item: '#063a52',
			clear: '#646d99'
		}
	}
}


const Themes = {
	light:LightTheme,
	dark:DarkTheme
}

export default Themes