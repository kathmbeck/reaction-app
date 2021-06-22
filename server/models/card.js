const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Card title is required']
  },
  completed: {
      type: Boolean, 
      default: false,
  },
  dueDate: {
      type: Date, 
      default: null, 
  },
  archived: {
      type: Boolean,
      default: false,
  },
  labels: [
    {
      type: String
    }
  ],
  description: {
    type: String,
    default: "",
  },
  listId: {
      type: Schema.Types.ObjectId,
      ref: 'List',
      required: [true, 'The Card must have a List Id']
  },
  boardId: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
      required: [true, 'The Card must have a Board Id']
  },
  comments: [
      { type: String } // Comment model?
  ],
  // remove commentsCount?
  // commentsCount: {
  //   type: Number,
  //   default: 0,
  //   required: [true, 'The Card must have a Comments count']
  // },
  // actions: [
  //     { type: }
  // ],
  // position
}, { timestamps: true });

CardSchema.virtual('commentsCount').get(function() {
  return this.comments.length;
});

const Card = mongoose.model('Card', CardSchema)

module.exports = Card;

// var PersonSchema = new Schema({
//   name: {
//       first: String
//     , last: String
//   }
// }, {
// toObject: {
// virtuals: true
// },
// toJSON: {
// virtuals: true 
// }
// });