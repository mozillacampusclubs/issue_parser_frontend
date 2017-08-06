import axios from 'axios';
import { APIBase } from '../../constraints';

export function fetchMetaData() {
  return {
    type: "FETCH_METADATA",
    payload: axios.get(APIBase() + '/metadata/')
  }
}

export function fetchIssuesList(state) {
  if (state.regions === 'all') {
    console.log(state)
    delete state.regions
    console.log(state)
  }
  return {
    type: "FETCH_ISSUES_LIST",
    payload: axios.get(APIBase() + '/issues/', {
      params: state
    })
  }
}

export function resetIssuesList() {
  return {
    type: "RESET_ISSUES_LIST",
  }
}

export function sortIssues(attr, order) {
  return {
        type: "SORT_ISSUES",
        payload: {attr: attr, order: order},
    }
}
