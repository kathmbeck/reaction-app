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
      List.find(
        { _id: list._id },
        "title _id boardId createdAt updatedAt")
        .then(list => {
          req.list = list[0]
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

exports.createList = createList;
exports.sendList = sendList;
