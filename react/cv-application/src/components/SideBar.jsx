import { useState } from "react";
import "../styles/SideBar.css";

export default function SideBar({ children }) {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={"side-bar isactive-" + isActive}>
      {!isActive ? (
        <BurgerButton toggleSideBar={() => setIsActive(!isActive)} />
      ) : (
        <>
          <h2>Input</h2>
          <BurgerButton toggleSideBar={() => setIsActive(!isActive)} />
          {children}
        </>
      )}
    </div>
  );
}

function BurgerButton({ toggleSideBar }) {
  return <button onClick={toggleSideBar}>_-</button>;
}