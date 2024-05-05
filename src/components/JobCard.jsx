import React from 'react'

const JobCard = ({job}) => {
    const { jobRole, companyName, location } = job;
  return (
    <li key={job.jdUid}>
              <p>Job Role: {jobRole}</p>
              <p>Company: {companyName}</p>
              <p>Location: {location}</p>
            </li>
  )
}

export default JobCard