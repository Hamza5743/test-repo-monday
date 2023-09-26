const { Octokit } = require('@octokit/rest');

const repoOwner = 'me';
const repo = 'me';
const tagName = "test-branch-2";

const octokit = new Octokit({
  auth: decryptedToken,
  userAgent: 'Create Branch',
});

octokit.git.createRef({
  owner: repoOwner,
  repo,
  ref: `refs/tags/${tagName}`,
  sha: "sample-sha-1",
});

// console.log(tag);