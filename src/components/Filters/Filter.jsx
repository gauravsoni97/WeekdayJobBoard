import React, { useState } from "react";
import MultiSelectFilter from "./AllFilters/MultiSelectFilter";

const Filter = () => {

  const [customFilter, setCustomFilter] = useState({
    roles:[],
    employeeNum:null,
    experience:null,
    workMode:[],
    techStack:[],
    minBasePay:null,
    companyName:null,
  })

  return (
    <div>
      <MultiSelectFilter />
    </div>
  );
};

export default Filter;
