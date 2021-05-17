const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clear',
    aliases : ['czyszczenie czatu'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
           if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Nie posiadasz permisji')
        if(!args[0]) return message.channel.send('Podaj liczbę do czyszczenie (1-99')
            if(isNaN(args[0])) return message.channel.send('Można użyć tylko liczb')
            if(parseInt(args[0]) > 99) return message.channel.send('Największa liczba do usunięcia to 99')
            await message.channel.bulkDelete(parseInt(args[0])+1)
            .catch(err => console.log(err))
            (await message.channel.send(`usuniętą ${args[0]} wiadomości`)).attachments(m => m.delete({ timeout : 5000 }))
        }
    
}