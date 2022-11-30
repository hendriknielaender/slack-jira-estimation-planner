# Poker Planner for Slack

This project lets you make estimations with planning poker technique (or scrum poker) directly in Slack, without any need of external software.
It can be a useful tool for agile remote teams.

[![Demonstration](./assets/demo.gif)]

## Self-hosting

If you want to host your own app, follow this steps:

### Creating Slack App & Getting Credentials

- Create a new Slack app [from here](https://api.slack.com/apps).
- Interactivity & Shortcuts
  - **Turn on** "Interactivity"
  - Set request url: `http://my.awesome.project.url/slack/interactivity`
- Slash Commands
  - Create a new command `/pp` (or any command you want) and set request url as `http://my.awesome.project.url/slack/pp-slash-command`
  - Make sure that "Escape channels, users, and links sent to your app" option is **turned on**
- OAuth & Permissions
  - Add a new OAuth Redirect URL: `http://my.awesome.project.url/oauth`
  - Required bot permission scopes: `commands`, `chat:write`
  - Required user permission scopes: None
- User ID Translation
  - **Turn off** "Translate Global IDs"
- Tokens
  - Client ID, Secret and Verification token can be found on Basic Information page
- Installation
  - Go to Manage Distribution, click "Add to Slack" and grant permissions

### Running via Docker

- Clone the repo & `cd` into it
- Build docker image: `docker build -t slack-jira-estimation-planner .`
- Start container:
```sh
docker run -d \
  --restart=unless-stopped \
  -p 3000:3000 \
  -e SLACK_CLIENT_ID=xxx \
  -e SLACK_CLIENT_SECRET=xxx \
  -e SLACK_VERIFICATION_TOKEN=xxx \
  -e SLACK_APP_ID=xxx \
  -e DATA_FOLDER=/data \
  -v /host/data/folder/slack-jira-estimation-planner:/data \
  --name slack-jira-estimation-planner \
  slack-jira-estimation-planner
```

> Check out .env file for the complete list of environment variables.

### Running Manually

Node.js requirement `>= 18.12.0`

- Clone this repo
- Install dependencies: `npm i`
- Build: `npm run build`
- Start the app: `npm start`

