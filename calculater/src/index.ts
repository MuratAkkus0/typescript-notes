import { Calculation, getCalculationMembers, setPriority } from "./core/calculator"
import { MathOperators } from "./core/models/math-operators"
import { CalculationMember, MemberType } from './core/models/calculation-member';
import { add } from './core/operations/addition';
import { subtract } from './core/operations/subtraction';

// Selecting DOM Elements
const calculaterScreen: HTMLDivElement = document.querySelector('.calculator__screen')!;
const numberBtnsContainer: HTMLDivElement = document.querySelector(".calculator__numbers")!;
const operatorBtnsContainer: HTMLDivElement = document.querySelector(".calculator__operators")!;

// Defining Global Variables
let isFirstClick: boolean = true;

const addEventListeners = (): void => {
    const operatorBtns = document.querySelectorAll(".calculator__operator") as NodeListOf<HTMLDivElement>;
    const numberBtns = document.querySelectorAll(".calculator__number") as NodeListOf<HTMLDivElement>;
    const delBtn = document.querySelector('.del__btn') as HTMLDivElement;
    const refBtn = document.querySelector('.refresh__btn') as HTMLDivElement;
    const equalBtn = document.querySelector('.calculator__equal') as HTMLDivElement;

    numberBtns.forEach((item) => item.addEventListener('click', getBtnValue))
    operatorBtns.forEach((item) => item.addEventListener('click', getBtnValue))
    refBtn.addEventListener('click', refreshCalculator);
    delBtn.addEventListener('click', delNumber);
    equalBtn.addEventListener('click', inputControl);
}

const getBtnValue = (e: MouseEvent): void => {
    let value = e.target as HTMLElement;
    if (value.classList.contains('calculator__number') && isFirstClick) {
        calculaterScreen.innerHTML = '';
        isFirstClick = false;
    }
    if (value.classList.contains('calculator__operator')) {
        let screenText: string = calculaterScreen.innerHTML;
        let lastChar: string = screenText.split("")[screenText.length - 1] || "";

        if (isNaN(Number(lastChar))) {
            let textLength: number = screenText.length;
            screenText = screenText.substring(0, textLength - 1)
            calculaterScreen.innerHTML = screenText;
        }
    }
    let btn = e.target as HTMLElement;
    calculaterScreen.innerHTML += btn.innerText;
}

const setNumberBtns = (): void => {
    for (let i: number = 9; i >= 0; i--) {
        numberBtnsContainer.innerHTML += `
        <div class="calculator__number input__btn">${i}</div>`
    }

}

const setOperatorBtns = (): void => {
    let MathOperatorsValues: Array<string> = [...Object.values(MathOperators)];
    let index: number = MathOperatorsValues.indexOf('*');
    MathOperatorsValues.splice(index, 1, 'x');
    for (let i in MathOperatorsValues) {
        operatorBtnsContainer.innerHTML += `
        <div class="calculator__operator input__btn">${MathOperatorsValues[i]}</div>
        `
    }
}

const refreshCalculator = (): void => {
    calculaterScreen.innerHTML = "0";
    isFirstClick = true;
}

const delNumber = (): void => {
    let textLength: number = calculaterScreen.innerHTML.length;
    if (textLength > 1) {
        calculaterScreen.innerHTML = calculaterScreen.innerHTML.substring(0, textLength - 1)
    } else {
        refreshCalculator();
    }
}

const inputControl = (): void => {
    const screenElement = document.querySelector('.calculator__screen') as HTMLDivElement;
    const currentInput: string = screenElement.innerHTML;
    let result: string = '';
    let arr: Array<string> = currentInput.split("");
    result = currentInput;
    if (['x', '/'].includes(currentInput.charAt(0))) {
        arr.splice(0, 1);
        result = arr.join("");
        calculaterScreen.innerHTML = result;
    }
    if (isNaN(Number(currentInput.charAt(currentInput.length - 1)))) {
        arr.splice(currentInput.length - 1, 1);
        result = arr.join("");
        calculaterScreen.innerHTML = result;
    }
    result = result.replace('x', '*');
    Calculator(result);
}

const Calculator = (input: string): void => {
    let output: string = "";
    let CalcMemberArray: CalculationMember[] = getCalculationMembers(input);

    setPriority(CalcMemberArray);
    Calculation(CalcMemberArray);

    while (CalcMemberArray.length > 1) {
        let operator: string = CalcMemberArray[1].value;
        let firstNumber: number = Number(CalcMemberArray[0].value);
        let secondNumber: number = Number(CalcMemberArray[2].value);

        let result: number = 0;
        switch (operator) {
            case MathOperators.Addition:
                result = add(firstNumber, secondNumber);
                break;
            case MathOperators.Subtraction:
                result = subtract(firstNumber, secondNumber);
                break;
        }

        CalcMemberArray.splice(0, 3, {
            id: 0,
            value: result.toString(),
            type: MemberType.Number,
            hasPriority: false
        });
    }
    if (CalcMemberArray.length === 1) {
        output = CalcMemberArray[0].value
    }

    calculaterScreen.innerHTML = output;
}

let mainControl = (): void => {
    setNumberBtns()
    setOperatorBtns()
    refreshCalculator()
    addEventListeners()
}

mainControl();
