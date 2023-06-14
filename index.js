require('dotenv').config();

const { App } = require('@slack/bolt');

console.log('Getting started with Node Slack SDK');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  //   channel: process.env.SLACK_CHANNEL,
  appToken: process.env.SLACK_APP_TOKEN,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000,
});

// Listens to incoming messages that contain "paybot"
app.message('paybot', async ({ message, say }) => {
  console.log(message);
  // say() sends a message to the channel where the event was triggered
  if (
    message.channel === process.env.SLACK_CHANNEL
  ) {
    await say(
      `we are looking for the best answer to your question.\nPlease wait :spinner:`
    );
  }
});

(async () => {
  // Start your app
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();
