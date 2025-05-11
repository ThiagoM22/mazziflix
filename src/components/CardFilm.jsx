import React, { useState } from "react";
import Modal from "./Modal";
const CardFilm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <div onClick={toggleModal}>
        <div>
          <img className="Card" src="https://placehold.co/300x420" alt="" />
        </div>
      </div>
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </>
  );
};

export default CardFilm;
