import React, { useState } from "react";
import Modal from "react-modal";
import { currentElement } from "../type";






type DirectorProps = {
  closeModal: () => void;
  modalIsOpen: boolean;
  currentElement: currentElement;
};

const DirectorModal: React.FC<DirectorProps> = ({
  modalIsOpen,
  closeModal,
  currentElement,
}) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <>
          <div className="Modal__card">
            <div className="Modal__card__container">
            <button onClick={closeModal} className="cross"><img className="icon" src = "https://www.freeiconspng.com/thumbs/close-icon/close-icon-30.png" /></button>

              <h2 className="title">{currentElement.director}</h2>

              <div className="Modal__img__container">
                <img src={currentElement.directorImage} alt="" />
              </div>
                    

              <p>{currentElement.directorInfo}</p>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};

export default DirectorModal;
