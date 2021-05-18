const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', asycn () =>{
  bot.user.setActivity('bot tutoriel. Bonjours!');
});

bot.login(process.env.BOT_TOKEN);
