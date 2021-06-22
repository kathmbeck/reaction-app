const Card = require("../models/card");
const List = require("../models/list");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");


const getCard = (req, res, next) => {
  const id = req.params.id
  Card.findById(id)
    .then(card => res.json(card))
    .catch(err => 
      next(new HttpError("The card does not exist", 404))
    );
};

const createCard = (req, res, next) => {
  const listId = req.body.listId;
  const boardId = req.boardId;
  
  const newCard = {
    title: req.body.card.title,
    boardId,
    listId,
    labels: [], 
    comments: [], 
  };

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Card.create(newCard)
        .then((card) => {
        Card.findById(card._id)
            .then(card => {
            req.card = card;
            next();
            })
        })
        .catch((err) =>
        next(new HttpError("Creating card failed, please try again", 500))
        );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const sendCard = (req, res, next) => {
  return res.json(req.card)
}

  exports.getCard = getCard;
  exports.sendCard = sendCard; 
  exports.createCard = createCard;
  