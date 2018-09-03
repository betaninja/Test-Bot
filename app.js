const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require ('./settings.json')

client.on('ready', () => {
    console.log('Please help im bored.');
});

var prefix = settings.prefix
client.on('message', message => {
    if (message.author === client.use) return;
    if (message.content.startsWith(prefix + 'ping')) {
        const embed = new Discord.RichEmbed();
        
        embed.setDescription('pong')
        embed.setColor('GREEN')

        message.channel.send(embed);
    } else {
        if (message.content.startsWith(prefix + 'hello')) {
            const embed = new Discord.RichEmbed();
        
            embed.setDescription('goodbye')
            embed.setColor('RED')
    
            message.channel.send(embed);    
        }
    }
});

client.login(settings.token);