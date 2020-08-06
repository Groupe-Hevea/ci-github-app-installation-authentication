(function () {
  'use strict';

  const core = require('@actions/core');
  const { createAppAuth } = require('@octokit/auth-app');

  const appId = core.getInput('app_id');
  const privateKey = core.getInput('private_key');
  const installationId = core.getInput('app_installation_id');
  const clientId = core.getInput('client_id');
  const clientSecret = core.getInput('client_secret')

  (async () => {
    try {
    const auth = createAppAuth({
      id: appId,
      privateKey,
      installationId,
      clientId,
      clientSecret
    });

    const installationToken = await auth({ type: 'installation '});
    core.setSecret(installationToken);

    core.setOutput('installation_token', installationToken.token);
  } catch (err) {
    core.setFailed(err.message);
  }
  })();

}());
