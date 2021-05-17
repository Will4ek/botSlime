const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "changelog",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const { guild } = message
    const idkanaluinfo = "833056028500164658"
    
  const kanal = guild.channels.cache.get(`${idkanaluinfo}`)
    const sayEmbed = new MessageEmbed()
        
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        .setAuthor('SlimeCraft.pl','https://cdn.discordapp.com/attachments/790363922758238219/843433685717352448/Slime_block.webp')
        .setTimestamp()
        .setColor('RED')
        .setFooter('SlimeCraft.pl| Rozgrywa dopiero się zaczyna!');
        message.delete()
        kanal.send(sayEmbed)
  },
};

