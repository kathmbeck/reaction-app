const express = require ('express');
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController"); // in boardsController

const { validateBoard } = require("../validators/validators");


router.get('/boards',boardsController.getBoards );

router.post('/boards', validateBoard, boardsController.createBoard );

router.get('/boards/:id', boardsController.getBoard);

router.post(
  "/lists",
  listsController.createList,
  boardsController.addListToBoard,
  listsController.sendList
);

// EXPECTED PAYLOAD:
// {
//   "boardId": id,
//   "list": {
//     "title": "My list"
//   }
// }

// EXPECTED RESPONSE:
// {
//   "_id": 10,
//   "title": "My list",
//   "boardId": 1,
//   "createdAt": "2020-10-06T23:40:26.606Z",
//   "updatedAt": "2020-10-06T23:40:26.606Z",
//   "position": 65535.0
// }


module.exports = router;