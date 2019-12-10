const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'token'

bot.on('message', function(message){
    if(message.content == '!Google')
    {
        message.reply("Hi, I'm your Google Assistant. How can I help?")
    }
});

bot.on('message', function(message){
    if(message.content == 'XD')
    {
        message.reply("What's so funny?")
    }
})

bot.login('NDg2MTY5MTM5NTUyMTkwNDc1.Dm7teg.pAcWGl6AjBitYpZNMpUqZI9Exsk');