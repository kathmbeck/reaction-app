import React, { useState } from "react";
import { useSelector } from "react-redux";
import List from "./List";

const ExistingLists = () => {
  const lists = useSelector((state) => state.lists);
  const [activeList, setActiveList] = useState(null);

  const handleAddCardClick = (listId) => {
    setActiveList(listId);
  };

  const handleAddCardClose = () => {
    setActiveList(null);
  };

  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map((list) => {
        return (
          <List
            key={list._id}
            list={list}
            onAddCardClick={handleAddCardClick}
            onAddCardClose={handleAddCardClose}
            isActiveList={activeList === list._id}
          />
        );
      })}
    </div>
  );
};

export default ExistingLists;
