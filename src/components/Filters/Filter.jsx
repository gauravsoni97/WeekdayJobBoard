import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useApi } from "../../context/ApiProvider";

const CustomChip = (props) => (
  <Chip
    {...props}
    style={{ borderRadius: "4px" }}
    deleteIcon={
      <CloseRoundedIcon style={{ color: "black", fontSize: ".8rem" }} />
    }
  />
);

const Filter = ({ filters, setFilters }) => {
  const { apiData, loading, error } = useApi();

  const jobRolesOption = Array.from(
    new Set(apiData.map((data) => data.jobRole))
  );
  const companyNameOption = Array.from(
    new Set(apiData.map((data) => data.companyName))
  );
  const locationOption = Array.from(
    new Set(apiData.map((data) => data.location))
  );

  const handleAutocompleteChange = (filterKey, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: value,
    }));
  };

  return (
    <div
      style={{ display: "flex", width: "100%", gap: "1rem", flexWrap: "wrap" }}
    >
      <div>
        <label className="labelOfInput" htmlFor="Filter-roles">
          Roles
        </label>
        <Autocomplete
          sx={{ width: 180, marginTop: ".3rem" }}
          multiple
          id="Filter-roles"
          options={jobRolesOption}
          value={filters.roles}
          onChange={(e, newValue) =>
            handleAutocompleteChange("roles", newValue)
          }
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} placeholder="Roles" />
          )}
          renderTags={(selected, getTagProps) =>
            selected.map((option, index) => (
              <CustomChip
                key={index}
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
        />
      </div>

      <div>
        <label className="labelOfInput" htmlFor="Filter-experience">
          Experience
        </label>

        <Autocomplete
          sx={{ width: 180, marginTop: ".3rem" }}
          id="Filter-experience"
          options={Array.from({ length: 10 }, (_, i) => (i + 1).toString())}
          value={filters.experience}
          onChange={(e, newValue) =>
            handleAutocompleteChange("experience", newValue)
          }
          renderInput={(params) => (
            <TextField {...params} placeholder="Experience" />
          )}
        />
      </div>

      <div>
        <label className="labelOfInput" htmlFor="Filter-minBasePay">
          Min Base Pay
        </label>

        <Autocomplete
          sx={{ width: 180, marginTop: ".3rem" }}
          id="Filter-minBasePay"
          options={[
            { value: 10, label: "10L" },
            { value: 20, label: "20L" },
            { value: 30, label: "30L" },
            { value: 40, label: "40L" },
            { value: 50, label: "50L" },
            { value: 60, label: "60L" },
            { value: 70, label: "70L" },
          ]}
          value={filters.minBasePay}
          onChange={(e, newValue) =>
            handleAutocompleteChange("minBasePay", newValue)
          }
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField {...params} placeholder="Min Base Pay" />
          )}
        />
      </div>

      <div>
        <label className="labelOfInput" htmlFor="Filter-companyName">
          Company Name
        </label>

        <Autocomplete
          sx={{ width: 180, marginTop: ".3rem" }}
          id="Filter-companyName"
          options={companyNameOption}
          value={filters.companyName}
          onChange={(e, newValue) =>
            handleAutocompleteChange("companyName", newValue)
          }
          renderInput={(params) => (
            <TextField {...params} placeholder="Company Name" />
          )}
        />
      </div>

      <div>
        <label className="labelOfInput" htmlFor="Filter-companyName">
          Location
        </label>

        <Autocomplete
          sx={{ width: 180, marginTop: ".3rem" }}
          id="Filter-companyName"
          options={locationOption}
          value={filters.location}
          onChange={(e, newValue) =>
            handleAutocompleteChange("location", newValue)
          }
          renderInput={(params) => (
            <TextField {...params} placeholder="Location" />
          )}
        />
      </div>
    </div>
  );
};

export default Filter;
