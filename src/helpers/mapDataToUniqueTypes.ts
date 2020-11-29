import { Filter } from "../App";
import { DataItem } from "../data/data";

export const mapDataToAllTypesArr = (data: DataItem[]): string[] => {};

export const reduceToUniqueTypes = (allTypes: string[]): string[] => {};

export const convertToFilterObjects = (uniques: string[]): Filter[] => {};

export const mapDataToAllFilters = (data: DataItem[]): Filter[] => {
  const allTypes = mapDataToAllTypesArr(data);
  const uniqueTypes = reduceToUniqueTypes(allTypes);
  const filters = convertToFilterObjects(uniqueTypes);
  return filters;
};
