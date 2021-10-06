/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '35%',
    textAlign: 'center'
  }
};

const CandidateModal = ({
  open,
  handleClose,
  addCandidate,
  handleUserInput,
  handleUserInputChecked,
  handleSubmitCandidate
}) => (
  <div>
    <Modal
      isOpen={open}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <button type="button" onClick={handleClose}>
        close
      </button>
      <h3>Add a new candidate</h3>
      <form className="form">
        <div className="input-item">
          <label htmlFor="firstName">First name: </label>
          <input
            type="text"
            name="firstName"
            value={addCandidate.firstName}
            onChange={handleUserInput}
          />
        </div>
        <div className="input-item">
          <label htmlFor="lastName">Last name: </label>
          <input
            type="text"
            name="lastName"
            value={addCandidate.lastName}
            onChange={handleUserInput}
          />
        </div>
        <div className="input-item">
          <label htmlFor="dateOfBirth">Date of birth: </label>
          <input
            type="text"
            name="dateOfBirth"
            value={addCandidate.dateOfBirth}
            onChange={handleUserInput}
          />
        </div>
        <div className="input-item">
          <label htmlFor="available">Available from: </label>
          <input
            type="text"
            name="available"
            value={addCandidate.available}
            onChange={handleUserInput}
          />
        </div>
        <div className="input-item">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" value={addCandidate.email} onChange={handleUserInput} />
        </div>
        <div className="input-item">
          <label htmlFor="alreadyDev">Already worked as a developer: </label>
          <input
            type="checkbox"
            name="alreadyDev"
            value={addCandidate.alreadyDev}
            onChange={handleUserInputChecked}
          />
        </div>
        <button type="submit" onClick={handleSubmitCandidate}>
          Submit new candidate
        </button>
      </form>
    </Modal>
  </div>
);

export default CandidateModal;
