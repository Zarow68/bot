const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ban',
    category: 'moderation',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'ban [@member] [reason]',
    examples: ['ban @Zarow raison'],
    description: 'Bannir un utilisateur avec une raison !',
    async run(client, message, args, guildSettings) {
        const target = message.mentions.members.find(m => m.id);
        const reason = args.slice(1).join(' ');

        const UserBanEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Ban')
        .setDescription('<:bc_icon_users:1035666894289653850> Quel membre souhaitez vous **bannir** ?\n<:Discord_Mention:1035666020284764241> Mentionnez un **utilisateur** à ban !')  
        const UserBanReasonEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Ban')
        .setDescription(`<:bc_icon_users:1035666894289653850> Pour quelle raison souhaitez-vous bannir ${target} ?\n<:bc_icon_users:1035666894289653850> Indiquez une **raison** de ban pour ${target} ? `)
        const Bannable = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Ban')
        .setDescription(`<:Discord_Danger:1034472688242130965> ${target} ne peut pas être ban par le bot !`)
        .setTimestamp()
        

        if (!args[0]) return message.reply({ embeds: [UserBanEmbed]});
        if (!args[1]) return message.reply({ embeds: [UserBanReasonEmbed]});

        if (!target.bannable) return message.reply({ embeds: [Bannable]});

        const Ban = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Ban')
        .setDescription(`<:Discord_Danger:1034472688242130965> ${target} a été banni par le bot pour ${reason} !`)
        target.ban({ reason });
        message.reply({ embeds: [Ban]})
        const logs = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Logs :  Ban')
        .setDescription(`<:bc_icon_users:1035666894289653850> **${target}** a été banni par ${message.author} !`)
        .addFields(
            { name: 'Raison', value: `\`${reason}\``},
        )
        .setFooter({ text: `${message.guild.name}`})
        .setTimestamp()

        const logChannel = client.channels.cache.get(guildSettings.logChannel)
        if (target.bannable) return logChannel.send({ embeds: [logs]});
    },
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