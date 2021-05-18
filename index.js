const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', async () =>{
  console.log('Le bot est lancer');
  bot.user.setActivity('bot tutoriel. Bonjours!');
});

bot.login(process.env.BOT_TOKEN);
