import { Calculation, getCalculationMembers, setPriority } from "./core/calculator"
import { MathOperators } from "./core/models/math-operators"
import { CalculationMember, MemberType } from './core/models/calculation-member';
import { add } from './core/operations/addition';
import { subtract } from './core/operations/subtraction';

// Selecting DOM Elements
const calculatorScreen: HTMLDivElement = document.querySelector('.calculator__screen')!;
const numberBtnsContainer: HTMLDivElement = document.querySelector(".calculator__numbers")!;
const operatorBtnsContainer: HTMLDivElement = document.querySelector(".calculator__operators")!;

// Defining Global Variables
let isFirstClick: boolean = true;

const addEventListeners = (): void => {
    const operatorBtns: NodeListOf<HTMLDivElement> = document.querySelectorAll(".calculator__operator");
    const numberBtns: NodeListOf<HTMLDivElement> = document.querySelectorAll(".calculator__number");
    const delBtn: HTMLDivElement = document.querySelector('.del__btn')!;
    const refBtn: HTMLDivElement = document.querySelector('.refresh__btn')!;
    const equalBtn: HTMLDivElement = document.querySelector('.calculator__equal')!;

    numberBtns.forEach(item => item.addEventListener('click', getBtnValue))
    operatorBtns.forEach(item => item.addEventListener('click', getBtnValue))
    refBtn.addEventListener('click', refreshCalculator);
    delBtn.addEventListener('click', delNumber);
    equalBtn.addEventListener('click', inputControl);
}

const getBtnValue = (e: MouseEvent): void => {
    const value = e.target as HTMLElement;
    if (value.classList.contains('calculator__number') && isFirstClick) {
        calculatorScreen.innerHTML = '';
        isFirstClick = false;
    }
    if (value.classList.contains('calculator__operator')) {
        let screenText: string = calculatorScreen.innerHTML;
        let lastChar: string = screenText[screenText.length - 1] || ""; // string e de dizide oldugu gibi karakterin sirasini verip erisebilirsin.

        if (isNaN(Number(lastChar))) {
            screenText = screenText.slice(0, -1);
            calculatorScreen.innerHTML = screenText;
        }
    }
    calculatorScreen.innerHTML += value.innerText;
}

const setNumberBtns = (): void => {
    for (let i = 9; i >= 0; i--) {
        numberBtnsContainer.innerHTML += `
        <div class="calculator__number input__btn">${i}</div>`
    }

}

const setOperatorBtns = (): void => {
    // map methodu mevcut arraydaki her elemani ilgili fonksiyonun return u ile degistirir.
    const MathOperatorsValues: Array<string> = Object.values(MathOperators).map(op => op === '*' ? 'x' : op);
    MathOperatorsValues.forEach((operator)=>{
        operatorBtnsContainer.innerHTML += `
        <div class="calculator__operator input__btn">${operator}</div>
        `
    })
}

const refreshCalculator = (): void => {
    calculatorScreen.innerHTML = "0";
    isFirstClick = true;
}

const delNumber = (): void => {
    let textLength: number = calculatorScreen.innerHTML.length;
    if (textLength > 1) {
        calculatorScreen.innerHTML = calculatorScreen.innerHTML.substring(0, textLength - 1)
    } else {
        refreshCalculator();
    }
}

const inputControl = (): void => {
    // const screenElement = document.querySelector('.calculator__screen') as HTMLDivElement;
    const currentInput: string[] = calculatorScreen.innerHTML.split("");
    let result: string[] = [...currentInput];
    if (['x', '/'].includes(result[0])) {
        result.shift();
        calculatorScreen.innerHTML = result.join('');
    }
    const lastChar = result[result.length-1];
    if (isNaN(Number(lastChar))) {
        result.pop();
        calculatorScreen.innerHTML = result.join('');
    }
    const formattedInput = result.join('').replace('x','*');
    Calculator(formattedInput);
}

const Calculator = (input: string): void => {
    let calcMembers: CalculationMember[] = getCalculationMembers(input);

    setPriority(calcMembers);
    Calculation(calcMembers);

    while (calcMembers.length > 1) {
        let operator: string = calcMembers[1].value;
        let firstNumber: number = Number(calcMembers[0].value);
        let secondNumber: number = Number(calcMembers[2].value);

        let result: number = 0;
        switch (operator) {
            case MathOperators.Addition:
                result = add(firstNumber, secondNumber);
                break;
            case MathOperators.Subtraction:
                result = subtract(firstNumber, secondNumber);
                break;
        }

        calcMembers.splice(0, 3, {
            id: 0,
            value: result.toString(),
            type: MemberType.Number,
            hasPriority: false
        });
    }
    if (calcMembers.length === 1) {
        calculatorScreen.innerHTML = calcMembers[0].value;
    }
}

let mainControl = (): void => {
    setNumberBtns()
    setOperatorBtns()
    refreshCalculator()
    addEventListeners()
}

mainControl();
