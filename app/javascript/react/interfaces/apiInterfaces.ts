export enum ApiStatusEnum {
  success = "success",
  error = "error",
}

export interface IRaffleResponse {
  id: number;
  title: string;
}

export interface IRaffleTicketsResponse {
  number: number;
  status: number;
}

export interface IUserFormInfo {
  first_name: string;
  last_name: string;
  cellphone: string;
  state: string;
}

export interface IBasicResponse {
  status: ApiStatusEnum;
}
