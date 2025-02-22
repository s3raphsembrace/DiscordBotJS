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
                    const choices = ["H-How was it?", "P-Please be good...", "I-I hope it isn't bad!"]
                    const response = choices[Math.floor(math.Random() * choices.length)]

                    m.edit(`${response}: Bot Latency: ${ping}, API Latency: ${Math.round(bot.ping)}`)
                });
            }   