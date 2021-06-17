export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS": {
      return action.boards; 
    }
    case "FETCH_BOARD_SUCCESS": {
      const { lists, ...boardWithoutLists } = action.board;
      return [boardWithoutLists];

      // return state.filter((board) => board._id !== action.board._id)
      //             .concat(boardWithoutLists);
    }

    case "CREATE_BOARD_SUCCESS": {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    
    default:
      return state;
  }
}
