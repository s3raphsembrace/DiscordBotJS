module.exports = (Discord, client, message) => {
    const prefix = 's/';
    if(!message.content.startsWith(prefix) || message.author.bot) 
    return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);

    if(command) {
        command.execute(client, message, cmd, args, Discord);
    }
}