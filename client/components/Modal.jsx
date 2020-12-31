import React from "react";
import { useState, useEffect } from "react";
const URL = "https://jsonplaceholder.typicode.com/users";

const Modal = ({ setShowModal, setUpdateState }) => {
  const [tracker, setTracker] = useState([]);

  const [job_title, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [how_applied, setHowApplied] = useState("");
  const [date_applied, setDateApplied] = useState(new Date());
  const [location, setLocation] = useState("");
  const [found_by, setFoundBy] = useState("");
  const [notes, setNotes] = useState("");
  const [app_status, setAppStatus] = useState("");

  const fakeUID = 2;

  const addApplication = (e) => {
    e.preventDefault();

    const body = {
      job_title,
      company,
      how_applied,
      date_applied,
      location,
      found_by,
      notes,
      app_status,
    };
    fetch(`/user/${fakeUID}/application`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(body),
    })
      .then((data) => {
        data.json();
        setUpdateState(true);
      })
      .catch((err) => console.log("addApplication ERROR: ", err));
  };

  const editApplication = (id) => {
    fetch(`/users/user_id/applications/:step_id`, {
      method: "PUT",
      headers: {
        "content-type": "application/JSON",
      },
    }).then((res) => {});
  };

  return (
    //   <div id="addAppWrapper">
    <div id="div3" className="modalWrapper">
      <form onSubmit={addApplication} id="list" className="modalForm">
        <input
          type="text"
          placeholder="Job Title"
          id="job_title"
          value={job_title}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="company"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="how_applied"
          id="how_applied"
          value={how_applied}
          onChange={(e) => setHowApplied(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="date_applied"
          id="date_applied"
          value={date_applied}
          onChange={(e) => setDateApplied(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="location"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="found_by"
          id="found_by"
          value={found_by}
          onChange={(e) => setFoundBy(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="notes"
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="app_status"
          id="app_status"
          value={app_status}
          onChange={(e) => setAppStatus(e.target.value)}
          required
        />
        <div className="modalButtonWrapper">
          <button className="cancelButton" onClick={() => setShowModal(false)}>
            cancel
          </button>

          <button type="submit" className="addButton">
            add new application
          </button>
        </div>
      </form>
    </div>
    //   </div>
  );
};

export default Modal;
