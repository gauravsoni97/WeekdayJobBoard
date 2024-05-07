import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const CustomChip = (props) => (
  <Chip
    {...props}
    style={{ borderRadius: "4px" }}
    deleteIcon={<CloseRoundedIcon style={{ color: "black", fontSize: ".8rem" }} />}
  />
);

const Filter = () => {
  const [filters, setFilters] = useState({
    roles: [],
    experience: null,
    minBasePay: null,
    companyName: null,
  });

  const handleAutocompleteChange = (filterKey, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: value,
    }));
  };
  

console.log("filters", filters);
  return (
    <div style={{ display: "flex", width: "100%", gap: "1rem", flexWrap: "wrap" }}>
      <Autocomplete
        sx={{ width: 180 }}
        multiple
        id="Filter-roles"
        options={["Developer", "Designer", "Manager", "Engineer"]}
        value={filters.roles}
        onChange={(e, newValue) => handleAutocompleteChange("roles", newValue)}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} placeholder="Roles" />}
        renderTags={(selected, getTagProps) =>
          selected.map((option, index) => <CustomChip label={option} {...getTagProps({ index })} />)
        }
      />
      <Autocomplete
        sx={{ width: 180 }}
        id="Filter-experience"
        options={Array.from({ length: 10 }, (_, i) => (i + 1).toString())}
        value={filters.experience}
        onChange={(e, newValue) => handleAutocompleteChange("experience", newValue)}
        renderInput={(params) => <TextField {...params} placeholder="Experience" />}
      />
      <Autocomplete
        sx={{ width: 180 }}
        id="Filter-minBasePay"
        options={["10L", "20L", "30L", "40L", "50L", "60L", "70L"]}
        value={filters.minBasePay}
        onChange={(e, newValue) => handleAutocompleteChange("minBasePay", newValue)}
        renderInput={(params) => <TextField {...params} placeholder="Min Base Pay" />}
      />
      <Autocomplete
        sx={{ width: 180 }}
        id="Filter-companyName"
        options={["Google", "Facebook", "Amazon", "Microsoft"]}
        value={filters.companyName}
        onChange={(e, newValue) => handleAutocompleteChange("companyName", newValue)}
        renderInput={(params) => <TextField {...params} placeholder="Company Name" />}
      />
    </div>
  );
};

export default Filter;
