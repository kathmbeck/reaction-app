import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { createList } from "../actions/ListActions"
import { useParams } from 'react-router-dom';


const NewList = () => {
  const [toggleState, setToggleState] = useState(false)
  const { id } = useParams();
  const boardId = id;
  const [title, setTitle] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") return;

    const newListInfo = {
      boardId,
      list: {
        title
      }
    }

    dispatch(createList(newListInfo))
    setTitle('');
    setToggleState(false);
  }

  return (
    <div id="new-list" className={`new-list${toggleState ? " selected" : ""}`}>
      <span onClick={() => setToggleState(!toggleState)}>Add a list...</span>
      <input
        type="text"
        placeholder="Add a list..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div>
        <input type="submit" className="button" value="Save"  onClick={handleSubmit}/>
        <i className="x-icon icon" onClick={() => setToggleState(!toggleState)}></i>
      </div>
    </div>
  )
}

export default NewList;
