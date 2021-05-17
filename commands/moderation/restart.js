const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "restart",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const { guild } = message
    const idkanaluinfo = "834124256278872104"
    
  const kanal = guild.channels.cache.get(`${idkanaluinfo}`)
    const sayEmbed = new MessageEmbed()
        
    .setAuthor('SlimeCraft.pl','https://cdn.discordapp.com/attachments/790363922758238219/843433685717352448/Slime_block.webp')
    .setTitle('Trwa restart')
    .setDescription(args.join(" "))
    .setColor('RED')
    .setFooter('SlimeCraft.pl| Rozgrywa dopiero się zaczyna!');
        message.delete()
        kanal.send(sayEmbed)
  },
};