const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');

bot.on('ready', async () =>{
  console.log('Le bot est lancer');
  bot.user.setActivity('bot tutoriel. Bonjours!');
});

bot.on('message', async (msg) => {
    if(msg.content.startsWith(config.prefix) && !msg.author.bot){
        cmdArray = msg.content.substring(config.prefix.length).split(" ");
        cmd = cmdArray[0];
        arg = cmdArray.slice(1);

        if(cmd == 'ip'){
            msg.channel.send("connect 51.161.116.127:30112")
        }
        if(cmd == 'message'){
            if(args.length < 1) return msg.channel.send("Pas assez d'arguments.")
            var message = ""
            for(let i = 0; i < args.length; i++){
                message += args[i] + " "
             }
             msg.channel.send("message: " + message)
        }
    }
});

bot.login(process.env.BOT_TOKEN);
