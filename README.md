# Poker Planner for Slack

This project lets you make estimations with planning poker technique (or scrum poker) directly in Slack, without any need of external software.
It can be a useful tool for agile remote teams.

[![Demonstration](./assets/demo.gif)

## Usage

After successful installation, `/pp` slash command will be available in your team workspace. It works in:
- Public channels
- Private channels
- Group direct messages

**Poker Planner app must be added to channel/conversation before usage.** You can add it from channel/conversation details menu, or just simply mention the app, like `@poker_planner`.

### `/pp some session title`
This command starts a poker planning session with specified title, or simply anything you typed after `/pp`.

**WARNING:** Topic text cannot start with **"config"** and **"help"** (case-sensitive). They have another functionalities which is described below.

### `/pp config`
This command is deprecated and will be removed in future releases.

### `/pp help`
This commands prints a cheatsheet of usage.
Required Slack Permissions
commands - Add actions and/or slash commands that people can use.

We will add `/pp` slash command
chat:write - Send messages as Poker Planner
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

### List of environment variables. 
Example .env
```
# Http server port
PORT=3000

# If you're serving not from root, enter the path
BASE_PATH=/

# Slack app credentials
SLACK_CLIENT_ID=
SLACK_CLIENT_SECRET=
SLACK_VERIFICATION_TOKEN=
SLACK_SCOPE=chat:write,commands
SLACK_APP_ID=

# Link placeholders for slack user response
APP_INSTALL_LINK=
ISSUES_LINK=https://github.com/hendriknielaender/slack-jira-estimation-planner/issues

# Data folder path for `db.sqlite` file
DATA_FOLDER=./

# How long do sessions live after creation? (in milliseconds)
MAX_VOTING_DURATION=604800000
```

### Running Manually

Node.js requirement `>= 18.12.0`

- Clone this repo
- Install dependencies: `npm i`
- Build: `npm run build`
- Start the app: `npm start`

