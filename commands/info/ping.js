const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🧨 Sprawdzanie pingu...`)
        const embed = new MessageEmbed()
            .setTitle('Ping')
            .setDescription(`Ping WebSocketu wynosi  ${client.ws.ping}MS\nPing edytowania wiadomości ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
            .setColor('GREEN')
            .setAuthor('SlimeCraft.pl','https://cdn.discordapp.com/attachments/790363922758238219/843433685717352448/Slime_block.webp')
            .setFooter('SlimeCraft.pl| Rozgrywa dopiero się zaczyna!')
            await message.channel.send(embed)
            msg.delete()

    }
}
