import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import ModalStep from "./ModalStep.jsx";
import { UserContext } from '../App.jsx';

const Steps = () => {
  const history = useHistory();
  const { state } = useLocation();
  console.log('state', state);
  const [stepTracker, setStepTracker] = useState([]);

  const [showModalStep, setShowModalStep] = useState({
    action: null,
    id: null,
  }); // none / edit /add

  const [updateState, setUpdateState] = useState(true);

  const context = useContext(UserContext);

  const fetchStep = async () => {
    const resp = await fetch(`/user/${context.user.id}/application/${state.appId}/step`, {
      method: "GET",
      headers: { "content-type": "application/JSON" },
    });
    const data = await resp.json();
    setStepTracker(data);
    setUpdateState(false);
  };

  // get the applications steps data from the DB
  useEffect(() => {
    if (updateState) fetchStep();
  }, [updateState]);

  //Delete step from the DB
  const removeStep = (app_id) => {
    fetch(`/user/${context.user.id}/application/${app_id}/step`, {
      method: "DELETE",
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
      // "id",
      // "app id",
      "Date",
      "Type",
      "Contact Name",
      "Contact Role",
      "Contact Info",
      "Notes",
      "Modify",
    ];

    //now we will map over these values and output as th
    return headerElement.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };



  const renderBody = () => {
    return (
      stepTracker &&
      stepTracker.map(
        (
          {
            // id,
            // app_id,
            date,
            step_type,
            contact_name,
            contact_role,
            contact,
            notes,
            operation,
          },
          index
        ) => {
          return (
            <tr key={id}>
              {/* <td>{id}</td>
              <td>{app_id}</td> */}
              <td>{date}</td>
              <td>{step_type}</td>
              <td>{contact_name}</td>
              <td>{contact_role}</td>
              <td>{contact}</td>
              <td>{notes}</td>
              <td>{app_status}</td>
              <td className="operation">
                <button
                  className="deleteButton"
                  onClick={() =>
                    setShowModalStep({ action: "edit", app_id: index })
                  }
                >
                  Edit
                </button>
                <button className="button" onClick={() => removeStep(id)}>
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
      <h1 id="title">Applications Steps</h1>
      <table id="stepTracker">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>

      {showModalStep.action ? (
        <ModalStep
          //setShowModalStep={setShowModalStep}
          setModalStep={setShowModalStep}
          action={showModalStep.action}
          currentStep={
            showModalStep.action === "edit" ? stepTracker[showModalStep.id] : {}
          }
          appId={state.appId}
        />
      ) : (
        <button onClick={() => setShowModalStep({ action: "add", id: state.appId })}>
          Add new step
        </button>
        
      )}
      <button onClick={() => history.goBack()}>Back</button>
    </>
  );
};
export default Steps;
