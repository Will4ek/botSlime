const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
name: "say",

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('Bot nie posiada permisji')
    const sayEmbed = new MessageEmbed()
    
    .setAuthor('SlimeCraft.pl','https://cdn.discordapp.com/attachments/790363922758238219/843433685717352448/Slime_block.webp')
    .setDescription(args.join(" "))
    .setColor('GREEN')
    .setFooter('SlimeCraft.pl| Rozgrywa dopiero się zaczyna!');
        message.delete()
    message.channel.send(sayEmbed)
  },
};