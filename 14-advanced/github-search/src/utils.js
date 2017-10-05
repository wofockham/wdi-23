import axios from 'axios';

const GithubHelpers = {
  // Returns a Promise.
  getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}`);
  },

  // Returns a Promise.
  getUserRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`);
  }
}

export default GithubHelpers;
