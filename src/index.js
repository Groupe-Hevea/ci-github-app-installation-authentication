const core = require('@actions/core')
const { createAppAuth } = require('@octokit/auth-app')

const appId = parseInt(core.getInput('app_id'))
const privateKey = core.getInput('app_private_key')
const installationId = parseInt(core.getInput('app_installation_id'))
const clientId = core.getInput('app_client_id')
const clientSecret = core.getInput('app_client_secret')

;(async () => {
  try {
  const auth = createAppAuth({
    id: appId,
    privateKey,
    installationId,
    clientId,
    clientSecret
  })

  const installationToken = await auth({ type: 'installation' })
  core.setSecret(installationToken)

  core.setOutput('installation_token', installationToken.token)
} catch (err) {
  core.setFailed(err.message)
}
})()
