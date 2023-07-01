const { MessageEmbed, guildSettings, interaction } = require("discord.js");

const color = ('../../color')

module.exports = {
    
    name: 'roleCreate',
    once: false,
    async execute(client, role) { 
        const AuditsLogs = await role.guild.fetchAuditLogs({
            type: 'ROLE_CREATE',
            limit: 30
        })

        const LastestRoleCreate = AuditsLogs.entries.first();


        const embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Role crée')
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Auteur du role : ${LastestRoleCreate.executor}\nDate de création du Rôle : <t:${Math.round(role.createdAt / 1000)}:F>\nNom du Rôle : \`\`\`${role.name}\`\`\``)

        client.channels.cache.get('1124703856694141078').send({embeds: [embed]})



    }
};