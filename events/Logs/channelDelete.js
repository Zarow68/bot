const { MessageEmbed, MessageAttachment, GuildMember, guildSettings } = require("discord.js");
const color = ('../../color')

module.exports = {
    name: 'channelDelete',
    once: false,
    async execute(client, channel) { 
        const AuditsLogs = await channel.guild.fetchAuditLogs({
            type: 'CHANNEL_DELETE',
            limit: 12
        })

        const LastestChannelCreate = AuditsLogs.entries.first();
        const LastestChannelDelete = AuditsLogs.entries.find((entry) => entry?.target?.id == channel.id);
        
        const embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Salon supprimée')
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Auteur du salon : ${LastestChannelCreate.executor}\nAuteur de la suppresion : ${LastestChannelDelete.executor}\nDate de suppresion du salon : <t:${Math.floor(channel.createdAt / 1000)}:F>\nNom du salon : \`\`\`${channel.name}\`\`\``)

        client.channels.cache.get('1124703856694141078').send({embeds: [embed]})



    }
};