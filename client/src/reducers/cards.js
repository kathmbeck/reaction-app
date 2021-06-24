export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const cardsOnly = action.board.lists
        .map((list) => {
          return list.cards;
        })
        .flat();

      return cardsOnly;
    }
    case "FETCH_CARD_SUCCESS": {
      return state.map(card => {
        if (card._id === action.card._id) {
          return action.card
        }
        return card
      });
    }
    case "CREATE_CARD_SUCCESS": {
      return state.concat(action.card);
    }
    default:
      return state;
  }
}
