import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import ModalStep from './ModalStep.jsx';

const Steps = () => {
  const history = useHistory();
  const [stepTracker, setStepTracker] = useState([]);

  const [showModalStep, setShowModalStep] = useState({
    action: null,
    id: null,
  }); // none / edit /add

  const { app_id } = useParams();

  const [updateState, setUpdateState] = useState(true);

  const fetchStep = async () => {
    const resp = await fetch(`/user/2/application/${app_id}/step`, {
      method: 'GET',
      headers: { 'content-type': 'application/JSON' },
    });
    const data = await resp.json();
    console.log(data);
    setStepTracker(data);
    setUpdateState(false);
  };

  // get the applications steps data from the DB
  useEffect(() => {
    if (updateState) fetchStep();
  }, [updateState]);

  //Delete step from the DB
  const removeStep = (step_id) => {
    fetch(`/user/2/application/${app_id}/step/${step_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/JSON',
      },
    }).then((res) => {
      setUpdateState(true);
    });
  };

  //this is the header
  //Operation is for Edit and Delete functionality
  const renderHeader = () => {
    let headerElement = [
      'id',
      'app id',
      'date',
      'step_type',
      'contact_name',
      'contact_role',
      'contact',
      'notes',
    ];

    //now we will map over these values and output as th
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      stepTracker &&
      stepTracker.map(
        (
          {
            id,
            app_id,
            date,
            step_type,
            contact_name,
            contact_role,
            contact,
            notes,
          },
          index
        ) => {
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{app_id}</td>
              <td>{date}</td>
              <td>{step_type}</td>
              <td>{contact_name}</td>
              <td>{contact_role}</td>
              <td>{contact}</td>
              <td>{notes}</td>
              <td className="operation">
                <button
                  className="deleteButton"
                  onClick={() =>
                    setShowModalStep({ action: 'edit', app_id: index })
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
          setShowModalStep={setShowModalStep}
          action={showModalStep.action}
          currentStep={
            showModalStep.action === 'edit' ? stepTracker[showModalStep.id] : {}
          }
          app_id={app_id}
        />
      ) : (
        <button onClick={() => setShowModalStep({ action: 'add', id: null })}>
          Add new step
        </button>
      )}
      <button onClick={() => history.goBack()}>Back</button>
    </>
  );
};
export default Steps;
