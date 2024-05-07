import React from "react";
import "./JobCard.css";

const JobCard = ({ job }) => {
  const {
    jdUid,
    jdLink,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    maxExp,
    jobRole,
    companyName,
    logoUrl,
  } = job;

  return (
    <div className="JobCard" key={jdUid}>
      <span className="DayBadge"> ⏳ Posted 10 days ago</span>
      <div className="CompanyDetails">
        <div className="CompanyImage">
          <img src={logoUrl} alt="" />
        </div>
        <div>
          <h1 className="CompanyName">{companyName}</h1>
          <h2 className="JobRole">{jobRole}</h2>
          <p className="CompanyLocation">{location}</p>
        </div>
      </div>

      <p className="SalaryRange">
        Estimated Salary: ₹ {minJdSalary || "0"} - {maxJdSalary} LPA ✅
      </p>

      <div className="AboutCompany">
        <p className="AboutHeading">About Company:</p>
        <b>About Us</b>
        <p className="AboutParagraph">
          {jobDetailsFromCompany.slice(0, 370)}
          <button className="ViewJobBtn">View Job</button>
        </p>
      </div>

      <div className="MinExperience">
        <p className="MinExpHeading">Minimum Experience</p>
        <p className="MinExp">
          {minExp || 0} {minExp === null ? "year" : "years"}
        </p>
      </div>
        <a href={jdLink} >
      <div className="jobCardBtns">
          <button className="EasyApplyButton jobCardBtn"> ⚡ Easy Apply</button>
      </div>
        </a>
    </div>
  );
};

export default JobCard;
