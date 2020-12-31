import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Modal from "./Modal.jsx";
import Step from "./Step.jsx";

const Dashboard = () => {
  let history = useHistory();
  const [tracker, setTracker] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updateState, setUpdateState] = useState(true);

  const fetchApplications = async () => {
    const resp = await fetch(`/user/2/application`, {
      method: "GET",
      headers: { "content-type": "application/JSON" },
    });
    const data = await resp.json();
    setTracker(data);
    setUpdateState(false);
  };

  // get the users data from the DB
  useEffect(() => {
    if (updateState) fetchApplications();
  }, [updateState]);

  //Delete application from the DB
  const removeApplications = (id) => {
    fetch(`/user/2/application/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/JSON",
      },
    }).then((res) => {
      setUpdateState(true);
      // const del = tracker.filter((tracker) => id !== tracker.id);
      // setTracker(del);
      // console.log(id);
    });
  };

  //Edit applications in the DB
  const editApplication = (id) => {
    fetch(`/user/2/application/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/JSON",
      },
    }).then((res) => {
      setUpdateState(true);
    });
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
      "App status",
      "operation",
    ];

    //now we will map over these values and output as th
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const changeRoute = () => {
    let path = "/Step";
    history.push(path);
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
          app_status,
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
              <td>{app_status}</td>
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
                <button src="step" className="editStep" onClick={changeRoute}>
                  Add step
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

      {showModal ? (
        <Modal setShowModal={setShowModal} setUpdateState={setUpdateState} />
      ) : (
        <button onClick={() => setShowModal(true)}>Add new application</button>
      )}
    </>
  );
};
export default Dashboard;
