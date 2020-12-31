import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

const Step = () => {
  let history = useHistory();
  const [date, setDate] = useState(new Date());
  const [step_type, setStepType] = useState("");
  const [contact_name, setContactName] = useState("");
  const [contact_role, setContractRole] = useState("");
  const [contact, setContact] = useState("");
  const [notes, setNote] = useState("");

  const addStep = (e) => {
    e.preventDefault();

    const body = {
      app_id,
      date,
      step_type,
      contact_name,
      contact_role,
      contact,
      notes,
    };
    fetch(`/user/2/application`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .catch((err) => console.log("addApplication ERROR: ", err));
  };

  const fetchStepsApplications = async () => {
    const resp = await fetch(`/user/2/application`, {
      method: "GET",
      headers: { "content-type": "application/JSON" },
    });
    const data = await resp.json();
    setTracker(data);
    setUpdateState(false);
  };

  const changeRoute = () => {
    const path = "/dashboard";
    history.push(path);
  };

  return (
    <div id="divSteps" className="addStepWrapper">
      <form onSubmit={addStep} id="list">
        <h1>Edit/add your step</h1>
        <div>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="step"
            id="step_type"
            value={step_type}
            onChange={(e) => setStepType(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="contact information"
            id="contact_name"
            value={contact_name}
            onChange={(e) => setContactName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="contact role"
            id="contact_role"
            value={contact_role}
            onChange={(e) => setContractRole(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="notes"
            id="notes"
            value={notes}
            onChange={(e) => setNote(e.target.value)}
            required
          />
          <div className="ButtonWrapper">
            <button className="cancelButton" onClick={changeRoute}>
              cancel
            </button>
            <button type="submit">Save</button>
            <div>
              <button onClick={() => history.goBack()}>Back</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step;
