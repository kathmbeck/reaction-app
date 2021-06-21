import React, {useState} from "react";
import ExistingCards from "./ExistingCards";
import { createList, editList } from "../actions/ListActions"
import { useDispatch } from "react-redux"

const List = ({ list }) => {
  const [titleClicked, setTitleClicked] = useState(false)
  const [newListTitle, setNewListTitle] = useState(list.title);
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    const newListInfo = {
      title: newListTitle
    }
    dispatch(editList(list._id, newListInfo))
    
  }
  
  const handleBlur = (e) => {
    e.preventDefault();
    setTitleClicked(false);
    handleSubmit()
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTitleClicked(false);
      handleSubmit()
    }
  }

  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div onClick={() => setTitleClicked(true)}>
            {titleClicked ? (
              <input className="list-title" 
                autoFocus={true}
                value={newListTitle}
                onChange={(e) => setNewListTitle(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown} />
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
          <ExistingCards listId={list._id}/>
          <div className="add-dropdown add-bottom">
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;
