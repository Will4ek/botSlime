const db = require('quick.db')

const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'antispam',
   
    run: async(client, message, args) => {
        if(args[0] === 'on') {
            await db.set(`antispam-${message.guild.id}`, true)
            message.channel.send('Włączono funkcję antyspamową')
        } else if(args[0] === 'off') {
            await db.delete(`antispam-${message.guild.id}`)
            message.channel.send('Wyłączono funkcję antyspamową')
        }
    
    }
}