export interface IOrder {
  _id: string,
  createdAt: Date,
  status: string,
  name: string,
  number: number,
  ingredients: Array<string>,
}
