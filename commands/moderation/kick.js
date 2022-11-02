const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kick',
    category: 'moderation',
    permissions: ['KICK_MEMBERS'],
    ownerOnly: false,
    usage: 'kick [@member] [reason]',
    examples: ['kick @Zarow raison'],
    description: 'Expulse un utilisateur avec une raison !',
    async run(client, message, args, member, guildSettings) {
    const target = message.mentions.members.find(m => m.id);
    const reason = args.slice(1).join(' '); 

        const UserKickEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Kick')
        .setDescription('<:bc_icon_users:1035666894289653850> Quel membre souhaitez vous **expulser** ?\n<:Discord_Mention:1035666020284764241> Mentionnez un **utilisateur** à kick !')  
        const UserKickReasonEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Kick')
        .setDescription(`<:bc_icon_users:1035666894289653850> Pour quelle raison souhaitez-vous exclure ${target} ?\n<:bc_icon_users:1035666894289653850> Indiquez une **raison** de kick pour ${target} ? `)
        const KICKABLE = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Kick')
        .setDescription(`<:Discord_Danger:1034472688242130965> ${target} ne peut pas être expulsé par le bot !`)
        .setTimestamp()
        
   

        if (!args[0]) return message.reply({ embeds: [UserKickEmbed]});
        if (!args[1]) return message.reply({ embeds: [UserKickReasonEmbed]});

        

        if (!target.kickable) return message.reply({ embeds: [KICKABLE]});
        const KICK = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Kick')
        .setDescription(`<:Discord_Danger:1034472688242130965> ${target} a été expulsé par le bot pour ${reason} !`)
        target.kick(reason);
        message.reply({ embeds: [KICK]})
        const logs = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Logs :  Kick')
        .setDescription(`<:bc_icon_users:1035666894289653850> **${target}** a été expulsé par ${message.author} !`)
        .addFields(
            { name: 'Raison', value: `\`${reason}\``},
        )
        .setFooter({ text: `${message.guild.name}`})
        .setTimestamp()
        const logChannel = client.channels.cache.get(guildSettings.logChannel)
        if (target.kickable) return logChannel.send({ embeds: [logs]});
    },
    options: [
        {
            name: 'member',
            description: 'L\'utilisateur à expulsé',
            type: 'USER',
            required: true,
            
            
        },
        {
            name: 'reason',
            description: 'La raison de l\'expulsion',
            type: 'STRING',
            required: true,
        }
        
    ],
    async runInteraction(client, interaction, guildSettings) {
        const target = interaction.options.getMember('member')
        const reason = interaction.options.getString('reason');

        const KICKABLE = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Kick')
        .setDescription(`<:Discord_Danger:1034472688242130965> ${target} ne peut pas être expulsé par le bot !`)
        .setTimestamp()
        const KICK = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Commande : Kick')
        .setDescription(`<:Discord_Danger:1034472688242130965> ${target} a été expulsé par le bot pour ${reason} !`)
        .setTimestamp()
        const logsI = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Logs :  Kick')
        .setDescription(`<:bc_icon_users:1035666894289653850> **${target}** a été expulsé par ${interaction.user} !`)
        .addFields(
            { name: 'Raison', value: `\`${reason}\``},
        )
        .setFooter({ text: `${interaction.guild.name}`})
        .setTimestamp()



        if (!target.kickable) return interaction.reply({ embeds: [KICKABLE], ephemeral: true});

        target.kick(reason);
       interaction.reply({ embeds: [KICK], ephemeral: true })
       const logChannel = client.channels.cache.get(guildSettings.logChannel)
       if (target.kickable) return logChannel.send({ embeds: [logsI], ephemeral: true});
    }
};