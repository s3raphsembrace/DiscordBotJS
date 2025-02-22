module.exports = {
    name: 'help',
    aliases: ['commands'],
    execute(client, message, cmd, args, Discord) {
    if(cmd === 'help') {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#029DB1')
            .setTitle('Command List')
            .addFields(
                {name: 'Economy', value: 'bal, balance, money, '},
                {name: 'Fun', value: 'achievement, spotify'}
            )
            .setImage('https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8215e2fc07855bb3/5f7fa67adac9270efe3616e7/Seraphine_Icon_T3.jpg');
            message.channel.send({ embeds : [newEmbed]});
        }
    }
}