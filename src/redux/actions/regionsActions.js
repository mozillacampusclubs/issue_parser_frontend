import axios from 'axios';
import { APIBase } from '../../constraints';

export function fetchRegionList() {
  return {
    type: "FETCH_REGION_LIST",
    payload: axios.get(APIBase() + '/regionlist/')
  }
}
