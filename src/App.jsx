import React, { useState } from "react";
import JobCard from "./components/JobCard/JobCard";
import { useApi } from "./context/ApiProvider";
import "./components/JobCard/JobCard.css";
import "./index.css";
import Filter from "./components/Filters/Filter";

const App = () => {
  const { apiData, loading, error } = useApi();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const [filters, setFilters] = useState({
    roles: [],
    experience: null,
    minBasePay: null,
    companyName: null,
  });

  const filteredData =
    filters.roles.length === 0 &&
    filters.experience === null &&
    filters.minBasePay === null &&
    filters.companyName === null
      ? apiData
      : apiData.filter((job) => {
          // Check if each job passes the filter criteria
          return (
            // Check if roles match
            (filters.roles.length === 0 ||
              filters.roles.includes(job.jobRole)) &&
            // Check if experience matches
            (filters.experience === null || parseInt(job.minExp) === filters.experience) &&
            // Check if minBasePay matches
            (filters.minBasePay.value === null ||
              job.minJdSalary >= parseInt(filters.minBasePay.value)) &&
            // Check if companyName matches
            (filters.companyName === null ||
              job.companyName === filters.companyName)
          );
        });

  console.log(filters, "filters");
  return (
    <div className="ProjectParent">
      <Filter filters={filters} setFilters={setFilters} />

      <div className="JobCardParent">
        {filteredData.map((job, id) => {
          return <JobCard key={job.jdUid} job={job} />;
        })}
      </div>
    </div>
  );
};

export default App;
