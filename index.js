const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjA1MTU0OTIxNjc5MTU5MzQ3.XT4Z0A.xHT2KFYJjbDLoH2W7ObEeZeLEuw';

client.on('ready', () =>{
    console.log('Bot is on');
});

client.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('e ae corno');
    }
});

client.on('message', msg=>{
    if(msg.content === "88"){
        msg.reply('O único erro de Hitler foi não matar todos os judeus');
    }
});

client.on('message', msg=>{
    if(msg.content === "negro"){
        msg.reply('eu não sou racista, racismo da cadeia e cadeia é lugar de preto');
    }
})

client.on('message', msg=>{
    if(msg.content === "dilema"){
        msg.reply("tu daria o cu pro teu pai pra não comer a tua mãe?");
    }
})

client.login(token);