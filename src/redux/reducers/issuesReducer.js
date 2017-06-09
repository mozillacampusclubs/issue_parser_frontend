export default function reducer(state={
    data: {},
    fetching: false,
    fetched: false,
    error: null,
}, action) {
  switch(action.type) {
    case "FETCH_METADATA_PENDING": {
      state = {...state};
      state.fetching = true;
      state.fetched = false;
      break;
    }
    case "FETCH_METADATA_FULFILLED": {
      state ={...state};
      state.data = action.payload.data;
      state.fetched = true;
      state.fetching = false;
      break;
    }
    case "FETCH_METADATA_REJECTED": {
      state ={...state};
      state.error = "issues fetching error";
      state.fetched = false;
      state.fetching = false;
      break;
    }
    default: {}
  }

  return state
}
