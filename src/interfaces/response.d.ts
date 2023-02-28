export interface IResData<DataType> {
  statusCode: number;
  message: string;
  data: DataType;
}

export interface IResError {
  statusCode: number;
  message: string;
}
