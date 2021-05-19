const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    let hEmbed = new Discord.MessageEmbed()
    .setColor('0047FF')
    .setTitle('RealLife Bot')
    .addField('Direct Connect (F8)',
    '- connect 51.161.116.127:30112')
    msg.channel.send(hEmbed);
}

module.exports.help = {
    name: 'ip'
}
