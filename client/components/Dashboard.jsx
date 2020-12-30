import React from "react";
import { useState, useEffect } from "react";
const URL = "https://jsonplaceholder.typicode.com/users";
import Modal from './Modal.jsx';

const Dashboard = () => {
  const [tracker, setTracker] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // const [job_title, setJobTitle] = useState("");
  // const [company, setCompany] = useState("");
  // const [how_applied, setHowApplied] = useState("");
  // const [date_applied, setDateApplied] = useState(new Date());
  // const [location, setLocation] = useState("");
  // const [found_by, setFoundBy] = useState("");
  // const [notes, setNotes] = useState("");
  // const [app_status, setAppStatus] = useState("");



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
  

  return (
    <>
      <h1 id="title">Applications Dashboard</h1>
      <table id="tracker">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
      {
        showModal ? <Modal setShowModal={setShowModal} /> : <button onClick={() => setShowModal(true)}>Add new application</button>
      }
      
    </>
  );
};

export default Dashboard;
