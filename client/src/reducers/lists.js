export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const listsWithoutCards = action.board.lists.reduce(
        (acc, list) => {
          const { cards, ...listsWithoutCards } = list;
          return acc.concat(listsWithoutCards );
        }, []
      );
      return listsWithoutCards;
    }
    default:
      return state;
  }
}