export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const cardsOnly = action.board.lists
        .map((list) => {
          return list.cards;
        })
        .flat();

      return cardsOnly;
    }
    case "CREATE_CARD_SUCCESS": {
      return state.concat(action.card);
    }
    default:
      return state;
  }
}

// const listsWithoutCards = action.board.lists.reduce(
//   (acc, list) => {
//     const { cards, ...listsWithoutCards } = list;
//     return acc.concat(listsWithoutCards );
//   }, []
// );
// return listsWithoutCards;
