const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    title: {
      type: String,
      required: [true, 'The List title is required']
    },
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Card'
      }
    ],
    boardId: {
        type: String,
        required: [true, 'The List must have a Board Id']
    },
    // position
  }, { timestamps: true });


  const List = mongoose.model('List', ListSchema)

  module.exports = List;