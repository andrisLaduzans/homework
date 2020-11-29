import { data } from "../data/data";
import {
  convertToFilterObjects,
  mapDataToAllFilters,
  mapDataToAllTypesArr,
  reduceToUniqueTypes,
} from "./mapDataToUniqueTypes";

describe("should map raw data to unique types", () => {
  it("should first get all available types", () => {
    const allTypes = mapDataToAllTypesArr(data);
    expect(allTypes).toEqual(["cat", "cat", "dog", "mouse", "cat", "dog"]);
  });

  it("should then reduce to only unique types:", () => {
    const allTypes: string[] = ["cat", "cat", "dog", "mouse", "cat", "dog"];
    const uniqueTypes = reduceToUniqueTypes(allTypes);
    expect(uniqueTypes).toEqual(["cat", "dog", "mouse"]);
  });

  it("should convert unique types to objects with id and 'isChecked' params", () => {
    const uniques = ["cat", "dog", "mouse"];
    const uniqueTypes = convertToFilterObjects(uniques);
    expect(uniqueTypes).toEqual([
      { id: 0, name: "cat", isChecked: false },
      { id: 1, name: "dog", isChecked: false },
      { id: 2, name: "mouse", isChecked: false },
    ]);
  });

  it("should all work from one function", () => {
    const uniqueTypes = mapDataToAllFilters(data);
    expect(uniqueTypes).toEqual([
      { id: 0, name: "cat", isChecked: false },
      { id: 1, name: "dog", isChecked: false },
      { id: 2, name: "mouse", isChecked: false },
    ]);
  });
});
