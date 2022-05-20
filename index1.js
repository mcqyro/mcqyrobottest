const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, bot_age, bot_token, words_array, bot_info, starter, helper, helper2} = require('./config.json');






client.once('ready', () => {
    console.log('Bot is Starting...');
    console.log('Bot Token: ' + bot_token);
    console.log('Bot Age:', bot_age)
    console.log('Version:', bot_info.version)
    console.log('Bot Name:', bot_info.name)
    console.log('Startup:', words_array[0])
    console.log('Startup:', words_array[1])
    console.log('Startup:', words_array[2])
    console.log('Bot Status:', prefix)
});

client.login(bot_token);



client.on('message', message => {
    

    
    if(message.content === 'Hi'){
        message.channel.send('Hallo ;-) !');
    
    }else if(message.content === '!info'){
        const embed = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTitle('Hilfe')
        .setDescription('Hier sind alle Befehle:')
        .setFooter('Gemacht von: @Unumgehbar')
        .addField(helper2, helper);
        ;
        return message.channel.send(embed);
    
    }else if(message.content === '!servername'){
        message.channel.send('Server Name: ' + message.guild.name);
    
    }else if(message.content === '!meinname'){
        message.channel.send('Dein Name: '  + message.author.username);
        message.channel.send('Deine ID: ' + message.author.id);
    
    }else if(message.content === '!online'){
        message.channel.send('Online Leute: ' + message.guild.memberCount);
    
    }else if(message.content === '!owner'){
        message.channel.send('Server Owner: ' + message.guild.owner);
    
    }else if(message.content === '!help'){
        const embed = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTitle('Hilfe')
        .setDescription('Hier sind alle Befehle:')
        .setFooter('Gemacht von: @Unumgehbar')
        .addField(helper2, helper);
        ;
        return message.channel.send(embed);
    
    }else if(message.content === '!hilfe'){
        const embed = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTitle('Hilfe')
        .setDescription('Hier sind alle Befehle:')
        .setFooter('Gemacht von: @Unumgehbar')
        .addField(helper2, helper);
        ;
        return message.channel.send(embed);
    
    }else if(message.content === '!serverinfo'){
       message.channel.send('Server Erstellt am: ' + message.guild.createdAt);     
    
    }else if(message.content === '!hilfe'){
                const embed = new Discord.MessageEmbed()
                .setColor('ff0000')
                .setTitle('Hilfe')
                .setDescription('Hier sind alle Befehle:')
                .setFooter('Gemacht von: @Unumgehbar')
                .addField(helper2, helper);
                ;
            return message.channel.send(embed);
        
        }else if(message.content === '!clearchat'){
            amount = 100;
            message.channel.bulkDelete(amount);
        
        }else if(message.content === '!botinfo'){
            message.channel.send('Bot Alter: ' + bot_age);
            message.channel.send('Version: ' + bot_info.version);
            message.channel.send('Bot Name: ' + bot_info.name);
        
        }else if(message.content === '!offline'){
            message.channel.send('Der Bot wird in 5 Sekunden ausgeschaltet!');
            setTimeout(function(){ 
                client.destroy(bot_token);
            }, 5000);
            
            
        } 
            
    
    

    
});