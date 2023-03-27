import { CalculatorState, Operators } from '../models/calculator';

export const initialState: CalculatorState = {
    digits: [],
    operators: '+',
    prevResult:null,
    result: null,
    history: []
}


export type CalculatorAction =
    | {type:'ADD_DIGIT', payload:number}
    | {type:'ADD_OPERATORS', payload:Operators}
    | {type:'GET_RESULT', payload?: boolean}
    | {type:'CLEAR_ALL'}
    | {type:'CLEAR_RESULTS'}   
    | {type:'ADD_HISTORY', payload?: string}
    | {type: 'CLEAR_HISTORY'}


export default function calculatorReducer (state: CalculatorState, action: CalculatorAction) : CalculatorState{
    switch (action.type){
        case 'ADD_DIGIT':
            return {
                ...state,
                digits:[...state.digits, action.payload]
            }   

        case 'ADD_OPERATORS':
            return {
                ...state,
                operators: action.payload
            }  

        case 'GET_RESULT':
            if (state.digits.length > 1) {
                let operatorCondition = {
                    '+': state.digits[0] + state.digits[1],
                    '-': state.digits[0] - state.digits[1],
                    '/': state.digits[0] / state.digits[1],
                    '*': state.digits[0] * state.digits[1]
                }

                let res: number = operatorCondition[state.operators]


                if (action.payload) { 
                    return {
                        ...state,
                        result: res
                    }
                } else {
                    return {
                        ...state,
                        digits: [res],
                        prevResult: res
                    }  
                }  
            }else{
                return state
            }
         
            

        case 'CLEAR_RESULTS':
            return {
                ...state,
                result: null,
                prevResult: null
            }       


        case 'CLEAR_HISTORY':
            return{
                ...state,
                history:[]
            }

        case 'CLEAR_ALL':
            return{
                ...state,
                digits:[],
                result:null,
                prevResult:null
            }

        case 'ADD_HISTORY':
            let operation = action.payload ?? state.digits.join(` ${state.operators} `)

            return{
                ...state,
                history: [
                    ...state.history, 
                    operation.concat(` = ${state.result}`)
                ]
            }  


        default :
            return state
    }
}

