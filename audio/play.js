module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    
    
    async execute(client, message, cmd, args, Discord) {   
        if(cmd === 'play') {   
let {channel} = message.member.voice
let play = message.client.manager.players.get(message.guild.id)
  
if (!args.length) {
    let embed = new Discord.MessageEmbed()
      .setColor("#029DB1")
      .setDescription(`invalid argument ;w;`)
    return message.channel.send({embeds:[embed]})
  }

    if(!play) {
    let players = message.client.manager.create({
      guild: message.guild.id,
      voiceChannel: channel.id,
      textChannel: message.channel.id,
      selfDeafen: true,
    })
    
    if (!channel.joinable) {
      let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`i can't join your vc ;w;`)
      return message.channel.send({embeds:[embed]})
    }

    players.connect()

	// stage channel support
	if(message.guild.me.voice?.channel.type==="GUILD_STAGE_VOICE"){

		message.guild.me.voice.setSuppressed(false); //false = become speaker
	}

let player = message.client.manager.players.get(message.guild.id)
 if (channel.id !== player.voiceChannel) {
      let embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`you aren't in the same vc ;w;`)
   return message.channel.send({embeds:[embed]})
 }
 
  const search = args.join(' ')
  let res

let msg = message.channel.send(`searching  for \`${search}\``).then(m => m.delete({ timeout: 5000 }));
			
  try {
    res = await player.search(search, message.author)
    if (res.loadType === 'LOAD_FAILED') {
      if (!player.queue.current) player.destroy()
      throw new Error(res.exception.message)
    }
  } catch (err) {
    let embed = new Discord.MessageEmbed()
      .setColor("#029DB1")
      
      .setDescription(`i couldn't find \`${search}\` ;w;`
       )
    return message.channel.send({embeds:[embed]})
  }

  switch (res.loadType) {
    case 'NO_MATCHES':
      if (!player.queue.current) player.destroy()
      let embed = new Discord.MessageEmbed()
        .setColor("#029DB1")
        
        .setDescription(`i couldn't find \`${search}\` ;w;`)
      return message.channel.send({embeds:[embed]})

    case 'TRACK_LOADED':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
      let embed2 = new Discord.MessageEmbed()
        .setColor("#029DB1")
        .setTitle(`Queued`)
        .setDescription(`[${res.tracks[0].title}](${res.tracks[0].uri}) enqueued ^w^`)
      if (player.queue.length >= 1) //await delay(4900)
      message.channel.send({embeds:[embed2]})
      return

    case 'PLAYLIST_LOADED':
      await player.queue.add(res.tracks)
      if (!player.playing && !player.paused && player.queue.size + 1 === res.tracks.length) player.play();
      let embed3 = new Discord.MessageEmbed()
        .setColor("#029DB1")
        .setTitle(`Queued`)
        .setDescription(`**${res.playlist.name}** \`[${res.tracks.length} songs]\` enqueued ^w^`)
      if (player.queue.length >= res.tracks.length) 
   //  await delay(4900) 
      message.channel.send({embeds:[embed3]})
      return;

    case 'SEARCH_RESULT':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
      let embed4 = new Discord.MessageEmbed()
        .setColor("#029DB1")
        .setTitle(`Queued`)
        .setDescription(  `[${res.tracks[0].title}](${res.tracks[0].uri}) enqueued ^w^`)
      if (player.queue.length >= 1) //await delay(4900)
      message.channel.send({embeds:[embed4]})
      return;
  }
  }
}
    }

}

    
    

