module.exports = {
    name: 'leute',
    description: 'Checks how many People are on the Server',
    execute(message, args){
        message.channel.send('Leute Insgesamt: ' + message.guild.memberCount);
        
    }
};