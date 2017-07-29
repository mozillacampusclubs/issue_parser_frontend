import { combineReducers } from 'redux';

import issues from './issuesReducer';
import regions from './regionsReducer';
// import other from './otherReducer';

export default combineReducers({
    issues,
    regions,
    // other,
})
