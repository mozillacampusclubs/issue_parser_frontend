export default function reducer(state = {
  issuesList: {
    data: {},
    fetching: false,
    fetched: false,
    error: null,
  },
  metadata: {
    data: {},
    fetching: false,
    fetched: false,
    error: null,
  }
}, action) {
  switch (action.type) {
    case "FETCH_METADATA_PENDING":
      {
        state = { ...state, metadata: {
          data: {},
          fetching: true,
          fetched: false,
          error: null,
        }};
        break;
      }
    case "FETCH_METADATA_FULFILLED":
      {
        state = { ...state, metadata: {
          data: action.payload.data,
          fetching: false,
          fetched: true,
          error: null,
        }};
        break;
      }
    case "FETCH_METADATA_REJECTED":
      {
        state = { ...state, metadata: {
          data: {},
          fetching: false,
          fetched: false,
          error: "issues fetching error",
        }};
        break;
      }


    case "FETCH_ISSUES_LIST_PENDING":
      {
        state = { ...state, issuesList: {
          data: {},
          fetching: true,
          fetched: false,
          error: null,
        }};
        break;
      }
    case "FETCH_ISSUES_LIST_FULFILLED":
      {
        state = { ...state, issuesList: {
          data: action.payload.data,
          fetching: false,
          fetched: true,
          error: null,
        }};
        break;
      }
    case "FETCH_ISSUES_LIST_REJECTED":
      {
        state = { ...state, issuesList: {
          data: {},
          fetching: false,
          fetched: false,
          error: "issues fetching error",
        }};
        break;
      }


    default:
      {}
  }

  return state
}
