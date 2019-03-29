const initialState = {
  gitUsersList: [],
  selectedUserRepos: [],
};

const GitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GIT_USERS':
      return {...state, gitUsersList: action.userList};
    case 'GET_GIT_USER_REPO':
      return {...state, selectedUserRepos: action.userRepo};
      break;
    default:
      return state
  }
}

export default GitReducer;