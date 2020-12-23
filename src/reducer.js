export const initialState = {
  tags: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TAG":
      if (state.tags.indexOf(action.tag) === -1) {
        return {
          tags: [...state.tags, action.tag],
        };
      }
      return {
        tags: state.tags,
      };
    case "REMOVE_TAG":
      return {
        tags: state.tags.filter(function (item) {
          return item !== action.tag;
        }),
      };
    case "CLEAR_TAGS":
      return { tags: [] };

    default:
      return state;
  }
}

export default reducer;
