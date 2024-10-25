import { SetStateAction } from "react";
import { SetURLSearchParams } from "react-router-dom";

export interface INoData {
  title: string;
  classes?: string;
}
export interface IBikePagination {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  page: number;
  setPage: (value: SetStateAction<number>) => void;
  pagesArray: number[];
}
export interface IBikeSearch {
  title: string;
  setTitle: (value: SetStateAction<string>) => void;
}
export interface IBikeTitle {
  title: string;
  value: string | string[];
}
