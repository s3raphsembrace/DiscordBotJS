const Discord = require("discord.js")
    module.exports = {
      name: "ping",
      description: "Pong!",
      cooldown: 5,
      aliases: [ "latency", "uptime" ],
}
    module.exports.execute = async (bot, message, args) => {
                message.channel.send("Pinging") .then(m => {
                    const ping = m.createdTimestamp - createdTimestamp
                    const choices = ["1", "2", "3"]
                    const response = choices[Math.floor(math.Random() * choices.length)]

                    m.edit(`${response}: Bot Latency: ${ping}, API Latency: ${Math.round(bot.ping)}`)
                });
            }   
