const { MessageEmbed, guildSettings, interaction } = require("discord.js");

const color = ('../../color')

module.exports = {
    
    name: 'roleDelete',
    once: false,
    async execute(client, role, channel) { 
        const AuditsLogs = await role.guild.fetchAuditLogs({
            type: 'CHANNEL_DELETE',
            limit: 12
        })

        const LastestRoleDelete = AuditsLogs.entries.first();
        const AuteurRolelDelete = AuditsLogs.entries.find((entry) => entry?.target?.id == role.id);

        const embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Role Supprimée')
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Auteur du role : ${LastestRoleDelete.executor}\nDate de création du Rôle : <t:${Math.round(role.createdAt / 1000)}:F>\nNom du Rôle : \`\`\`${role.name}\`\`\``)

        client.channels.cache.get('1124703856694141078').send({embeds: [embed]})



    }
};