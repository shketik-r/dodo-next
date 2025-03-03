
import { axiosInstance } from "./instance"
import { ApiRouts } from "./constants";
import { Ingredient } from "@prisma/client";

export const getAll = async (): Promise<Ingredient[]> => {
  const {data} = await axiosInstance.get<Ingredient[]>(ApiRouts.INGREDIENTS);
  return data;
}