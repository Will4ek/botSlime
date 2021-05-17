const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed-ticket',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('Tickety')
        .setDescription('\`\`\!ticket\`\` aby otworzyć konwersacje z administracją')
        .setColor('GREEN')
        .setAuthor('SlimeCraft.pl','https://cdn.discordapp.com/attachments/790363922758238219/843433685717352448/Slime_block.webp')
        .setFooter('SlimeCraft.pl| Rozgrywa dopiero się zaczyna!');
        message.channel.send(embed)
        
    
    }
}