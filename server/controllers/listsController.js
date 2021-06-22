const List = require("../models/list");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createList = (req, res, next) => {
  const newList = {
    title: req.body.list.title,
    boardId: req.body.boardId,
    cards: [],
  };

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    List.create(newList)
      .then((list) => {
        List.findById(
          list._id,
          "title _id boardId createdAt updatedAt")
          .then(list => {
            req.list = list;
            next();
          })
      })
      .catch((err) =>
        next(new HttpError("Creating list failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const sendList = (req, res, next) => {
  return res.json(req.list)
}

const editList = (req, res, next) => {
  const id = req.params.id
  List.findByIdAndUpdate(id, req.body, { new: true })
    .then(updatedList => {
      // updatedList contain cards?
      req.list = updatedList;
      next();
    })
    .catch((err) =>
      next(new HttpError("Editing the list failed, please try again", 500))
    );
}

const findBoardId = (req, res, next) => {
  const listId = req.body.listId;
  List.findById(listId).then(list => {
    req.boardId = list.boardId;
    next(); 
   })
}

const addCardToList = (req, res, next) => {
  const cardId = req.card._id
  const listId = req.card.listId;
  List.findByIdAndUpdate(listId, {
    $addToSet: { cards: cardId }
  }).then(() => next())
}

exports.createList = createList;
exports.sendList = sendList;
exports.editList = editList;
exports.findBoardId = findBoardId;
exports.addCardToList = addCardToList; 
