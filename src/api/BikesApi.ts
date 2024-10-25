import { toast } from "react-toastify";
import api from "./axios";
import { TBikesResponse } from "@/types";

export const BikesSearchRequest = async (page: number = 1, title: string) => {
  // console.log(page);
  console.log(title);
  try {
    const response = await api.get<TBikesResponse>(
      `/search?page=${page}&per_page=10&query=${title}`
    );
    console.log(response);
    if (!response) {
      throw new Error("Failed to login");
    }
    return response;
  } catch (err: any) {
    toast.error(err);
    throw new Error(err);
  }
};
