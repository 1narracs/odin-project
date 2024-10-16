import { useState } from "react";
import "../styles/CvDisplay.css";

export default function CvDisplay({
  personalInfo,
  eduInfo,
  workInfo,
  removeEduItem,
  removeWorkItem,
  handleEduItemEdit,
  handleWorkItemEdit,
}) {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  return (
    <div className="display-container">
      <h1 className="display-title">This is your CV!</h1>
      <div className="cv-container">
        <div className="personal-display">
          <h1>{personalInfo.name}</h1>
          <h3>{personalInfo.email}</h3>
          <h3>{personalInfo.phoneNum}</h3>
        </div>
        <h1 className="section-header">Education</h1>
        {eduInfo.map((eduItem) => {
          return (
            <div
              key={eduItem.eduId}
              className="edu-display"
              onMouseEnter={() => setHoveredItemId(eduItem.eduId)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <div className="edu-details">
                <h2>{eduItem.schoolName}</h2>
                <h3>{eduItem.degree}</h3>
                <h4>{"Graduated " + eduItem.gradDate}</h4>
              </div>
              {hoveredItemId === eduItem.eduId && (
                <div className="cv-item-btns">
                  <button
                    className={"btn-update remove-" + eduItem.eduId}
                    onClick={() => removeEduItem(eduItem)}
                  >
                    🗑
                  </button>
                  <button
                    className={"btn-update edit-" + eduItem.eduId}
                    onClick={() => handleEduItemEdit(eduItem.eduId)}
                  >
                    🖉
                  </button>
                </div>
              )}
            </div>
          );
        })}
        <h1 className="section-header">Work Experience</h1>
        {workInfo.map((workItem) => {
          return (
            <div
              key={workItem.workId}
              className="work-display"
              onMouseEnter={() => setHoveredItemId(workItem.workId)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <div className="work-details">
                <h2>{workItem.companyName}</h2>
                <h3>{workItem.roleTitle}</h3>
                <h3>{workItem.roleDesc}</h3>
                <h3>
                  {workItem.dateStarted} - {workItem.dateFinished}
                </h3>
              </div>
              {hoveredItemId === workItem.workId && (
                <div className="cv-item-btns">
                  <button
                    className={"btn-update remove-" + workItem.workId}
                    onClick={() => removeWorkItem(workItem)}
                  >
                    🗑
                  </button>
                  <button
                    className={"btn-update edit-" + workItem.workId}
                    onClick={() => handleWorkItemEdit(workItem.workId)}
                  >
                    🖉
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
