const fs = require('fs');
const { Client, Intents, Collection} = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log(`seraphine on stage! ^w^`);
    client.user.setPresence({
        status: "idle"
    });
    client.user.setActivity('K/DA 🎵🎵', { type: 'PLAYING' });
});

// prefix = 's/';
// client.on('message', async message => {
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const commandName = args.shift().toLowerCase();

//     if (!client.commands.has(commandName)) return;
//     const command = client.commands.get(commandName)

//         || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

//     if (!command) return;

//     if (command.args && !args.length) {
//         let reply = `Insufficient arguments provided!`;

//         if (command.usage) {
//             reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
//         }

//         return message.channel.send(reply);
//     }
//     try {
//         command.execute(message, args);
//     } catch (error) {
//         console.error(error);
//         message.reply('encountered an error! ╥﹏╥');
//         console.log(command)
//     }
// })

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
    console.log(interaction);

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		return command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'encountered an error! ╥﹏╥', ephemeral: true });
	}
});

client.login(token);
