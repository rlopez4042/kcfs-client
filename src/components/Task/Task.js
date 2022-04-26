import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import apiUrl from "../../apiUrl";

function Task() {
//   const thisDay = localStorage.getItem("today");;
  const bear = localStorage.getItem("bear");
  const [task, setTask] = useState("");

//   if thisDay = null {
//     //   display button
//   } else if {
//     //   fetch list and display it
//   }

  //   localStorage.setItem("userID", res._id);

  //Populate the task for the right day on page load
  //   function getTask() {
  //     fetch(apiUrl + `task/`)
  //       .then((response) => response.json())
  //       .then((data) => setTask(data.task));
  //   }
  //   useEffect(() => {
  //     let ignore = false;

  //     if (!ignore) getTask();
  //     return () => {
  //       ignore = true;
  //     };
  //   }, []);

  //click begin to create a new object for saily task list
  const handleBeginSubmit = (event) => {
    console.log("1");
    event.preventDefault();
    console.log(task);
    fetch(apiUrl + `task/`, {
      headers: {
        Authorization: "Bearer " + bear,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        complete: false,
        day: 1,
      }),
    })
      .then(() => fetch(apiUrl + `task/`))
      .then((response) => response.json())
      .then((data) => setTask(data.task));
    console.log();
  };

  //change boolean for given checkbox
  function handleCheckBox(event) {
    fetch(apiUrl + `task/${event.target.value}`, {
      headers: {
        Authorization: "Bearer " + bear,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        one: (Boolean = !Boolean),
      }),
    })
      .then(() => fetch(apiUrl + `task/`))
      .then((response) => response.json())
      .then((data) => setTask(data.task));
  }

  return (
    <div>
      <h1>Task</h1>
      <Link to={"/overview"}>
        <button id="overview">Home</button>
      </Link>
      <button onClick={handleBeginSubmit}>Begin</button>
      <div>
        <form className="taskChecklist">
          <h1 className="dayNumber">Day 1 :</h1>
          <ul>
            <li>
              <label>Task 1:</label>
              <input
                className="checkBOX"
                type="checkbox"
                value={task._id}
                onChange={handleCheckBox}
                checked={task.one}
              />
            </li>
            <button type="Submit">Finish Strong</button>
          </ul>
        </form>
      </div>
    </div>
  );
}
export default Task;
