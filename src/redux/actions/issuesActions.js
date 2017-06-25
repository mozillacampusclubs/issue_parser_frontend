import axios from 'axios';
import { APIBase } from '../../constraints';

export function fetchMetaData() {
  return {
    type: "FETCH_METADATA",
    payload: axios.get(APIBase() + '/metadata/')
  }
}

export function fetchIssuesList(state) {
  return {
    type: "FETCH_ISSUES_LIST",
    payload: axios.get(APIBase() + '/issues/', {
      params: state
    })
  }
}

export function sortIssues(attr, order) {
  return {
        type: "SORT_ISSUES",
        payload: {attr: attr, order: order},
    }
}
