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

    case "SORT_ISSUES":
      {
        let sortData = [...state.issuesList.data];
        if (action.payload.order === -1) {
          sortData.sort(descending);
        } else if (action.payload.order === 1) {
          sortData.sort(ascending);
        }

        state = { ...state, issuesList: {
          data: sortData,
          fetching: false,
          fetched: true,
          error: null,
        }};
        break;
      }

    default:
      {}
  }

  function ascending(a, b) {
    if (a[action.payload.attr] < b[action.payload.attr])
      return -1;
    if (a[action.payload.attr] > b[action.payload.attr])
      return 1;
    return 0;
  }

  function descending(a, b) {
    if (a[action.payload.attr] > b[action.payload.attr])
      return -1;
    if (a[action.payload.attr] < b[action.payload.attr])
      return 1;
    return 0;
  }

  return state
}
