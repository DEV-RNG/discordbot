const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./commands.js');

bot.on('ready', async () =>{
  console.log('Le bot est lancer');
  bot.user.setActivity('FrapWorld!');
});

bot.on('message', async (msg) => {
    if(msg.content.startsWith(config.prefix) && !msg.author.bot){
        cmdArray = msg.content.substring(config.prefix.length).split(" ")
        cmd = cmdArray[0]
        args = cmdArray.slice(1)

        let command = commands.getCommand(cmd);
        if(command != null) command.run(bot, msg, args);
     }
});

bot.login(process.env.BOT_TOKEN);
