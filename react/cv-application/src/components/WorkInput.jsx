import { useState } from "react";
import "../styles/Inputs.css";
import "../styles/WorkInput.css";

export default function WorkInput({
  handleClick,
  currentWorkItem,
  setCurrentWorkItem,
}) {
  const [formValidity, setFormValidity] = useState({
    companyName: true,
    roleTitle: true,
    roleDesc: true,
    dateStarted: true,
    dateFinished: true,
  });

  function validateFields(workItem) {
    const newValidity = {
      companyName: workItem.companyName !== "",
      roleTitle: workItem.roleTitle !== "",
      roleDesc: workItem.roleDesc !== "",
      dateStarted: workItem.dateStarted !== "",
      dateFinished: workItem.dateFinished !== "",
    };

    setFormValidity(newValidity);

    return Object.values(newValidity).every(Boolean);
  }

  function resetForm() {
    setCurrentWorkItem({
      companyName: "",
      roleTitle: "",
      roleDesc: "",
      dateStarted: "",
      dateFinished: "",
    });
  }

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Company Name..."
        className={formValidity.companyName ? "valid" : "invalid"}
        value={currentWorkItem.companyName}
        onChange={(e) =>
          setCurrentWorkItem({
            ...currentWorkItem,
            companyName: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="Role Title..."
        className={formValidity.roleTitle ? "valid" : "invalid"}
        value={currentWorkItem.roleTitle}
        onChange={(e) =>
          setCurrentWorkItem({ ...currentWorkItem, roleTitle: e.target.value })
        }
      />
      <textarea
        placeholder="Role Description..."
        className={formValidity.roleDesc ? "valid" : "invalid"}
        value={currentWorkItem.roleDesc}
        onChange={(e) =>
          setCurrentWorkItem({ ...currentWorkItem, roleDesc: e.target.value })
        }
      />
      <div className="date-input-container">
        <label htmlFor="start-date">Start Date: </label>
        <input
          type="date"
          id="start-date"
          className={formValidity.dateStarted ? "valid" : "invalid"}
          value={currentWorkItem.dateStarted}
          onChange={(e) =>
            setCurrentWorkItem({
              ...currentWorkItem,
              dateStarted: e.target.value,
            })
          }
        />
      </div>
      <div className="date-input-container">
        <label htmlFor="finish-date">Finish Date: </label>
        <input
          type="date"
          id="finish-date"
          className={formValidity.dateFinished ? "valid" : "invalid"}
          value={currentWorkItem.dateFinished}
          onChange={(e) =>
            setCurrentWorkItem({
              ...currentWorkItem,
              dateFinished: e.target.value,
            })
          }
        />
      </div>
      <button
        onClick={() => {
          if (validateFields(currentWorkItem)) {
            handleClick(currentWorkItem);
            resetForm();
          }
        }}
      >
        Work Input
      </button>
    </div>
  );
}
