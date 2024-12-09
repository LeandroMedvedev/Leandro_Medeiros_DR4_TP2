interface IData {
  [key: string]: any;
}

type ActionType = '1' | '2' | '3';

type ValidationFunction = (data: IData) => string[];

interface IValidateFields {
  (data: IData, actionType?: string): string[];
}

export type { IValidateFields, ValidationFunction };
