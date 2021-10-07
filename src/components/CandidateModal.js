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

const CandidateModal = ({ open, handleClose, handleSubmitCandidate }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleSubmitCandidate(data);
    reset({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      available: '',
      email: '',
      alreadyDev: false
    });
  };
  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Candidate Modal"
        ariaHideApp={false}
      >
        <button type="button" onClick={handleClose}>
          close
        </button>
        <h3>Add a new candidate</h3>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-item">
            <label>First name: </label>
            <input type="text" name="firstName" {...register('firstName', { required: true })} />
            {errors.firstName?.type === 'required' && <small>This field is required</small>}
          </div>
          <div className="input-item">
            <label>Last name: </label>
            <input type="text" name="lastName" {...register('lastName', { required: true })} />
            {errors.lastName?.type === 'required' && <small>This field is required</small>}
          </div>
          <div className="input-item">
            <label>Date of birth: </label>
            <input
              type="date"
              name="dateOfBirth"
              {...register('dateOfBirth', { required: true })}
            />
            {errors.dateOfBirth?.type === 'required' && <small>This field is required</small>}
          </div>
          <div className="input-item">
            <label>Available from: </label>
            <input type="date" name="available" {...register('available', { required: true })} />
            {errors.available?.type === 'required' && <small>This field is required</small>}
          </div>
          <div className="input-item">
            <label>Email: </label>
            <input
              type="text"
              name="email"
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {errors.email?.type === 'required' && <small>This field is required</small>}
            {errors.email?.type === 'pattern' && <small>This format is not correct</small>}
          </div>
          <div className="input-item">
            <label>Already worked as a developer: </label>
            <input type="checkbox" name="alreadyDev" {...register('alreadyDev')} />
          </div>
          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
};
export default CandidateModal;
