const Discord = require('discord.js');
const client = new Discord.Client({ intents:["GUILDS","GUILD_MESSAGES","GUILD_VOICE_STATES"]});
const mongoose = require("mongoose");
client.login('ODgzNTQ0MDU3MzI5MDk4NzYz.YTLehg.6OVemveH4fz3x6G6v0U7uwwuYYE');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler','event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

// mongoose.connect(process.env.MONGODB_SRV, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     userFindAndModify: false
// })
// .then(() => {
//     console.log('connected to database');
// })
// .catch((err) => {
//     console.log(err);
// })