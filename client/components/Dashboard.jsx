import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Dashboard = () => {
  let history = useHistory();
  const [tracker, setTracker] = useState([]);

  const [job_title, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [how_applied, setHowApplied] = useState("");
  const [date_applied, setDateApplied] = useState(new Date());
  const [location, setLocation] = useState("");
  const [found_by, setFoundBy] = useState("");
  const [notes, setNotes] = useState("");
  const [app_status, setAppStatus] = useState("");

  // add application to the DB
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

  // get the users data from the DB
  useEffect(async () => {
    const resp = await fetch(`/user/2/application`, {
      method: "GET",
      headers: { "content-type": "application/JSON" },
    });
    const data = await resp.json();
    console.log(data);
    setTracker(data);
  }, []);

  //Delete application from the DB
  const removeApplications = (id) => {
    fetch(`/user/2/application/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/JSON",
      },
    }).then((res) => {
      const del = tracker.filter((tracker) => id !== tracker.id);
      setTracker(del);
    });
  };

  //Edit applications in the DB
  const editApplication = (id) => {
    fetch(`/user/2/application/${id}`, {
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
      "Job title",
      "company",
      "found by",
      "How applied",
      "date applied",
      "Location",
      "notes",
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
          found_by,
          how_applied,
          date_applied,
          location,
          notes,
          operation,
        }) => {
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{job_title}</td>
              <td>{company}</td>
              <td>{found_by}</td>
              <td>{how_applied}</td>
              <td>{date_applied}</td>
              <td>{location}</td>
              <td>{notes}</td>
              <td className="operation">
                <button
                  className="deleteButton"
                  onClick={() => editApplication(id)}
                >
                  Edit
                </button>
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

  return (
    <>
      <h1 id="title">Applications Dashboard</h1>
      <table id="tracker">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
      <button onClick={() => history.goBack()}>Back</button>
    </>
  );
};

export default Dashboard;
