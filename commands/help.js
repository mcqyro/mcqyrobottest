module.exports = {
    name: 'help',
    description: 'A Help Command',
    execute(message, args){

        const Discord = require('discord.js');
        const {helper, helper2} = require('./config.json');
        
        const embed = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTitle('Hilfe')
        .setDescription('Hier sind alle Befehle:')
        .setFooter('Website: game123.bplaced.net/discord.html')
        .addField(helper2, helper);
        ;
        return message.channel.send(embed);
    }
};
