export interface DataType {
  id: number,
  name: string,
  price: number,
  category: string,
  description: string,
  stock: number
}

export type DataOptionalType = Partial<DataType>

export type CartStateType = {
  item: DataOptionalType[]
  total: number
}
