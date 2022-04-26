import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import apiUrl from "../../apiUrl";

function Overview() {
  const user = localStorage.getItem("userName");
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    window.location = "/landingPage";
  };
  return (
    <div>
      <header>
        <h1>Keep Calm and Finish Strong</h1>
        <div>
          <Link key={1} to={"/task"} state={1}>
            <button id="day">1</button>
          </Link>
        </div>
      </header>

      {user && (
        <button id="logout" className="" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}
export default Overview;
