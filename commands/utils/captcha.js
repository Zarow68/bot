const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setCustomId('CAPTCHA-VERIF')
    .setEmoji('<:Verified_Simplified:1034469717240459354>')
    .setStyle('SUCCESS'),
    new MessageButton()
    .setCustomId('LANG-FR-VERIF')
    .setEmoji('🇫🇷')
    .setStyle('PRIMARY'),
    new MessageButton()
    .setCustomId('LANG-USA-VERIF')
    .setEmoji('🇺🇸')
    .setStyle('PRIMARY'),
    new MessageButton()
    .setCustomId('LANG-ES-VERIF')
    .setEmoji('🇪🇸')
    .setStyle('PRIMARY'),
)
module.exports = {
    name: 'captcha',
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'captcha',
    examples: ['captcha'],
    description: 'captcha',
    async run(client, message, args) {
        message.delete()
        const regles = new MessageEmbed()
        .setColor('#0fffff')
        .setTitle(':flag_fr: Vérification')
        .setDescription('\n<:Discord_Danger:1034472688242130965> **En cliquant sur le bouton de validation, vous prenez l\'entiere responsabilité de vos actes sur le serveur, même s\'ils ne sont pas autorisés**\n\n<:blue_role:1034492516176773221> __Si vous ne pouvez pas cliquer sur le bouton, merci d\'attendre 5/10mins__\n\n<:Verified_Simplified:1034469717240459354> **Cliquez sur le bouton pour voir dévérouiller le serveur.**')
        .setThumbnail('https://cdn.discordapp.com/attachments/1034410086191333395/1034523517124882452/8877-verified-simplified.png')
        message.channel.send({ embeds: [regles], components: [buttons] });
    },
    async runInteraction (client, interaction) {
        const regles = new MessageEmbed()
        .setColor('#0fffff')
        .setTitle(':flag_fr: Vérification')
        .setDescription('\n<:Discord_Danger:1034472688242130965> **En cliquant sur le bouton de validation, vous prenez l\'entiere responsabilité de vos actes sur le serveur, même s\'ils ne sont pas autorisés**\n\n<:blue_role:1034492516176773221> __Si vous ne pouvez pas cliquer sur le bouton, merci d\'attendre 5/10mins__\n\n<:Verified_Simplified:1034469717240459354> **Cliquez sur le bouton pour voir dévérouiller le serveur.**')
        .setThumbnail('https://cdn.discordapp.com/attachments/1034410086191333395/1034523517124882452/8877-verified-simplified.png')
        interaction.reply({ embeds: [regles], components: [buttons] });
    }
    
};