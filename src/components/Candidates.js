import React from 'react';
import Button from './Button';

const Candidates = ({ data, toggleSkills, deleteRow, handleOpen }) => {
  const tableHeadings = [
    'First name',
    'Last name',
    'Date of birth',
    'Available from',
    'Email',
    'Alreaday worked as a developer'
  ];
  return (
    <div>
      <h3>Candidates</h3>
      <table>
        <thead>
          <tr>
            {tableHeadings.map((headings) => (
              <th key={headings}>{headings}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((candidates) => (
            <tr
              key={candidates.id}
              data-index={candidates.id}
              className="candidate"
              onClick={toggleSkills}
            >
              <td>{candidates.firstName}</td>
              <td>{candidates.lastName}</td>
              <td>{candidates.dateOfBirth}</td>
              <td>{candidates.available}</td>
              <td>{candidates.email}</td>
              <td>
                <input
                  type="checkbox"
                  name="dev"
                  id="dev"
                  defaultChecked={candidates.alreadyDev === 'true' ? 'checked' : ''}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Button text="New record" buttonHandler={handleOpen} />
      <Button text="Delete record" buttonHandler={deleteRow} />
    </div>
  );
};

export default Candidates;
