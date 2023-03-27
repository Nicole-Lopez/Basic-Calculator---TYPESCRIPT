export interface CalculatorState {
    digits: [number, number] | number[];
    operators: Operators;
    prevResult: number | null;
   	result: number | null;
    history: string[];
}

export type Operators = '+' | '-' | '*' | '/';

export type Themes = 'dark' | 'light'; 



