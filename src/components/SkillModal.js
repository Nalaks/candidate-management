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

const SkillModal = ({ open, handleClose, addSkill, handleSkillInput, handleSubmitSkill }) => (
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
      <h3>Add a new skill for the candidate</h3>
      <form className="form">
        <div className="input-item">
          <label htmlFor="subject">Subject: </label>
          <input type="text" name="subject" value={addSkill.subject} onChange={handleSkillInput} />
        </div>
        <div className="input-item">
          <label htmlFor="since">Since: </label>
          <input type="text" name="since" value={addSkill.since} onChange={handleSkillInput} />
        </div>
        <div className="input-item">
          <label htmlFor="knowledge">Knowledge: </label>
          <input
            type="radio"
            name="knowledge"
            value="beginner"
            onChange={handleSkillInput}
            defaultChecked
          />
          Beginner
          <input type="radio" name="knowledge" value="user" onChange={handleSkillInput} /> User
          <input type="radio" name="knowledge" value="expert" onChange={handleSkillInput} /> Expert
        </div>
        <button type="submit" onClick={handleSubmitSkill}>
          Submit a new skill
        </button>
      </form>
    </Modal>
  </div>
);

export default SkillModal;
