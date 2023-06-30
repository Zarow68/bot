const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ban',
    category: 'moderation',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'ban [@member] [reason]',
    examples: ['ban @Zarow raison'],
    description: 'Bannir un utilisateur avec une raison !',
    
    options: [
        {
            name: 'member',
            description: 'L\'utilisateur à ban',
            type: 'USER',
            required: true,
            
            
        },
        {
            name: 'reason',
            description: 'La raison du ban',
            type: 'STRING',
            required: true,
        }
        
    ],
    async runInteraction(client, interaction, guildSettings) {
        const target = interaction.options.getMember('member');
        const reason = interaction.options.getString('reason');

        const Bannable = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Ban')
        .setDescription(`<:Discord_Danger:1034472688242130965> ${target} ne peut pas être banni par le bot !`)
        .setTimestamp()
        const Ban = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Ban')
        .setDescription(`<:Discord_Danger:1034472688242130965> ${target} a été banni par le bot pour ${reason} !`)
        .setTimestamp()
        const Logs = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Logs :  Ban')
        .setDescription(`<:bc_icon_users:1035666894289653850> **${target}** a été banni par ${interaction.user} !`)
        .addFields(
            { name: 'Raison', value: `\`${reason}\``},
        )
        .setFooter({ text: `${interaction.guild.name}`})
        .setTimestamp()



        if (!target.bannable) return interaction.reply({ embeds: [Bannable], ephemeral: true});

        target.ban({ reason });
       interaction.reply({ embeds: [Ban], ephemeral: true })
       const logChannel = client.channels.cache.get(guildSettings.logChannel)
       if (target.kickable) return logChannel.send({ embeds: [Logs], ephemeral: true});
    }
};