import axios from 'axios';

const APIBase = 'http://localhost:8000';

export function fetchMetaData() {
  return {
    type: "FETCH_METADATA",
    payload: axios.get(APIBase + '/metadata/')
  }
}

export function fetchIssuesList(state) {
  return {
    type: "FETCH_ISSUES_LIST",
    payload: axios.get(APIBase + '/issues/', {
      params: state
    })
  }
}
