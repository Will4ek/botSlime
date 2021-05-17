const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'pomoc',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
       
        .setTitle(`Pomoc`)
        .setAuthor('SlimeCraft.pl','https://cdn.discordapp.com/attachments/790363922758238219/843433685717352448/Slime_block.webp')
        .setDescription(`Moje komendy:
        \`\`\!ip\`\`-pokazuje ip serwera
        \`\`\!ban\`\`-banuje użytkownika
        \`\`\!kick\`\`-wyrzuca użytkownika
        \`\`\!say\`\`-wysyła wiadomość przez bota
        \`\`\!ping\`\`-pokazuje ping
        \`\`\!restart\`\`-informacja o restarcie`)
        
        .setColor('GREEN')
        .setFooter('SlimeCraft.pl| Rozgrywa dopiero się zaczyna!')
        message.channel.send(embed)
    }
}






