export default function reducer(state = {
  regionsList: {
    data: {},
    fetching: false,
    fetched: false,
    error: false,
  },
}, action) {
  switch (action.type) {
    case "FETCH_REGION_LIST_PENDING":
      {
        state = { ...state, regionsList: {
          data: {},
          fetching: true,
          fetched: false,
          error: false,
        }};
        break;
      }
    case "FETCH_REGION_LIST_FULFILLED":
      {
        state = { ...state, regionsList: {
          data: action.payload.data,
          fetching: false,
          fetched: true,
          error: false,
        }};
        break;
      }
    case "FETCH_REGION_LIST_REJECTED":
      {
        state = { ...state, regionsList: {
          data: {},
          fetching: false,
          fetched: false,
          error: true,
        }};
        break;
      }
    default:
      {}
  }

  return state

}
