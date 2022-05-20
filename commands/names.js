module.exports = {
    name: 'namen',
    description: 'Shows youre Name!',
    execute(message, args){
        message.channel.send('Server Name: ' + message.guild.name);
        message.channel.send('Dein Name: '  + message.author.username);
        message.channel.send('Deine ID: ' + message.author.id);
        message.channel.send('Bot Name: MyBot3');
    }
};