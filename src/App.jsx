import React from "react";
import JobCard from "./components/JobCard";
import { useApi } from "./context/ApiProvider";

const App = () => {
  const { apiData, loading, error } = useApi();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Job Details</h1>
      <ul>
        {apiData.map((job, id) => {
          return <JobCard key={job.jdUid} job={job} />;
        })}
      </ul>
    </div>
  );
};

export default App;
