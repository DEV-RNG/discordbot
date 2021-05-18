const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');

bot.on('ready', async () =>{
  console.log('Le bot est lancer');
  bot.user.setActivity('bot tutoriel. Bonjours!');
});

bot.on('message', async (msg) => {
    if(msg.content.startsWith(config.prefix) && !msg.author.bot){
        cmdArray = msg.content.substring(1).split(" ")
        cmd = cmdArray[0]
        arg = cmdArray.slice(1)

        if(cmd == 'ping'){
            msg.channel.send("pong! :joy:")
        }
    }
});

bot.login(process.env.BOT_TOKEN);
