# Github App access token provider action

This action generates a github app access token according to your github app id, private key & installation id. May be useful if you need to query the github API from your workflows without using a service account !

The action will wrap all the token generation stuff for your github app and the access token will be registered as a secret so it won't be visible in your logs.

> This action just wraps the token generation process using octokit/auth-app, which already provides the methods to do so.

## Inputs

### `app_id`

Your github app ID. you can retrieve it from your app settings page.

### `app_private_key`

A registered app private key. 

> We strongly encourage you to set it as a secret instead of copy/paste it in your workflows !

### `app_installation_id`

The app installation id for your organization.

### `app_client_id`

The application client id.

### `app_client_secret`

The application client secret.

## Outputs

### `github_app_access_token`

A github app installation access token. You can use it to query the github API according to the permissions that are allowed on the Github app.

## Usage

> We strongly recommend you to fork this repo and use the action that you forked instead of using this one for security reasons as you're dealing with private keys that must be manipulated with caution.

```yml
- uses: allopneus/github-app-access-token@v1
  id: get-access-token
  with:
    app_id: 12345
    app_private_key: ${{ secrets.APP_PRIVATE_KEY_THAT_I_WILL_NEVER_EVER_PUBLICLY_EXPOSE }}
    app_installation_id: ${{ secrets.APP_INSTALLATION_ID }}
    app_client_id: ${{ secrets.APP_CLIENT_ID }}
    app_client_secret: ${{ secrets.APP_CLIENT_SECRET }}
# Nice try, but not visible !
- runs: echo ${{ steps.get-access-token.outputs.installation_token }}
```
