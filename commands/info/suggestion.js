const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "propozycja",
  usage: "propozycja <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Podaj propozycje")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "☆《propozycje》" || x.name === "☆《propozycje》"))
    
    
    if(!channel) {
      return message.channel.send("nie ma tu kanału propozycje")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("Propozycja: " + message.author.tag, message.author.avatarURL())
    
    .setColor('GREEN')
    .setDescription(args.join(" "))
    .setTimestamp()
    .setAuthor('SlimeCraft.pl','https://cdn.discordapp.com/attachments/790363922758238219/843433685717352448/Slime_block.webp')
    .setFooter('SlimeCraft.pl| Rozgrywa dopiero się zaczyna!');
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    message.delete()
    message.channel.send("Wysłano twoją propozycje na odpowiedni kanał ")
    
  }
}