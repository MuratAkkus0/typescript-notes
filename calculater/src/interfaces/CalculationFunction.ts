import { CalculationInput } from "./CalculationInput";

export interface CalculationFunction {
(calcObj: CalculationInput): number;
}