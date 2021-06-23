import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../actions/CardActions";

const NewCard = ({ listId, onAddCardClick, onAddCardClose, isActiveList }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      listId,
      card: {
        title,
      },
    };

    dispatch(createCard(newCard));
    setTitle("");
    onAddCardClose();
  };

  return (
    <>
      <div
        className={`add-dropdown add-bottom${
          isActiveList ? " active-card" : ""
        }`}
      >
        <div className="card">
          <div className="card-info"></div>
          <textarea
            name="add-card"
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
          <div className="members"></div>
        </div>
        <a className="button" onClick={handleSubmit}>
          Add
        </a>
        <i className="x-icon icon" onClick={onAddCardClose}></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
      <div
        onClick={() => onAddCardClick(listId)}
        className="add-card-toggle"
        data-position="bottom"
      >
        Add a card...
      </div>
    </>
  );
};

export default NewCard;
