export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const cardsOnly = action.board.lists.map(list => {
        return list.cards;
      }).flat();

      return cardsOnly;
      // const listsWithoutCards = action.board.lists.reduce(
      //   (acc, list) => {
      //     const { cards, ...listsWithoutCards } = list;
      //     return acc.concat(listsWithoutCards );
      //   }, []
      // );
      // return listsWithoutCards;
    }
    default:
      return state;
  }
}