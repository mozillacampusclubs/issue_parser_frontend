import * as actions from '../../../redux/actions/issuesActions';
import nock from 'nock';
import promise from 'redux-promise-middleware';
import configureMockStore from 'redux-mock-store'


describe('normal actions', () => {
  it('should create an action to sort issues', () => {
    const attr = 'experience_needed';
    const order = 1;
    const expectedAction = {
      type: "SORT_ISSUES",
      payload: {
        attr,
        order
      }
    }
    expect(actions.sortIssues(attr, order)).toEqual(expectedAction);
  })
})



describe('async actions', () => {
  const middlewares = [promise]
  const mockStore = configureMockStore(middlewares)

  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_METADATA_FULFILLED when fetched metadata', () => {
    const metadata = {
      "experience_needed": [
          "senior",
          "moderate",
          "easyfix"
      ],
      "language": [
          "python",
          "javascript",
          "python, sql",
          "yml"
      ],
      "tech_stack": [
          "react.js",
          "django, celery",
          "jest",
          "django"
      ]
    }
    nock('http://example.com/')
      .get('/metadata')
      .reply(200, { metadata: metadata })

    const expectedActions = [
      { type: 'FETCH_METADATA_PENDING' },
      { type: 'FETCH_METADATA_FULFILLED', metadata: metadata }
    ]
    const store = mockStore({ metadata: metadata })

    return store.dispatch(actions.fetchMetaData()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
