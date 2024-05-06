import React from "react";
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

  return (
    <div className="ProjectParent">
      <Filter />

      <div className="JobCardParent">
        {apiData.map((job, id) => {
          return <JobCard key={job.jdUid} job={job} />;
        })}
      </div>
    </div>
  );
};

export default App;
