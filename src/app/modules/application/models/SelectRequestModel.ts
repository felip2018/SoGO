import IFieldValueModel from "./FieldValueModel";
import IOrderByModel from "./SqlOrderByModel";

export default interface ISelectRequestModel {
    table: string;
    fields: string[];
    conditions?: IFieldValueModel[];
    order?: IOrderByModel;
}
