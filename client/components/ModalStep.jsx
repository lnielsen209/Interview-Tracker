import React from "react";
import { useState, useEffect } from "react";

const modalTitle = {
  add: "Add new step",
  edit: "Edit step",
};

const ModalStep = ({ setModalStep, action, currentStep }) => {
  const [date, setDate] = useState(new Date());
  const [step_type, setStepType] = useState(currentStep.step_type || "");
  const [contact_name, setContactName] = useState(
    currentStep.contact_name || ""
  );
  const [contact_role, setContractRole] = useState(
    currentStep.contact_role || ""
  );
  const [contact, setContact] = useState(currentStep.contact || "");
  const [notes, setNote] = useState(currentStep.notes || "");

  const stepID = 2;

  const addStep = (body) => {
    fetch(`/user/${fakeUID}/step`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(body),
    })
      .then((data) => {
        data.json();
        console.log("new step added");
        setModalStep({ action: null, id: null });
      })
      .catch((err) => console.log("addStep ERROR: ", err));
  };

  const editStep = (body) => {
    fetch(`/user/${fakeUID}/step/${currentStep.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(body),
    }).then((data) => {
      data.json();
      console.log(`step updated`);
      setModalStep({ action: null, id: null });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      id,
      app_id,
      date,
      step_type,
      contact_name,
      contact_role,
      contact,
      notes,
    };

    if (action === "edit") {
      editStep(body);
    } else {
      addStep(body);
    }
  };

  return (
    <div id="div3" className="modalWrapper">
      <h2>{modalTitle[action]}</h2>
      <form id="list" className="modalForm">
        <label>
          Date
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Company
          <input
            type="text"
            placeholder="step_type"
            id="step_type"
            value={step_type}
            onChange={(e) => setStepType(e.target.value)}
            required
          />
        </label>
        <label>
          contact information
          <input
            type="text"
            placeholder="contact information"
            id="contact_name"
            value={contact_name}
            onChange={(e) => setContactName(e.target.value)}
            required
          />
        </label>
        <label>
          contact role
          <input
            type="text"
            placeholder="contact role"
            id="contact_role"
            value={contact_role}
            onChange={(e) => setContractRole(e.target.value)}
            required
          />
        </label>
        <label>
          Contact
          <input
            type="text"
            placeholder="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </label>
        <label>
          Notes
          <input
            type="text"
            placeholder="notes"
            id="notes"
            value={notes}
            onChange={(e) => setNote(e.target.value)}
            required
          />
        </label>
        <div className="modalButtonWrapper">
          <button
            className="modalButton"
            onClick={() => setModalStep({ action: null, id: null })}
          >
            Cancel
          </button>

          <button type="submit" className="modalButton" onClick={handleSubmit}>
            Save{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalStep;
