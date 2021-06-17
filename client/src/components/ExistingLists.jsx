import React from "react";
import { useSelector } from "react-redux";
import List from "./List"

const ExistingLists = () => {
  const lists = useSelector(state => state.lists)

  // if (!lists) {return null}

  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map(list => {
        return (
          <List 
            key={list._id}
            list={list} 
          />
        )
      })}
    </div>
  )
}

export default ExistingLists;
