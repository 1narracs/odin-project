import { useState } from "react";
import "../styles/Inputs.css";
import "../styles/EduInput.css";

export default function EduInput({
  handleClick,
  currentEduItem,
  setCurrentEduItem,
}) {

  const [formValidity, setFormValidity] = useState({
    schoolName: true,
    degree: true,
    gradDate: true,
  });

  function validateFields(eduItem) {
    const newValidity = {
      schoolName: eduItem.schoolName !== "",
      degree: eduItem.degree !== "",
      gradDate: eduItem.gradDate !== "",
    };

    setFormValidity(newValidity);

    return Object.values(newValidity).every(Boolean);
  }

  function resetForm() {
    setCurrentEduItem({
      eduId: "",
      schoolName: "",
      degree: "",
      gradDate: "",
    });
  }

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="School Name..."
        className={formValidity.schoolName ? "valid" : "invalid"}
        value={currentEduItem.schoolName}
        onChange={(e) =>
          setCurrentEduItem({ ...currentEduItem, schoolName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Degree..."
        className={formValidity.degree ? "valid" : "invalid"}
        value={currentEduItem.degree}
        onChange={(e) =>
          setCurrentEduItem({ ...currentEduItem, degree: e.target.value })
        }
      />
      <div className="date-input-container">
        <label
          htmlFor="grad-date"
          className={formValidity.gradDate ? "valid" : "invalid"}
        >
          Grad Date:{" "}
        </label>
        <input
          type="date"
          id="grad-date"
          className={formValidity.gradDate ? "valid" : "invalid"}
          value={currentEduItem.gradDate}
          onChange={(e) =>
            setCurrentEduItem({ ...currentEduItem, gradDate: e.target.value })
          }
        />
      </div>
      <button
        onClick={() => {
          if (validateFields(currentEduItem)) {
            handleClick(currentEduItem);
            resetForm();
          }
        }}
      >
        Education Input
      </button>
    </div>
  );
}
