export const getGitUsers = userList => ({
  type: 'GET_GIT_USERS',
  userList
});

export const getGitUserRepos = userRepo => ({
  type: 'GET_GIT_USER_REPO',
  userRepo,
});

export const getGitUserRequest = () => {
  return (dispatch) => {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(res => {
      const userList = res.map(item => {
        return {
          userName: item.login,
        }
      })
      dispatch(getGitUsers(userList));
    })
    .catch(err => {
      dispatch(getGitUsers(err));
    });
  }
}

export const getGitUserReposRequest = (userName) => {
  return (dispatch) => {
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json())
    .then(res => {
      const userRepoList = res.map(item => {
        return item.name;
      })
      dispatch(getGitUserRepos(userRepoList));
    })
    .catch(err => {
      dispatch(getGitUserRepos(err));
    });
  }
}