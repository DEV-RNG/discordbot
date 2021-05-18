const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');

bot.on('ready', async () =>{
  console.log('Le bot est lancer');
  bot.user.setActivity('bot tutoriel. Bonjours!');
});

bot.on('message', async (msg) => {
    if(msg.content == 'bonjour'){
        msg.channel.send('Salut!')
    }
});

bot.login(process.env.BOT_TOKEN);
