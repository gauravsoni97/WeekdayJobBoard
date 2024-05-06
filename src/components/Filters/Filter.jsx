import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "Godfather", year: 1972 },
  { title: "Godfather", year: 1972 },
  { title: "Godfather", year: 1972 },
  { title: "Godfather", year: 1972 },
  { title: "Godfather", year: 1972 },
  { title: "Godfather", year: 1972 },
];

const CustomChip = (props) => {
  return (
    <Chip
      {...props}
      style={{ borderRadius: "4px" }}
      deleteIcon={
        <CloseRoundedIcon style={{ color: "black", fontSize: ".8rem" }} />
      }
    />
  );
};

const Filter = () => {
  const [customFilter, setCustomFilter] = useState({
    roles: [],
    employeeNum: null,
    experience: null,
    techStack: [],
    minBasePay: null,
    companyName: null,
  });

  const handleAutocompleteChange = (key, value) => {
    setCustomFilter((prevFilter) => ({
      ...prevFilter,
      [key]: value,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      {Object.entries(customFilter).map(([key, value]) => (
        <Autocomplete
          sx={{ width: 180 }}
          key={key}
          multiple={Array.isArray(value)}
          id={`Filter-${key}`}
          options={top100Films}
          getOptionLabel={(option) => option.title}
          value={Array.isArray(value) ? value : null}
          onChange={(event, newValue) =>
            handleAutocompleteChange(key, newValue)
          }
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} placeholder={key} />}
          renderTags={(selected, getTagProps) =>
            selected.map((option, index) => (
              <CustomChip label={option.title} {...getTagProps({ index })} />
            ))
          }
        />
      ))}
    </div>
  );
};

export default Filter;
