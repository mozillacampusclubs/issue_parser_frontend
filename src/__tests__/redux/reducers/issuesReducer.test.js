import reducer from '../../../redux/reducers/issuesReducer';

describe('issues reducer', () => {

  const initialState = {
    issuesList: {
      data: {},
      fetching: false,
      fetched: false,
      error: false,
    },
    metadata: {
      data: {},
      fetching: false,
      fetched: false,
      error: false,
    }
  };

  // Test for initial state
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);;
  })

  // Tests related to metadata fetching
  it('should handle the FETCH_METADATA_PENDING', () => {
    const finalState = { ...initialState, metadata: {
      data: {},
      fetching: true,
      fetched: false,
      error: false,
    }};
    expect(reducer(initialState, {type: 'FETCH_METADATA_PENDING'})).toEqual(finalState);
  })

  it('should handle the FETCH_METADATA_FULFILLED', () => {
    const data = {
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
    };
    const finalState = { ...initialState, metadata: {
      data: data,
      fetching: false,
      fetched: true,
      error: false,
    }};
    const action = {
      type: 'FETCH_METADATA_FULFILLED',
      payload: {
        data: data
      }
    };
    expect(reducer(initialState, action)).toEqual(finalState);
  })

  it('should handle the FETCH_METADATA_REJECTED', () => {
    const finalState = { ...initialState, metadata: {
      data: {},
      fetching: false,
      fetched: false,
      error: true,
    }};
    expect(reducer(initialState, {type: 'FETCH_METADATA_REJECTED'})).toEqual(finalState);
  })


  // Test for Issues.
  it('should handle the FETCH_ISSUES_LIST_PENDING', () => {
    const finalState = { ...initialState, issuesList: {
      data: {},
      fetching: true,
      fetched: false,
      error: false,
    }};
    expect(reducer(initialState, {type: 'FETCH_ISSUES_LIST_PENDING'})).toEqual(finalState);
  })

  it('should handle the FETCH_ISSUES_LIST_FULFILLED', () => {
    const data = { working: true};
    const finalState = { ...initialState, issuesList: {
      data: data,
      fetching: false,
      fetched: true,
      error: false,
    }};
    const action = {
      type: 'FETCH_ISSUES_LIST_FULFILLED',
      payload: {
        data: data
      }
    };
    expect(reducer(initialState, action)).toEqual(finalState);
  })

  it('should handle the FETCH_ISSUES_LIST_REJECTED', () => {
    const finalState = { ...initialState, issuesList: {
      data: {},
      fetching: false,
      fetched: false,
      error: true,
    }};
    expect(reducer(initialState, {type: 'FETCH_ISSUES_LIST_REJECTED'})).toEqual(finalState);
  })

  // Tests for sorting issues.
  it('should sort issues in ascending order', () => {
    const unsortedData = [
      {
        "title": "Dockerize Project",
        "experience_needed": "moderate",
      },
      {
        "title": "Add a fetcher component to periodically fetch issues from GitHub APIs.",
        "experience_needed": "senior",
      },
      {
        "title": "Configure MySQL Database",
        "experience_needed": "easyfix",
      },
      {
        "title": "something",
        "experience_needed": "easyfix",
      },
    ];
    const ascSortedData = [
      {
        "title": "Configure MySQL Database",
        "experience_needed": "easyfix",
      },
      {
        "title": "something",
        "experience_needed": "easyfix",
      },
      {
        "title": "Dockerize Project",
        "experience_needed": "moderate",
      },
      {
        "title": "Add a fetcher component to periodically fetch issues from GitHub APIs.",
        "experience_needed": "senior",
      },
    ]
    const newInitialState = { ...initialState, issuesList: {
      data: unsortedData,
      fetching: false,
      fetched: true,
      error: false,
    }};
    const ascFinalState = { ...initialState, issuesList: {
      data: ascSortedData,
      fetching: false,
      fetched: true,
      error: false,
    }};
    const ascAction = {
      type: 'SORT_ISSUES',
      payload: {
        order: 1, // 1 is for ascending.
        attr: 'experience_needed',
      }
    };
    expect(reducer(newInitialState, ascAction)).toEqual(ascFinalState);
  })

  it('should sort issues in descending order', () => {
    const unsortedData = [
      {
        "title": "Dockerize Project",
        "experience_needed": "moderate",
      },
      {
        "title": "Add a fetcher component to periodically fetch issues from GitHub APIs.",
        "experience_needed": "senior",
      },
      {
        "title": "Configure MySQL Database",
        "experience_needed": "easyfix",
      },
      {
        "title": "something",
        "experience_needed": "easyfix",
      },
    ];
    const descSortedData = [
      {
        "title": "Add a fetcher component to periodically fetch issues from GitHub APIs.",
        "experience_needed": "senior",
      },
      {
        "title": "Dockerize Project",
        "experience_needed": "moderate",
      },
      {
        "title": "Configure MySQL Database",
        "experience_needed": "easyfix",
      },
      {
        "title": "something",
        "experience_needed": "easyfix",
      },
    ];
    const newInitialState = { ...initialState, issuesList: {
      data: unsortedData,
      fetching: false,
      fetched: true,
      error: false,
    }};
    const descFinalState = { ...initialState, issuesList: {
      data: descSortedData,
      fetching: false,
      fetched: true,
      error: false,
    }};
    const descAction = {
      type: 'SORT_ISSUES',
      payload: {
        order: -1, // -1 is for descending.
        attr: 'experience_needed',
      }
    };
    expect(reducer(newInitialState, descAction)).toEqual(descFinalState);
  })
})
