require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN;

const PREFIX = "!"

client.on('ready', () =>{
    console.log('Bot is on');
});

client.on('message', message=>{
    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch (args[0]){
        case PREFIX+'ping':
            message.channel.send('pong');
            break;
        case PREFIX+'website':
            message.channel.send('github.com/kallelrm');
            break;
        case PREFIX+'info':
            if(args[1]==="version"){
                message.channel.send("0.0.1");
            }else{
                message.channel.send("Invalid Args");
            }
        break;
        case PREFIX+'clear':
            if(!args[1]) return message.reply('Please define a second arg')
            message.channel.bulkDelete(args[1]);
            break;
        case PREFIX+"embed":
            const embed = new Discord.RichEmbed()
                .setTitle('User information')
                .addField('User Name', message.author.username)
                .addField('Version', '0.0.1')
                .addField('Current Server', message.guild.name)
                .setColor(0xff72fb)
                .setThumbnail(message.author.avatarURL)
                message.channel.send(embed);
        break;
    }

});

client.login(token);