import React from "react";
import { useState, useEffect } from "react";
const URL = "https://jsonplaceholder.typicode.com/users";

const Dashboard = () => {
  const [tracker, setTracker] = useState([]);

  const [job_title, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [how_applied, setHowApplied] = useState("");
  const [date_applied, setDateApplied] = useState(new Date());
  const [location, setLocation] = useState("");
  const [found_by, setFoundBy] = useState("");
  const [notes, setNotes] = useState("");
  const [app_status, setAppStatus] = useState("");

  const addApplication = (e) => {
    e.preventDefault();

    //check if a name is empty
    if (job_title === "") {
      setNameError("required");
    } else {
      const body = {
        job_seeker_id,
        job_title,
        company,
        how_applied,
        date_applied,
        location,
        found_by,
        notes,
        app_status,
      };
      fetch("/applications/app_id", {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(body),
      })
        .then((data) => data.json())
        .catch((err) => console.log("ERROR: ", err));
    }
  };

  // useEffect to clear job_titleError when `job_title` is changed
  useEffect(() => {
    setJobTitle(null);
  }, [job_title]);

  const removeApplications = (id) => {
    fetch(`/users/user_id/applications/:step_id`, {
      method: "DELETE",
      headers: {
        "content-type": "application/JSON",
      },
    }).then((res) => {
      const del = tracker.filter((tracker) => id !== tracker.id);
      setTracker(del);
    });
  };

  const editApplication = (id) => {
    fetch(`/users/user_id/applications/:step_id`, {
      method: "PUT",
      headers: {
        "content-type": "application/JSON",
      },
    }).then((res) => {});
  };

  //this is the header
  //Operation is for Edit and Delete functionality
  const renderHeader = () => {
    let headerElement = [
      "id",
      "position",
      "company",
      "salary",
      "contact",
      "date entry",
      "operation",
    ];
    //now we will map over these values and output as th
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      tracker &&
      tracker.map(
        ({
          id,
          job_title,
          company,
          how_applied,
          date_applied,
          location,
          found_by,
          notes,
          app_status,
          operation,
        }) => {
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{position}</td>
              <td>{company}</td>
              <td>{salary}</td>
              <td>{contact}</td>
              <td>{date}</td>
              <td className="opration">
                <button></button>
                <button
                  className="button"
                  onClick={() => removeApplications(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        }
      )
    );
  };
  ///add application form
  const renderNewApp = () => {
    return (
      <div id="addAppWrapper">
        <div id="div3">
          <form onSubmit={addApplication} id="list">
            <li>
              <input
                type="text"
                placeholder="First Name"
                id="job_title"
                value={job_title}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="company"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </li>
            <li>
              <button className="addButton">add new application</button>
            </li>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1 id="title">Applications Dashboard</h1>
      <table id="tracker">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
};

export default Dashboard;
