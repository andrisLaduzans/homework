import React, { useEffect, useState } from "react";
import { data } from "./data/data";
import { mapDataToAllFilters } from "./helpers/mapDataToUniqueTypes";

export interface Filter {
  id: number;
  name: string;
  isChecked: boolean;
}

function App() {
  const [allFilters, setAllFilters] = useState<Filter[]>([]);

  useEffect(() => {
    const filters = mapDataToAllFilters(data);
    setAllFilters([...filters]);
  }, []);

  return (
    <div className="App">
      {allFilters.map((filter, idx) => {
        return <h3 key={filter.id}>{filter.name}</h3>;
      })}
    </div>
  );
}

export default App;
