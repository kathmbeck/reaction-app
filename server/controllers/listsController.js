const List = require("../models/list");
const HttpError = require("../models/httpError");

const createList = (req, res, next) => {
  const newList = {
    title: req.body.list.title,
    boardId: req.body.boardId,
    cards: [],
  };
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

exports.createList = createList;
exports.sendList = sendList;
exports.editList = editList;
