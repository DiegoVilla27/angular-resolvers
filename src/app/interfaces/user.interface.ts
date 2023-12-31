// Generated by https://quicktype.io

export interface IResult {
  support: ISupport;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
}

export interface IResultSingle extends IResult {
  data: IUser;
}

export interface IResultMultiple extends IResult {
  data: IUser[];
}

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ISupport {
  url: string;
  text: string;
}
