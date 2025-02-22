module.exports = {
    name: 'img',
    aliases: ['image, achievement, spotify'],
    execute(client, message, cmd, args, Discord) {
        if (cmd === 'achievement') {
            const newEmbed = new Discord.MessageEmbed()
                .setColor("#029DB1")
                .setDescription('`invalid argument ;w;`');
            message.channel.send({ embeds: [newEmbed] });

            // const text = args.slice(0).join(" ");

            // const finalLink = `https://api.leoapi.xyz/image/achievement?title=Achievement&text=${text}`;
            // const attach = new MessageAttachment(`${finalLink}`);

            // message.channel.send({ files: [attach]}); }
//https://api.leoapi.xyz/image/welcomecard?image=https://cdn.discordapp.com/avatars/538668078012039168/f14425b3bfcb7edb22849797b57d4cfb.png?size=256&background=https://images.unsplash.com/photo-1539678955859-9f368343753f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=965&q=80&text1=Welcome%20Tagliatelle&text2=You%20Are%20Awesome&text3=hai%20I%20love%20you
//https://api.leoapi.xyz/image/spotify?name=https://leoapi.xyz&artist=Tagliatelle&title=Leo%20API%20Album&image=https://cdn.discordapp.com/avatars/538668078012039168/f14425b3bfcb7edb22849797b57d4cfb.png?size=256
        }
    }
}