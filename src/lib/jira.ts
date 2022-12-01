import JiraApi from 'jira-client';

var jira = new JiraApi({
  protocol: 'https',
  host: process.env.JIRA_HOST,
  username: process.env.JIRA_CLIENT_USER,
  password: process.env.JIRA_CLIENT_PWD,
  apiVersion: '2',
  strictSSL: true
});

export async function isValidIssue(issueNumber: string) {
    try {
        let issue;
        issue = await jira.findIssue(issueNumber);
        return Boolean(issue) ?? false
    } catch (err) {
        console.error(err);
        return false;
    }
}