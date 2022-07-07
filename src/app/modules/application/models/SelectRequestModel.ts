import IFieldValueModel from "./FieldValueModel";

export default interface ISelectRequestModel {
    table: string;
    fields: string[],
    conditions: IFieldValueModel[]
}