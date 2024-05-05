import React from "react";

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
      <div className="DayBadge"></div>
      <div className="CompanyDetails">
        <div className="CompanyImage">
          <img src={logoUrl} alt="" />
        </div>
        <div className="CompanyNameRolePlace">
          <h1 className="CompanyName">{companyName}</h1>
          <h2 className="JobRole">{jobRole}</h2>
          <p className="CompanyLocation">{location}</p>
        </div>
      </div>

      <p className="SalaryRange">
      {salaryCurrencyCode ||"₹" }   {minJdSalary || "0"} - {maxJdSalary} LPA ✅
      </p>

      <div className="AboutCompany">
        <span>About Company:</span>
        <p className="AboutHeading">About Us</p>
        <p className="AboutParagraph">{jobDetailsFromCompany}
          <button className="ViewJobBtn">View Job</button>
        </p>
      </div>

      <div className="MinExperience">
        <h3 className="MinExpHeading">Minimum Experience</h3>
        <p className="MinExp">{minExp}  years</p>
      </div>

      <button className="EasyApplyButton">Easy Apply</button>
      <button className="UnlockReferralButton">Unlock referral asks</button>
    </div>
  );
};

export default JobCard;
