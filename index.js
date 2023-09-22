const { Octokit } = require('@octokit/rest');

const repoOwner = 'educative';
const repo = 'educative';
const tagName = "v230921";

const octokit = new Octokit({
  auth: decryptedToken,
  userAgent: 'Create-Release-Branch',
});

octokit.git.createRef({
  owner: repoOwner,
  repo,
  ref: `refs/tags/${tagName}`,
  sha: "",
});

// console.log(tag);