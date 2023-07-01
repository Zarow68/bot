const { MessageEmbed, guildSettings, interaction } = require("discord.js");

const color = ('../../color')

module.exports = {
    
    name: 'roleUpdate',
    once: false,
    async execute(client, oldRole, newRole) { 
        const AuditsLogs = await newRole.guild.fetchAuditLogs({
            type: 'ROLE_UPDATE',
            limit: 31
        })

        const LastestRoleCreate = AuditsLogs.entries.first();


        const embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Role modifiée')
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Auteur du role : ${LastestRoleCreate.executor}\nDate de création du Rôle : <t:${Math.round(oldRole.createdAt / 1000)}:F>\nAncien nom du Rôle :\`\`\`${oldRole.name}\`\`\`\nNouveau nom du Rôle : \`\`\`${newRole.name}\`\`\``)

        client.channels.cache.get('1124703856694141078').send({embeds: [embed]})



    }
};