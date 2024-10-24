export enum MemberType {
    Operator,
    Number
}

export interface CalculationMember {
    id: number;
    value: string;
    type: MemberType;
    hasPriority: boolean;
}
