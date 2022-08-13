# Discord Commands

this is a discord.js plugin to show the params of making a command of prefix and slash commands. This make user easy to make commands.

Current Feature:
```
Slash Command Params 
Prefix Command Params
```
Coming Soon:
```
Slash Command Handler
Prefix Command Handler
```
Requirements:
> Latest Version of DiscordJS

Preview Codes:
```js
const { SlashCommand } = require('discord-commands-params');

module.exports = new SlashCommand({
  name: 'ping',
  description: 'Ping Pong!',
  permissions: {
    member: ['SendMessages'],
    bot: ['SendMessages']
  },
  run: ({ client, interaction, options }) => {
    interaction.reply('Pong!')
  },
});
```
