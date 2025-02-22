// client.on('ready', () => {
//     console.log('Bot online');   
//     client.user.setPresence({
//         status: "idle"
//     });
//     client.user.setActivity('s/help', { type: 'PLAYING' });
// });

// const prefix = 's/';

// const fs = require('fs');
// client.commands = new Discord.Collection();
// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
// for(const file of commandFiles) {
//     const command = require(`./commands/${file}`);
//     client.commands.set(command.name, command);
// }

// client.on('message', message => {
//     if(!message.content.startsWith(prefix) || message.author.bot) 
//     return;
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();
//     if(command === 'help') {
//         client.commands.get('help').execute(message, args, Discord)
//     }
// });
