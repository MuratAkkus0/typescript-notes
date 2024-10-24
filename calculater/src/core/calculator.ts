import { MathOperators } from './models/math-operators';
import { CalculationMember, MemberType } from './models/calculation-member';
import { multiply } from './operations/multiplication';
import { divide } from './operations/division';

export const getCalculationMembers = (userInput: string): Array<CalculationMember> => {
    let userInputArr: Array<string> = userInput.match(/\d+|[+\-*/]/g) || [];
    let resultArr: Array<CalculationMember> = [];
    userInputArr.forEach((item, index) => {
        let newMember: CalculationMember = {
            id: index,
            value: item,
            type: MemberType.Number, // Default
            hasPriority: false
        };
        if (isNaN(Number(item))) {
            newMember.type = MemberType.Operator;
        }
        resultArr.push(newMember);
    });
    return resultArr;
}

export const setPriority = (CalculationMembers: Array<CalculationMember>): boolean => {
    let hasPriority = false;
    for (let i = 0; i < CalculationMembers.length; i++) {// For dongusu Foreach fongusunden daha performanslidir cunku foreach her lement icin bir fonksiyon cagrisi yapar.
        if (CalculationMembers[i].type === MemberType.Operator &&
            (CalculationMembers[i].value === MathOperators.Multiplication ||
                CalculationMembers[i].value === MathOperators.Division)) {
            CalculationMembers[i].hasPriority = true;
            hasPriority = true;
        }
    }
    return hasPriority;
}

export const Calculation = (CalcMemberArray: CalculationMember[]): any => {
    let i: number = 0;
    while (i < CalcMemberArray.length) {
        if (CalcMemberArray[i].hasPriority && CalcMemberArray[i].type === MemberType.Operator) {
            let result: number = 0;
            let operator: string = CalcMemberArray[i].value;
            let firstNumber: number = Number(CalcMemberArray[i - 1].value);
            let secondNumber: number = Number(CalcMemberArray[i + 1].value);
            switch (operator) {
                case MathOperators.Multiplication:
                    result = multiply(firstNumber, secondNumber);
                    break;
                case MathOperators.Division:
                    result = divide(firstNumber, secondNumber);
                    break;
                default:
                    break;
            }
            let newMember: CalculationMember = {
                id: i - 1,
                value: String(result),
                type: MemberType.Number,
                hasPriority: false
            };
            CalcMemberArray.splice(i - 1, 3, newMember);

            i = 0;
        } else {
            i++;
        }
    }
}



