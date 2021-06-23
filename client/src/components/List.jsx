import React, { useState } from "react";
import ExistingCards from "./ExistingCards";
import NewCard from "./NewCard";
import { editList } from "../actions/ListActions";
import { useDispatch } from "react-redux";

const List = ({ list, isActiveList, onAddCardClick, onAddCardClose }) => {
  const [titleClicked, setTitleClicked] = useState(false);
  const [newListTitle, setNewListTitle] = useState(list.title);
  const dispatch = useDispatch();

  const classList = ["list-wrapper"];
  if (isActiveList) {
    classList.push("add-dropdown-active");
  }

  const handleSubmit = () => {
    const newListInfo = {
      title: newListTitle,
    };
    dispatch(editList(list._id, newListInfo));
  };

  const handleBlur = (e) => {
    e.preventDefault();
    setTitleClicked(false);
    handleSubmit();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTitleClicked(false);
      handleSubmit();
    }
  };

  return (
    <div className={classList.join(" ")}>
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div onClick={() => setTitleClicked(true)}>
            {titleClicked ? (
              <input
                className="list-title"
                autoFocus={true}
                value={newListTitle}
                onChange={(e) => setNewListTitle(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <p className="list-title">{newListTitle}</p>
            )}
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <ExistingCards listId={list._id} />
          <NewCard
            listId={list._id}
            onAddCardClick={onAddCardClick}
            onAddCardClose={onAddCardClose}
            isActiveList={isActiveList}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
