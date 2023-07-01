const { MessageEmbed, guildSettings, interaction } = require("discord.js");

const color = ('../../color')

module.exports = {
    
    name: 'channelCreate',
    once: false,
    async execute(client, channel) { 
        const AuditsLogs = await channel.guild.fetchAuditLogs({
            type: 'CHANNEL_CREATE',
            limit: 10
        })

        const LastestChannelCreate = AuditsLogs.entries.first();

        const embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Salon crée')
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Auteur du salon : ${LastestChannelCreate.executor}\nDate de création du salon : <t:${Math.round(channel.createdAt / 1000)}:F>\nNom du salon : \`\`\`${channel.name}\`\`\``)

        client.channels.cache.get('1124703856694141078').send({embeds: [embed]})


    }
};