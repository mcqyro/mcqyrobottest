module.exports = {
    name: 'cc',
    description: 'Clears a Chat',
    execute(message, args){
        amount = 100;
            message.channel.bulkDelete(amount);
    }
};