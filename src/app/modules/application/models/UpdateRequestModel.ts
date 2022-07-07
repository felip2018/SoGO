import IFieldValueModel from "./FieldValueModel";

export default interface IUpdateRequestModel {
    table: string;
    data: IFieldValueModel[],
    conditions: IFieldValueModel[],
}