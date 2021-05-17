const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed-reakcje',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('Weryfikacja')
        .setDescription('Naciśnij emotkę aby się zweryfkować!')
        .setColor('GREEN')
        .setAuthor('SlimeCraft.pl','https://cdn.discordapp.com/attachments/790363922758238219/843433685717352448/Slime_block.webp')
        .setFooter('SlimeCraft.pl| Rozgrywa dopiero się zaczyna!');
        const msg = await message.channel.send(embed)
        await msg.react('✅')
    
    }
}