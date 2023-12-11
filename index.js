const { Octokit } = require('@octokit/rest');

const repoOwner = 'me';
const repo = 'me';
const tagName = "test-branch-5";

const octokit = new Octokit({
  auth: decryptedToken,
  userAgent: 'Create Branch',
});

octokit.git.createRef({
  owner: repoOwner,
  repo,
  ref: `refs/tags/${tagName}`,
  sha: "sample-sha-5",
});

// console.log(tag);
