import { combineReducers } from 'redux';

import issues from './issuesReducer';
// import other from './otherReducer';

export default combineReducers({
    issues,
    // other,
})
