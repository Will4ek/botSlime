const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kick',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('Bot nie posiada permisji')
        const Member = message.mentions.members.first()
       if(!Member) return message.channel.send('Oznacz osobę którą chcesz wyrzucić')
        await Member.kick({ reason : args.slice(1).join(" ")})
        message.channel.send(`${Member.user.username.tag} został wyrzucony z serwera!`)
    }
}