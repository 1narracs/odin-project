import { useState } from "react";
import "../styles/Inputs.css";
import "../styles/PersonalInput.css";

export default function PersonalInput({ handleClick }) {
  const [person, setPerson] = useState({ name: "", email: "", phoneNum: "" });
  const [formValidity, setFormValidity] = useState({
    name: true,
    email: true,
    phoneNum: true,
  });

  function validateFields(person) {
    const newValidity = {
      name: person.name !== "",
      email: person.email !== "",
      phoneNum: person.phoneNum !== "",
    };

    setFormValidity(newValidity);

    return Object.values(newValidity).every(Boolean);
  }

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Name..."
        value={person.name}
        className={formValidity.name ? "valid" : "invalid"}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email..."
        value={person.email}
        className={formValidity.email ? "valid" : "invalid"}
        onChange={(e) => setPerson({ ...person, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone Number..."
        value={person.phoneNum}
        className={formValidity.phoneNum ? "valid" : "invalid"}
        onChange={(e) => setPerson({ ...person, phoneNum: e.target.value })}
      />
      <button
        onClick={() => {
          if (validateFields(person)) {
            handleClick(person);
          }
        }}
      >
        Personal Input
      </button>
    </div>
  );
}
