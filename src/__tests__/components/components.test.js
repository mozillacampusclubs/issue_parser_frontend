import React from 'react';
import { shallow, mount } from 'enzyme';
import { Container } from '../../components/Container/Container';
import { IssueCard } from '../../components/IssueCard/IssueCard';
import { SideBar } from '../../components/SideBar/SideBar';
import { IssueList } from '../../components/IssueList/IssueList';
import ReactShallowRenderer from 'react-test-renderer/shallow'; // For snapshot testing

describe('container component', () => {
  it('renders correctly', () => {
    const renderer = new ReactShallowRenderer();
    expect(renderer.render(<Container />)).toMatchSnapshot();
  });
})


describe('issue card component', () => {
  const mockData = {
    "issue_id": 233564738,
    "title": "Dockerize Project",
    "experience_needed": "easyfix",
    "expected_time": "3 hours",
    "language": "python",
    "tech_stack": "django",
    "created_at": "2017-06-05T11:47:01Z",
    "updated_at": "2017-06-06T10:35:57Z",
    "issue_number": 7,
    "issue_labels": [
      {
        "label_id": 613678729,
        "label_name": "enhancement",
        "label_color": "84b6eb",
        "label_url": "https://api.github.com/repos/mozillacampusclubs/issue_parser_backend/labels/enhancement"
      }
    ],
    "issue_url": "https://github.com/mozillacampusclubs/issue_parser_backend/issues/7",
    "issue_body": "",
  }

  it('renders correctly', () => {
    const renderer = new ReactShallowRenderer();
    expect(renderer.render(<IssueCard data={mockData} />)).toMatchSnapshot();
  })
})

describe('side bar component', () => {
  const props = {
    dispatch: jest.fn(),
    metadata: {
      data: {
        "experience_needed": [
          "senior",
          "moderate",
          "easyfix"
        ],
        "language": [
          "python",
          "javascript",
        ],
        "tech_stack": [
          "react.js",
          "django, celery",
          "jest",
          "django"
        ]
      },
      fetched: false,
      fetching: false,
      error: false
    }
  }
  it('renders correctly when data is fetching', () => {
    const metadata = {...props.metadata, fetching: true};
    const newProps = {...props, metadata}
    const renderer = new ReactShallowRenderer();
    expect(renderer.render(<SideBar {...newProps} />)).toMatchSnapshot();
  });

  it('renders correctly when data is fetched', () => {
    const metadata = {...props.metadata, fetched: true};
    const newProps = {...props, metadata}
    const renderer = new ReactShallowRenderer();
    expect(renderer.render(<SideBar {...newProps} />)).toMatchSnapshot();
  });

  it('renders correctly when server error', () => {
    const metadata = {...props.metadata, error: true};
    const newProps = {...props, metadata}
    const renderer = new ReactShallowRenderer();
    expect(renderer.render(<SideBar {...newProps} />)).toMatchSnapshot();
  });
})

describe('issue list component', () => {
  const props = {
    dispatch: jest.fn(),
    issuesList: {
      data: [],
      fetched: false,
      fetching: false,
      error: false
    }
  }

  it('renders correctly when data is fetching', () => {
    const issuesList = {...props.issuesList, fetching: true};
    const newProps = {...props, issuesList}
    const renderer = new ReactShallowRenderer();
    expect(renderer.render(<IssueList {...newProps} />)).toMatchSnapshot();
  });

  it('renders correctly when data is fetched', () => {
    const issuesList = {...props.issuesList, fetched: true};
    const newProps = {...props, issuesList}
    const renderer = new ReactShallowRenderer();
    expect(renderer.render(<IssueList {...newProps} />)).toMatchSnapshot();
  });

  it('renders correctly when server error', () => {
    const issuesList = {...props.issuesList, error: true};
    const newProps = {...props, issuesList}
    const renderer = new ReactShallowRenderer();
    expect(renderer.render(<IssueList {...newProps} />)).toMatchSnapshot();
  });
})


