/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

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

const SkillModal = ({ open, handleClose, handleSubmitSkill }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleSubmitSkill(data);
    reset({
      subject: '',
      since: '',
      knowledge: ''
    });
  };
  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Skill Modal"
        ariaHideApp={false}
      >
        <button type="button" onClick={handleClose}>
          close
        </button>
        <h3>Add a new skill for the candidate</h3>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-item">
            <label>Subject: </label>
            <input type="text" {...register('subject', { required: true, maxLength: 50 })} />
            {errors.subject?.type === 'required' && <small>This field is required</small>}
          </div>
          <div className="input-item">
            <label>Since: </label>
            <input
              type="date"
              {...register('since', {
                required: true
              })}
            />
            {errors.dateOfBirth?.type === 'required' && <small>This field is required</small>}
          </div>
          <div className="input-item">
            <label>Knowledge: </label>
            <input
              type="radio"
              value="beginner"
              {...register('knowledge', { required: true })}
            />{' '}
            Beginner
            <input type="radio" value="user" {...register('knowledge', { required: true })} /> User
            <input
              type="radio"
              value="expert"
              {...register('knowledge', { required: true })}
            />{' '}
            Expert
            {errors.knowledge?.type === 'required' && <small>This field is required</small>}
          </div>
          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
};
export default SkillModal;
