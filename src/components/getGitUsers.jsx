import React from 'react';
import { connect } from 'react-redux';
import { getGitUserRequest, getGitUserReposRequest } from '../actions';

class GetGitUsers extends React.Component {
  constructor(props) {
    super(props);
    this.props.getGitUserRequest();
  }

  render() {
    return (
      <ul>
        {
          this.props.userList && this.props.userList.map((item, index) => (
            <li key={index}><a href="javascript:void(0)" onClick={() => this.props.getGitUserReposRequest(item.userName)}>{item.userName}</a></li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  userList: state.GitReducer.gitUsersList,
});

const mapDispatchToProps = (dispatch) => ({
  getGitUserRequest: () => dispatch(getGitUserRequest()),
  getGitUserReposRequest: (userName) => dispatch(getGitUserReposRequest(userName))
});

export default connect(mapStateToProps, mapDispatchToProps)(GetGitUsers);
