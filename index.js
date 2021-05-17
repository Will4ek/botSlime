const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"]
});
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
const db = require('quick.db')

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    client.user.setActivity(`${prefix}pomoc |SlimeCraft.pl`)
    console.log(`${client.user.username} ✅`)
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '843440793213730836'){
        if(reaction.emoji.name === '✅') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('790959370115874817')
            user.send('Zostałeś zweryfikowany!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '843440793213730836') {
        if(reaction.emoji.name === '✅') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('790959370115874817')
            user.send('Ranga weryfikacji została zabrana')
        }
    }
})
client.on('guildMemberAdd', async(member) => { 
   
    const Channel = member.guild.channels.cache.get('790965199662219284') 
   
    const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Nowy użytkownik')
        .setAuthor('SlimeCraft.pl','https://cdn.discordapp.com/attachments/790363922758238219/843433685717352448/Slime_block.webp')
        .setDescription(`**${member.displayName}** witamy na serwerze ${member.guild.name}, posiadamy obecnie ${member.guild.memberCount} użytkowników!`)
        .setFooter('SlimeCraft.pl| Rozgrywa dopiero się zaczyna!');
    Channel.send(embed)
})
client.on('guildMemberRemove', async(member) => { 
    const Channel = member.guild.channels.cache.get('790965034771021835') 
    const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Użytkownik wyszedł z serwera :(')
        .setAuthor('SlimeCraft.pl','https://cdn.discordapp.com/attachments/790363922758238219/843433685717352448/Slime_block.webp')
        .setDescription(`**${member.displayName}** wyszedł z serwera ${member.guild.name}, posiadamy obecnie ${member.guild.memberCount} użytkowników!`)
        .setFooter('SlimeCraft.pl| Rozgrywa dopiero się zaczyna!');
    Channel.send(embed)
})
const usersMap = new Map();
const LIMIT = 5;
const TIME = 7000;
const DIFF = 3000;

client.on('message', async(message) => {
    if(message.author.bot) return;
    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if(difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {
                let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
                if(!muterole) {
                    try{
                        muterole = await message.guild.roles.create({
                            name : "Muted",
                            permissions: []
                        })
                        message.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(muterole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS : false
                            })
                        })
                    }catch (e) {
                        console.log(e)
                    }
                }
                message.member.roles.add(muterole);
                message.channel.send('You have been muted!');
                setTimeout(() => {
                    message.member.roles.remove(muterole);
                    message.channel.send('You have been unmuted!')
                }, TIME);
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
    }
})

client.login(token)
