module.exports = {
    name: 'botinfo',
    description: 'Prints the Info the Bot',
    execute(message, args){
        const {bot_age, bot_name, bot_version} = require('./config.json');
        message.channel.send('Bot Name: ' + bot_name);
        message.channel.send('Bot Alter: ' + bot_age);
        message.channel.send('Bot Version: ' + bot_version);
    }
}