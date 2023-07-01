const { MessageEmbed,interaction } = require("discord.js");

const color = require('../../color')

module.exports = {
    
    name: 'channelUpdate',
    once: false,
    async execute(client, oldChannel, newChannel, channel) { 
        const AuditsLogs = await newChannel.guild.fetchAuditLogs({
            type: 'CHANNEL_UPDATE',
            limit: 11
        })

        const LastestChannelUpdate = AuditsLogs.entries.first();

        const embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Salon modifiée')
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Auteur du salon : ${LastestChannelUpdate.executor}\nDate de création du salon : <t:${Math.round(oldChannel.createdAt / 1000)}:F>\nAncien nom du salon : \`\`\`${oldChannel.name}\`\`\`\nNouveau nom du salon\`\`\`${newChannel.name}\`\`\``)

        client.channels.cache.get('1124703856694141078').send({embeds: [embed]})


    }
};