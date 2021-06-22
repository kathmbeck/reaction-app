const Board = require("../models/board");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getBoards = (req, res, next) => {
  Board.find({}, "title _id createdAt updatedAt")
    .then(boards => {
      res.json({
        boards,
      })
    })
};

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body.board)
      .then((board) => {
        Board.find({ _id: board._id }, "title _id createdAt updatedAt")
        .then(board => res.json({ board }))
      })
      .catch(err =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const getBoard = (req, res, next) => {
  const id = req.params.id
  Board.findById(id, "title _id createdAt updatedAt lists")
    .populate({path: "lists", populate: {path: "cards"}})
    .then(board => res.json(board))
    .catch(err => 
      next(new HttpError("The board does not exist", 404))
    );
};

const addListToBoard = (req, res, next) => {
  const listId = req.list._id
  const boardId = req.list.boardId;
  Board.findByIdAndUpdate(boardId, {
    $addToSet: { lists: listId }
  }).then(() => next())
}

exports.getBoards = getBoards;
exports.createBoard = createBoard;
exports.getBoard = getBoard;
exports.addListToBoard = addListToBoard;
