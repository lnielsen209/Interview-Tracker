import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from '../App.jsx';

const modalTitle = {
  'add': 'Add new application',
  'edit': 'Edit application'
}

const Modal = ({setShowModal, action, currentApp, setUpdateState}) => { 
  const [tracker, setTracker] = useState([]);

  const [job_title, setJobTitle] = useState(currentApp.job_title || '');
  const [company, setCompany] = useState(currentApp.company || "");
  const [how_applied, setHowApplied] = useState(currentApp.how_applied || "");
  const [date_applied, setDateApplied] = useState(new Date());
  const [location, setLocation] = useState(currentApp.location || "");
  const [found_by, setFoundBy] = useState(currentApp.found_by || "");
  const [notes, setNotes] = useState(currentApp.notes || "");
  const [app_status, setAppStatus] = useState(currentApp.app_status || "");

//   const fakeUID = 2;

  const context = useContext(UserContext);

  const addApplication = (body) => {

      fetch(`/user/${context.user.id}/application`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(body),
      })
        .then((data) => {
            data.json()
            console.log('new application added')
            setShowModal({action:null, id: null})
            setUpdateState(true) // add from Lee
        })
        .catch((err) => console.log("addApplication ERROR: ", err));
  };


  const editApplication = (body) => {
    console.log('call edit app');
    fetch(`/user/${context.user.id}/application/${currentApp.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(body),
    }).then((data) => {
        data.json()
        console.log(`application updated`)
        setShowModal({action:null, id:null})
        setUpdateState(true) // add from Lee
    })
  };

const handleSubmit = (e) => {
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

  if(action === 'edit') {
    editApplication(body);
  } else {
    addApplication(body);
  }
}

console.log('currentapp', currentApp)
  return (
        <div id="div3" className="modalWrapper">
            <div className="modalBackground"> 
        <h2>{modalTitle[action]}</h2>
          <form 
            // onSubmit={handleSubmit} doesn't work
            id="list" 
            className="modalForm"
          >
            <label>Job Title
              <input
                type="text"
                placeholder="Job Title"
                id="job_title"
                value={job_title}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
            </label>
            <label>Company
              <input
                type="text"
                placeholder="company"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
              </label>
              <label>How I applied
                <input
                type="text"
                placeholder="Applied via (e.g. email, company website, linkedIn,...)"
                id="how_applied"
                value={how_applied}
                onChange={(e) => setHowApplied(e.target.value)}
                required
              />
            </label>
            <label>Date applied
              <input
                type="date"
                placeholder="Date applied"
                id="date_applied"
                value={date_applied}
                onChange={(e) => setDateApplied(e.target.value)}
                required
              />
              </label>
              <label>Location
                <input
                type="text"
                placeholder="Location"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
                </label>
            <label>Found on
              <input
                type="text"
                placeholder="Found on (e.g. Google, linkedIn, GlassDoor,...)"
                id="found_by"
                value={found_by}
                onChange={(e) => setFoundBy(e.target.value)}
                required
              />
            </label>
            <label>Notes
              <input
                type="text"
                placeholder="Notes"
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                required
              />
            </label>
            <label>App Status
              <input
                type="text"
                placeholder="Status"
                id="app_status"
                value={app_status}
                onChange={(e) => setAppStatus(e.target.value)}
                required
              />
            </label>
              <div className="modalButtonWrapper">
                <button className="modalButton" onClick={() => setShowModal({action:null, id: null})}>Cancel</button>

              <button type="submit" className="modalButton" onClick={handleSubmit}>Save </button>
              </div>
          </form>
          </div>
        </div>

  );
};

export default Modal;
