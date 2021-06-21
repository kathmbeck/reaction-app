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
    case "CREATE_LIST_SUCCESS": {
      return state.concat(action.list)
    }
    case "EDIT_LIST_SUCCESS": {
      const updatedList = action.updatedList;
      return state.map(list => {
         return list._id === updatedList._id ? updatedList : list
      });
    }
    default:
      return state;
  }
}