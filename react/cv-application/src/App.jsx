import { useState } from "react";
import "./App.css";
import PersonalInput from "./components/PersonalInput";
import EduInput from "./components/EduInput";
import WorkInput from "./components/WorkInput";
import CvDisplay from "./components/CVDisplay";
import SideBar from "./components/SideBar";

function App() {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phoneNum: "",
  });
  const [eduData, setEduData] = useState([]);
  const [workData, setWorkData] = useState([]);
  const [currentEduItem, setCurrentEduItem] = useState({
    eduId: "",
    schoolName: "",
    degree: "",
    gradDate: "",
  });
  const [currentWorkItem, setCurrentWorkItem] = useState({
    workId: 0,
    companyName: "",
    roleTitle: "",
    roleDesc: "",
    dateStarted: "",
    dateFinished: "",
  });

  const removeEduItem = (eduItem) => {
    setEduData(eduData.filter((el) => el.eduId !== eduItem.eduId));
  };
  const removeWorkItem = (workItem) => {
    setWorkData(workData.filter((el) => el.workId !== workItem.workId));
  };

  const handleEduItemInput = (eduItem) => {
    const itemExists = eduData.find((el) => el.eduId === eduItem.eduId);
    if (itemExists) {
      setEduData((prevData) =>
        prevData.map((el) =>
          el.eduId === eduItem.eduId ? { ...el, ...eduItem } : el
        )
      );
    } else {
      setEduData((ed) => [
        ...ed,
        { ...currentEduItem, eduId: crypto.randomUUID() },
      ]);
    }
  };
  const handleWorkItemInput = (workItem) => {
    const itemExists = workData.find((el) => el.workId === workItem.workId);
    if (itemExists) {
      setWorkData((prevData) =>
        prevData.map((el) =>
          el.workId === workItem.workId ? { ...el, ...workItem } : el
        )
      );
    } else {
      setWorkData((ed) => [
        ...ed,
        { ...currentWorkItem, workId: crypto.randomUUID() },
      ]);
    }
  };

  const handleEduItemEdit = (eduId) => {
    setCurrentEduItem(eduData.find((el) => el.eduId === eduId));
  };
  const handleWorkItemEdit = (workId) => {
    setCurrentWorkItem(workData.find((el) => el.workId === workId));
  };

  const cvData = {
    personalInfo: personalData,
    eduInfo: eduData,
    workInfo: workData,
  };

  return (
    <>
      <SideBar>
        <PersonalInput handleClick={setPersonalData} />
        <EduInput
          handleClick={handleEduItemInput}
          currentEduItem={currentEduItem}
          setCurrentEduItem={setCurrentEduItem}
        />
        <WorkInput
          handleClick={handleWorkItemInput}
          currentWorkItem={currentWorkItem}
          setCurrentWorkItem={setCurrentWorkItem}
        />
      </SideBar>
      <CvDisplay
        personalInfo={cvData.personalInfo}
        eduInfo={cvData.eduInfo}
        workInfo={cvData.workInfo}
        removeEduItem={removeEduItem}
        removeWorkItem={removeWorkItem}
        handleEduItemEdit={handleEduItemEdit}
        handleWorkItemEdit={handleWorkItemEdit}
      />
    </>
  );
}

export default App;
