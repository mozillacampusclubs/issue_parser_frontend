import axios from 'axios';

export function fetchMetaData() {
    return {
        type: "FETCH_METADATA",
        payload: axios.get(`http://localhost:8000/metadata/`)
    }
}
