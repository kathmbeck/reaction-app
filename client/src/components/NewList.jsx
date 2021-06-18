import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { createList } from "../actions/ListActions"
import { useParams } from 'react-router-dom';


const NewList = () => {
  const { id } = useParams();
  const boardId = id;
  const [title, setTitle] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newListInfo = {
      boardId,
      list: {
        title
      }
    }

    dispatch(createList(newListInfo))
    setTitle('');
  }

  return (
    <div id="new-list" className="new-list">
      <span>Add a list...</span>
      <input
        type="text"
        placeholder="Add a list..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        onSubmit={handleSubmit}
      />
      <div>
        <input type="submit" className="button" value="Save" />
        <i className="x-icon icon"></i>
      </div>
    </div>
  )
}

export default NewList;
