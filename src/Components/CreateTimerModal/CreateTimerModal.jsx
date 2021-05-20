import "./CreateTimerModal.scss";

import React from "react";

const CreateTimerModal = () => {
  return (
    <div className="create-timer-modal">
      <button className="modal-close-button">
        <div className="modal-close-button-component"></div>
        <div className="modal-close-button-component"></div>
      </button>
      <div className="modal">
        <div className="modal-title">CREATE A NEW TIMER</div>
        <form>
          <div className="form-row">
            <div className="row-text">Title:</div>
            <input
              type="text"
              className="text-input modal-input"
              placeholder="A title"
            />
          </div>
          <div className="form-row">
            <div className="row-text">From:</div>
            <input
              type="text"
              className="text-input modal-input"
              placeholder="Start date"
            />
          </div>
          <div className="form-row">
            <div className="row-text">To:</div>
            <input
              type="text"
              className="text-input modal-input"
              placeholder="End date"
            />
          </div>
          <div className="form-row">
            <div className="row-text">Description:</div>
            <input
              type="text"
              className="text-input modal-input"
              placeholder="A description"
            />
          </div>
          <div className="form-row">
            <button className="btn modal-done-button">DONE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTimerModal;
