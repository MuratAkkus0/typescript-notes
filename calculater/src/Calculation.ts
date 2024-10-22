// // import { CalculationFunction } from "./interfaces/CalculationFunction"
// // import { CalculationInput } from "./interfaces/CalculationInput"
// // import { MathOperators } from "./interfaces/MathOperators"

// enum MathOperators{
//     Addition = "+",
//     Subtraction = "-",
//     Multiplication = "*",
//     Division = "/"
// }

// interface CalculationInput {
//     firstNumber: number ,
//     secondNumber: number,
//     mathOperation: MathOperators
// }

// interface CalculationFunction {
//     (calcObj: CalculationInput): number;
//     }

// interface CalculationMember {
//     id: number,
//     value: string,
//     type: MemberType,
//     hasPriority: boolean // During Calculation it will be true
// }

// enum MemberType {
//     Operator,
//     Number
// }



// const getCalculationMembers = (userInput: string) => {
//     let userInputArr: Array<string> = userInput.match(/\d+|[+\-*/]/g) || [];
//     let resultArr: Array<CalculationMember> = [];
//     userInputArr.forEach((item, index) => {
//         let newMember: CalculationMember = {
//             id: index,
//             value: item,
//             type: MemberType.Number, //Default
//             hasPriority: false
//         }
//         if (isNaN(Number(item))) {
//             newMember.type = MemberType.Operator;
//         }
//         resultArr.push(newMember);
//     })
//     return resultArr;
// }

// const setPriority = (CalculationMembers: Array<CalculationMember>): void | boolean => {
//     for (let i: number = 0; i < CalculationMembers.length; i++) {
//         CalculationMembers[i].id = i;
//         if (CalculationMembers[i].type === MemberType.Operator && (CalculationMembers[i].value === MathOperators.Multiplication || CalculationMembers[i].value === MathOperators.Division)) {
//             CalculationMembers[i].hasPriority = true;
//             CalculationMembers[i - 1].hasPriority = true;
//             CalculationMembers[i + 1].hasPriority = true;
//             if (i === CalculationMembers.length - 1) { return true; };
//             break;
//         }
//     }
// }



// const Calculation = (CalcMemberArray: CalculationMember[]): any => {
//     let priorityMembers : Array<CalculationMember> = CalcMemberArray.filter(member => member.hasPriority === true);
//     // console.log(priorityMembers.length)
//     let result: CalculationMember = {
//         id: priorityMembers[0].id,
//         value: "",
//         type: MemberType.Number,
//         hasPriority: false
//     }
//     if (priorityMembers.length > 0) {
//         console.log(priorityMembers)
//         console.log(priorityMembers.length)
//         /*
//         priorityMembers[0] => First Number
//         priorityMembers[1] => Operator
//         priorityMembers[2] => Second Number
//         */
//         switch (priorityMembers[1].value) {
//             case MathOperators.Multiplication:
//                 result.value = String((Number(priorityMembers[0].value) * Number(priorityMembers[2].value)));
//                 break;
//             case MathOperators.Division:
//                 result.value = String((Number(priorityMembers[0].value)/ Number(priorityMembers[2].value)));
//                 break;
//         }
//         console.log(result.value)
//         console.log("check: ")
//         console.log(priorityMembers[0].id)
//         CalcMemberArray.splice(priorityMembers[0].id, 3, result);
//         return Number(result.value);
//     } else {
//         switch (CalcMemberArray[1].value) {
//             case MathOperators.Addition:
//                 result.value =String(Number(CalcMemberArray[0].value)+ Number(CalcMemberArray[2].value));
//                 break;
//             case MathOperators.Subtraction:
//                 result.value= String(Number(CalcMemberArray[0].value)- Number(CalcMemberArray[2].value));
//                 break;
//         }
//         CalcMemberArray.splice(CalcMemberArray[0].id, 3, result);
//         priorityMembers = [];
//         return Number(result.value);
//     }
// }

// let input: string = "5+25/2*4";
// const Calculator = (input: string): number => {
//     let result: number = 0;
//     let CalcMemberArray: CalculationMember[] = getCalculationMembers(input);
//     let priorityControlFinished = setPriority(CalcMemberArray) || false;
//     console.log(CalcMemberArray)


//     for (let i: number = 0; i < 57; i++){
//         result = Calculation(CalcMemberArray);
//         setPriority(CalcMemberArray);
//         console.log(CalcMemberArray.length)
//     } 

//     // console.log(CalcMemberArray)
//     return result;
// }
// console.log(Calculator(input));
enum MathOperators {
    Addition = "+",
    Subtraction = "-",
    Multiplication = "*",
    Division = "/"
}

interface CalculationInput {
    firstNumber: number,
    secondNumber: number,
    mathOperation: MathOperators
}

interface CalculationFunction {
    (calcObj: CalculationInput): number;
}

interface CalculationMember {
    id: number,
    value: string,
    type: MemberType,
    hasPriority: boolean // During Calculation it will be true
}

enum MemberType {
    Operator,
    Number
}

const getCalculationMembers = (userInput: string): Array<CalculationMember> => {
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

const setPriority = (CalculationMembers: Array<CalculationMember>): void => {
    CalculationMembers.forEach((member, index) => {
        if (member.type === MemberType.Operator &&
            (member.value === MathOperators.Multiplication || member.value === MathOperators.Division)) {
            CalculationMembers[index].hasPriority = true;
            CalculationMembers[index - 1].hasPriority = true;
            CalculationMembers[index + 1].hasPriority = true;
        }
    });
}

const Calculation = (CalcMemberArray: CalculationMember[]): any => {
    let priorityMembers = CalcMemberArray.filter(member => member.hasPriority === true);

    let result: CalculationMember = {
        id: 0,
        value: "",
        type: MemberType.Number,
        hasPriority: false
    };
    console.log("***");
    
    console.log(priorityMembers.length > 0 && CalcMemberArray.length > 3)
    if (priorityMembers.length > 0) {
        result.id = priorityMembers[0].id;
        switch (priorityMembers[1].value) {
            case MathOperators.Multiplication:
                result.value = String(Number(priorityMembers[0].value) * Number(priorityMembers[2].value));
                break;
            case MathOperators.Division:
                result.value = String(Number(priorityMembers[0].value) / Number(priorityMembers[2].value));
                break;
            default:
                break;
        }

        CalcMemberArray.splice(priorityMembers[0].id, 3, result);
        return result.value;
    } else {
        if (CalcMemberArray.length > 3) {
            return;
        }
        // Toplama veya çıkarma işlemi
        result.id = CalcMemberArray[0].id;
        console.log("----")
        console.log(CalcMemberArray)
        switch (CalcMemberArray[1].value) {
            case MathOperators.Addition:
                result.value = String(Number(CalcMemberArray[0].value) + Number(CalcMemberArray[2].value));
                break;
            case MathOperators.Subtraction:
                result.value = String(Number(CalcMemberArray[0].value) - Number(CalcMemberArray[2].value));
                break;
        }
        CalcMemberArray.splice(CalcMemberArray[0].id, 3, result);
        return result.value;
    }
}

const Calculator = (input: string): string => {
    let result: string = "";
    let CalcMemberArray: CalculationMember[] = getCalculationMembers(input);
    console.log(CalcMemberArray)

    while (CalcMemberArray.length > 1) {
        result = Calculation(CalcMemberArray);
        setPriority(CalcMemberArray);
        console.log(CalcMemberArray)
    }
    return result;
}
let input: string = "5+25/2*4*2";
console.log(Calculator(input));

