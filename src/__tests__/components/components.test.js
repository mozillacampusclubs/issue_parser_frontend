import React from 'react';
import { shallow, mount } from 'enzyme';
import Container from '../../components/Container/Container';
import IssueCard from '../../components/IssueCard/IssueCard';
import { SideBar } from '../../components/SideBar/SideBar';
import { IssueList } from '../../components/IssueList/IssueList';

describe('container component', () => {
  it('renders without crashing', () => {
    shallow(<Container />);
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

  it('renders without crashing', () => {
    shallow(<IssueCard data={mockData} />);
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
      fetched: true,
      fetching: false,
      error: false
    }
  }
  it('renders without crashing', () => {
    shallow(<SideBar {...props} />);
  })
})

describe('issue list component', () => {
  const props = {
    dispatch: jest.fn(),
    issuesList: {
      data: [],
      fetched: true,
      fetching: false,
      error: false
    }
  }
  it('renders without crashing', () => {
    shallow(<IssueList {...props} />);
  });
})


