import * as actions from '../../../redux/actions/issuesActions';
import moxios from 'moxios'
import promise from 'redux-promise-middleware';
import configureMockStore from 'redux-mock-store'

import { APIBase } from '../../../constraints';

const middlewares = [promise()]
const mockStore = configureMockStore(middlewares)

// Below code test suite non async actions.
describe('normal actions', () => {
  it('should create an action to sort issues', () => {
    const attr = 'experience_needed';
    const order = 1;
    const expectedAction = {
      type: "SORT_ISSUES",
      payload: {attr,order}
    }
    expect(actions.sortIssues(attr, order)).toEqual(expectedAction);
  })
})

// Below code test suite only async actions.
describe('async actions', () => {

  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install()
  })

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  })

  it('test fetch metadata action', () => {

    moxios.stubRequest(APIBase() + '/metadata/', {
      status: 200,
      response: {}
    });

    const expectedActionsAfterSuccess = [
      { type: 'FETCH_METADATA_PENDING' },
      { type: 'FETCH_METADATA_FULFILLED' }
    ]

    const expectedActionsAfterFailure = [
      { type: 'FETCH_METADATA_PENDING' },
      { type: 'FETCH_METADATA_REJECTED' }
    ]

    const store = mockStore({ todos: []  })

    return store.dispatch(actions.fetchMetaData()).then(() => {
      expect(store.getActions()[0].type).toEqual(expectedActionsAfterSuccess[0].type)
      expect(store.getActions()[1].type).toEqual(expectedActionsAfterSuccess[1].type)
    }).catch(() => {
      expect(store.getActions()[0].type).toEqual(expectedActionsAfterFailure[0].type)
      expect(store.getActions()[1].type).toEqual(expectedActionsAfterFailure[1].type)
    })
  })

  it('test fetch issues action', () => {

    moxios.stubRequest(APIBase() + '/issues/', {
      status: 200,
      response: {}
    });

    const expectedActionsAfterSuccess = [
      { type: 'FETCH_ISSUES_LIST_PENDING' },
      { type: 'FETCH_ISSUES_LIST_FULFILLED' }
    ]

    const expectedActionsAfterFailure = [
      { type: 'FETCH_ISSUES_LIST_PENDING' },
      { type: 'FETCH_ISSUES_LIST_REJECTED' }
    ]

    const store = mockStore({})

    return store.dispatch(actions.fetchIssuesList({})).then(() => {
      expect(store.getActions()[0].type).toEqual(expectedActionsAfterSuccess[0].type)
      expect(store.getActions()[1].type).toEqual(expectedActionsAfterSuccess[1].type)
    }).catch(() => {
      expect(store.getActions()[0].type).toEqual(expectedActionsAfterFailure[0].type)
      expect(store.getActions()[1].type).toEqual(expectedActionsAfterFailure[1].type)
    })
  })

})
