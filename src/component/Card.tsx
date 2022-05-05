import React, { useState } from "react";
import DirectorModal from "./Modal";
import {currentElement} from '../type'
import { ToastContainer, toast } from 'react-toastify';
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"




const Card: React.FC<{ currentElement: currentElement }> = ({
  currentElement,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {   
    setIsOpen(true);
  };

  const notify = () => toast("Success!");


  return (
    <>
      <div className="card">
        <div className="container">
          <div className="Card__img__text">
            <div className="inline">
              <h2 className="card__info">{currentElement.title}</h2>
              <h5>{currentElement.genre}</h5>

              <a  onClick={openModal}>
                <h4>{currentElement.director}</h4>
              </a>
            </div>
            <div className="Card__img__container">
              <img src={currentElement.img} alt="" />
            </div>
          </div>

          <p className="card__description">{currentElement.body}</p>
        </div>
        <button className="card__btn" onClick={notify}>
          Add to favorites
        </button>
        <ToastContainer />
      </div>
      <DirectorModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        currentElement={currentElement}
      />
    </>
  );
};

export default Card;
