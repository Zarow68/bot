const { MessageEmbed } = require('discord.js');



module.exports = {
    name: 'kick',
    category: 'moderation',
    permissions: ['KICK_MEMBERS'],
    ownerOnly: false,
    usage: 'kick [@member] [reason]',
    examples: ['kick @Zarow raison'],
    description: 'Expulse un utilisateur avec une raison !',
    async run(client, message, args) {

        const UserKickEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setAuthor({ name: 'Quel membre souhaitez vous expulser ?'})
        .setDescription(`<:Discord_Danger:1034472688242130965> Indiquez un **utilisateur** à kick !`)
            
        const UserKickReasonEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setAuthor({ name :'Pour quelle raison souhaitez-vous exclure Zarow6802 ?'})
        .setDescription(`<:Discord_Danger:1034472688242130965> Indiquez une **raison** de kick !`)
            
        const KICKABLE = new MessageEmbed()
        .setColor('#FF0000')
        .setAuthor({ name : 'Ce membre ne peut pas être expulsé par le bot !'})
        .setDescription(`<:Discord_Danger:1034472688242130965> Ce membre ne peut pas être expulsé par le bot !`)
            
        


        if (!args[0]) return message.reply({ embeds: [UserKickEmbed]});
        if (!args[1]) return message.reply({ embeds: [UserKickReasonEmbed]});

        const target = message.mentions.members.find(m => m.id);
        const reason = args.slice(1).join(' ');

        if (!target.kickable) return message.reply({ embeds: [KICKABLE]});

        target.kick(reason);
        message.channel.send(`Le membre $ a été expulsé`)
        
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
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('member')
        const reason = interaction.options.getString('reason');

        if (!target.kickable) return interaction.reply({ embeds: [KICKABLE]});

        target.kick(reason);
       interaction.reply(`Le membre ${target} a été expulsé`)
    }
};