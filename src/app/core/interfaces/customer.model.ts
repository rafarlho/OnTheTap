export interface CustomerModel {
    id: number;
    firstName: string;
    lastName: string;
    table: number;
    avatar?: string;
    owes?:number| null
}
